"use client";

import Link from "next/link";
import {
  BookOpen,
  ChartColumn,
  CircleHelp,
  Home,
  Info,
  Menu,
  SquarePlus,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { StaggerFadeUpView } from "@/components/animations/stagger-fade-up-view";
import { AiBrandMark } from "@/app/slim-possible-ai/components/ai-brand-mark";
import {
  slimPossibleAiData,
  type AiSidebarItem,
} from "@/data/slim-possible-ai";
import { cn } from "@/lib/utils";

const ICONS: Record<AiSidebarItem["icon"], typeof Home> = {
  home: Home,
  health: SquarePlus,
  book: BookOpen,
  support: CircleHelp,
  cgm: ChartColumn,
  about: Info,
  community: Users,
};

function SidebarLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="AI page navigation">
      <StaggerFadeUpView className="mt-10 flex flex-col gap-1">
      {slimPossibleAiData.sidebar.map((item) => {
        const Icon = ICONS[item.icon];
        const external = item.href.startsWith("http");

        return (
          <Link
            key={`${item.label}-${item.href}`}
            href={item.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            onClick={onNavigate}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/95 transition hover:bg-white/10 md:text-base"
          >
            <Icon className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
            <span>{item.label}</span>
          </Link>
        );
      })}
      </StaggerFadeUpView>
    </nav>
  );
}

export function AiSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <aside className="relative z-20 hidden w-[16.5rem] shrink-0 flex-col bg-[#6b4f8a]/55 px-5 py-6 backdrop-blur-sm lg:flex xl:w-[18rem] xl:px-6 xl:py-8">
        <Link href="/" className="w-fit">
          <AiBrandMark />
        </Link>
        <SidebarLinks />
      </aside>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between px-4 py-4 lg:hidden">
        <Link href="/" className="pointer-events-auto">
          <AiBrandMark />
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="pointer-events-auto flex size-11 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 bg-black/45 transition-opacity",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
          aria-label="Close menu overlay"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute left-0 top-0 flex h-full w-[min(100%,18rem)] flex-col bg-[#5a3f78] px-5 py-6 shadow-2xl transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <AiBrandMark />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex size-10 items-center justify-center rounded-full text-white/90 hover:bg-white/10"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <SidebarLinks onNavigate={() => setMobileOpen(false)} />
        </aside>
      </div>
    </>
  );
}
