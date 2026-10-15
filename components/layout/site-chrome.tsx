"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = pathname.startsWith("/slim-possible-ai");

  if (hideChrome) {
    return <main className="flex min-h-full flex-1 flex-col">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-full flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
