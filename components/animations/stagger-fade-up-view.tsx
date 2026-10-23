"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

/**
 * Classes that change how a parent grid or flex lays out this child.
 * They are moved onto the animation item, which is the real grid/flex child.
 */
const ITEM_LAYOUT_CLASS =
  /^(?:[\w-]+:)*!?(?:col-span|row-span|col-start|col-end|row-start|row-end|order|justify-self|place-self|basis)-[\w[\]/.%-]+$|^(?:[\w-]+:)*!?(?:self-(?:auto|start|end|center|stretch|baseline))$|^(?:[\w-]+:)*!?(?:flex-1|flex-auto|flex-none|grow|shrink)$|^(?:[\w-]+:)*!?(?:grow|shrink)-[\w[\]/.%-]+$|^(?:[\w-]+:)*!?min-w-0$/;

type ClassNameProps = { className?: string };

type StaggerFadeUpViewProps = {
  children: ReactNode;
  /** Grid or flex classes belong here. This element is the container. */
  className?: string;
  /** Extra classes for each animated child, such as h-full on equal-height cards. */
  itemClassName?: string;
  stagger?: number;
};

function splitLayoutClasses(className?: string) {
  const layout: string[] = [];
  const rest: string[] = [];

  for (const token of className?.split(/\s+/) ?? []) {
    if (!token) continue;
    if (ITEM_LAYOUT_CLASS.test(token)) layout.push(token);
    else rest.push(token);
  }

  return { layout: layout.join(" "), rest: rest.join(" ") };
}

export function StaggerFadeUpView({
  children,
  className,
  itemClassName,
  stagger = 0.08,
}: StaggerFadeUpViewProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: reduce
            ? { duration: 0 }
            : { staggerChildren: stagger, delayChildren: 0.04 },
        },
      }}
    >
      {Children.toArray(children).map((child, index) => {
        let layoutClass = "";
        let content: ReactNode = child;

        if (isValidElement(child)) {
          const element = child as ReactElement<ClassNameProps>;
          const split = splitLayoutClasses(element.props.className);
          layoutClass = split.layout;
          content = cloneElement(element, {
            className: split.rest || undefined,
          });
        }

        return (
          <motion.div
            key={index}
            variants={reduce ? undefined : itemVariants}
            className={cn("min-w-0", itemClassName, layoutClass)}
          >
            {content}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
