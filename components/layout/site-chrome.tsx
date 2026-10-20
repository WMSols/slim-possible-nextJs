"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAiLanding = pathname === "/slim-possible-ai";
  const isAiChat = pathname.startsWith("/slim-possible-ai/chat");

  // Chat uses its own sidebar chrome — no site navbar/footer.
  if (isAiChat) {
    return <main className="flex min-h-full flex-1 flex-col">{children}</main>;
  }

  // Landing keeps the site navbar but skips the footer for a full-bleed hero.
  if (isAiLanding) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-full flex-1 flex-col">{children}</main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-full flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
