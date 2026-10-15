"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navbar";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-200 bg-white">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3"
      >
        <Link
          href="/"
          className="mr-2 text-sm font-semibold tracking-tight text-zinc-900"
        >
          SlimPossible
        </Link>
        <ul className="flex flex-wrap items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
