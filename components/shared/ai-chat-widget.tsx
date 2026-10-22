"use client";

import Script from "next/script";
import { useLayoutEffect, useRef } from "react";

const WIDGET_ID = "wdg_KO6IdwX5AAKL9dXqDa4XqbGr";
const HOST_ID = "zanderio-widget-host";
const RING_PAD = 6;

declare global {
  interface Window {
    ZanderioWidgetConfig?: { key: string };
  }
}

let mountCount = 0;
let watching = false;

function syncHost() {
  const host = document.getElementById(HOST_ID);
  if (!host) return;
  host.style.setProperty(
    "display",
    mountCount > 0 ? "block" : "none",
    "important",
  );
}

function watchHost() {
  if (watching) return;
  watching = true;
  const observer = new MutationObserver(syncHost);
  observer.observe(document.body, { childList: true });
}

function findLauncher(host: HTMLElement) {
  const root = host.shadowRoot;
  if (!root) return null;

  return [...root.querySelectorAll("button")].find((button) => {
    const style = getComputedStyle(button);
    return (
      style.position === "fixed" &&
      Number.parseFloat(style.width) >= 48 &&
      Number.parseFloat(style.height) >= 48
    );
  });
}

export function AiChatWidget() {
  const ringRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    window.ZanderioWidgetConfig = { key: WIDGET_ID };
    mountCount += 1;
    watchHost();
    syncHost();

    const ring = ringRef.current;
    let frame = 0;
    let launcherObserver: MutationObserver | null = null;

    const placeRing = () => {
      if (!ring) return;

      const host = document.getElementById(HOST_ID);
      const launcher =
        host && getComputedStyle(host).display !== "none"
          ? findLauncher(host)
          : null;

      if (!launcher) {
        ring.style.display = "none";
        return;
      }

      const rect = launcher.getBoundingClientRect();
      if (rect.width < 8) {
        ring.style.display = "none";
        return;
      }

      const size = Math.round(rect.width + RING_PAD * 2);
      ring.style.display = "block";
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      ring.style.transform = `translate(${Math.round(rect.left - RING_PAD)}px, ${Math.round(rect.top - RING_PAD)}px)`;
    };

    const watchLauncher = () => {
      placeRing();
      const host = document.getElementById(HOST_ID);
      launcherObserver?.disconnect();
      launcherObserver = new MutationObserver(() => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(watchLauncher);
      });
      launcherObserver.observe(document.body, { childList: true });
      if (!host) return;
      launcherObserver.observe(host, {
        attributes: true,
        attributeFilter: ["style"],
      });
      if (host.shadowRoot) {
        launcherObserver.observe(host.shadowRoot, {
          childList: true,
          subtree: true,
        });
      }
    };

    watchLauncher();
    window.addEventListener("resize", placeRing);

    return () => {
      mountCount = Math.max(0, mountCount - 1);
      syncHost();
      cancelAnimationFrame(frame);
      launcherObserver?.disconnect();
      window.removeEventListener("resize", placeRing);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[2147483646] hidden rounded-full bg-linear-to-br from-brand-orange to-brand-blue"
      />
      <Script
        id="ai-chat-widget"
        src="https://cdn.zanderio.ai/widget/loader.js"
        strategy="afterInteractive"
        data-id={WIDGET_ID}
      />
    </>
  );
}
