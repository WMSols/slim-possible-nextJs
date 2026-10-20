"use client";

import Script from "next/script";
import { useLayoutEffect } from "react";

const WIDGET_ID = "wdg_KO6IdwX5AAKL9dXqDa4XqbGr";
const HOST_ID = "zanderio-widget-host";

declare global {
  interface Window {
    ZanderioWidgetConfig?: { key: string };
  }
}

let pageMounted = false;
let watching = false;

function syncHost() {
  const host = document.getElementById(HOST_ID);
  if (!host) return;
  host.style.setProperty("display", pageMounted ? "block" : "none", "important");
}

function watchHost() {
  if (watching) return;
  watching = true;
  const observer = new MutationObserver(syncHost);
  observer.observe(document.body, { childList: true });
}

export function LegacyAiWidget() {
  useLayoutEffect(() => {
    window.ZanderioWidgetConfig = { key: WIDGET_ID };
    pageMounted = true;
    watchHost();
    syncHost();

    return () => {
      pageMounted = false;
      syncHost();
    };
  }, []);

  return (
    <Script
      id="legacy-ai-widget"
      src="https://cdn.zanderio.ai/widget/loader.js"
      strategy="afterInteractive"
      data-id={WIDGET_ID}
    />
  );
}
