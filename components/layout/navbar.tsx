"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  Search,
  X,
} from "lucide-react";
import {
  mainNavItems,
  secondaryNavItems,
  type NavItem,
} from "@/data/navbar";
import { cn } from "@/lib/utils";

const NAV_BG = "bg-[#1E1E1E]";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [activePrimaryDropdown, setActivePrimaryDropdown] = useState<
    string | null
  >(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const desktopSearchRef = useRef<HTMLInputElement>(null);
  const closeMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const ignoreHamburgerHoverRef = useRef(false);

  useEffect(() => {
    if (desktopSearchOpen) desktopSearchRef.current?.focus();
  }, [desktopSearchOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const clearCloseMenuTimeout = () => {
    if (closeMenuTimeoutRef.current) {
      clearTimeout(closeMenuTimeoutRef.current);
      closeMenuTimeoutRef.current = null;
    }
  };

  const openDesktopMenu = () => {
    if (ignoreHamburgerHoverRef.current) return;
    clearCloseMenuTimeout();
    setDesktopMenuOpen(true);
    setActivePrimaryDropdown((current) => current ?? mainNavItems[0]?.label ?? null);
  };

  const closeDesktopMenu = () => {
    clearCloseMenuTimeout();
    setDesktopMenuOpen(false);
    setActivePrimaryDropdown(null);
  };

  const scheduleCloseDesktopMenu = () => {
    clearCloseMenuTimeout();
    closeMenuTimeoutRef.current = setTimeout(() => {
      closeDesktopMenu();
    }, 160);
  };

  useEffect(() => () => clearCloseMenuTimeout(), []);

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchQuery("");
    setDesktopSearchOpen(false);
    setMobileSearchOpen(false);
    setMobileOpen(false);
    setMobileDropdown(null);
    setDesktopMenuOpen(false);
  };

  const hasDropdown = (item: NavItem) =>
    Boolean((item.children && item.children.length > 0) || item.megaImage);

  const renderLogo = (size: "desktop" | "mobile") => (
    <span
      className={cn(
        "flex flex-col text-white",
        size === "desktop" ? "gap-0.5" : "gap-px",
      )}
    >
      <Image
        src="/images/slim-possible-gp.png"
        alt="#SlimPossible"
        width={220}
        height={40}
        className={cn(
          "w-auto",
          size === "desktop" ? "h-7" : "h-5",
        )}
        priority
      />
      <span
        className={cn(
          "whitespace-nowrap text-white",
          size === "desktop" ? "text-[11px]" : "text-[9px]",
        )}
      >
        <span
          className={cn(
            "italic",
            size === "desktop" ? "text-[8px]" : "text-[7px]",
          )}
        >
          with
        </span>{" "}
        Diet, Stride &amp; Medical Advise
      </span>
    </span>
  );

  const renderMegaMenu = (item: NavItem) => {
    if (!hasDropdown(item) || activePrimaryDropdown !== item.label) return null;

    const hasSubLinks = Boolean(item.children?.length);

    return (
      <div className="absolute left-0 right-0 top-full z-50 before:absolute before:inset-x-0 before:-top-8 before:h-8 before:bg-transparent">
        <div
          className={cn(
            NAV_BG,
            "origin-top rounded-b-[25px] border-t border-white/20 px-10 pb-10 pt-6 shadow-2xl",
          )}
        >
          <div className="grid grid-cols-12 gap-6 pb-4">
            <div className="col-span-5 flex flex-col gap-4">
              <h2 className="font-sans text-4xl leading-none text-white lg:text-5xl">
                {item.label}
              </h2>
              {item.description ? (
                <p className="mt-2 max-w-md text-base leading-snug text-white/90 lg:text-lg">
                  {item.description}
                </p>
              ) : null}
            </div>

            {hasSubLinks ? (
              <div className="col-span-3 flex flex-col justify-start border-l border-white/10 pl-8 pt-6">
                <div className="grid gap-4">
                  {item.children?.map((child) => (
                    <Link
                      key={`${child.label}-${child.href}`}
                      href={child.href}
                      className="w-fit border-b border-transparent pb-0.5 text-sm font-medium text-white transition-colors hover:border-[#89bdf2] hover:text-[#89bdf2]"
                      onClick={closeDesktopMenu}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {item.megaImage ? (
              <div
                className={cn(
                  "mt-4",
                  hasSubLinks ? "col-span-4" : "col-span-5 col-start-8",
                )}
              >
                <div className="group relative aspect-16/10 overflow-hidden rounded-xl">
                  <Image
                    src={item.megaImage}
                    alt={item.megaImageTitle || item.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/40 to-transparent p-6">
                    {item.megaImageTitle ? (
                      <h3 className="mb-1 text-xl font-semibold text-white">
                        {item.megaImageTitle}
                      </h3>
                    ) : null}
                    <Link
                      href={item.megaImageLink || item.href}
                      className="flex items-center justify-end gap-3 text-sm text-white transition-colors hover:text-white/90"
                      onClick={closeDesktopMenu}
                    >
                      {item.megaImageSubtitle}
                      <ArrowRight className="h-5 w-5 shrink-0" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  const navLinkClass = (item: NavItem) =>
    cn(
      "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white transition-all",
      activePrimaryDropdown === item.label
        ? "bg-white/15"
        : "hover:text-gray-300",
      pathname === item.href && "text-white",
    );

  return (
    <header
      className={cn(
        "pointer-events-none fixed left-0 right-0 z-50 mx-auto w-[90%]",
        isHomePage ? "top-14 md:top-[5.5rem]" : "top-4 md:top-6",
      )}
    >
      {/* Desktop */}
      <div
        className={cn(
          "pointer-events-auto relative hidden flex-col shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-colors xl:flex",
          NAV_BG,
          activePrimaryDropdown ? "rounded-t-[25px]" : "rounded-[25px]",
        )}
        onMouseLeave={scheduleCloseDesktopMenu}
        onMouseEnter={clearCloseMenuTimeout}
      >
        {desktopSearchOpen ? (
          <div className="flex w-full items-center justify-between gap-6 px-8 py-4">
            <div className="flex shrink-0 items-center gap-4">
              <Search className="h-5 w-5 text-white" />
              <span className="hidden text-sm font-medium text-white lg:block">
                Search SlimPossible
              </span>
            </div>

            <form
              onSubmit={handleSearchSubmit}
              className="flex flex-1 items-center gap-4"
            >
              <div className="flex flex-1 items-center rounded-full bg-[#222222] px-5 py-3">
                <input
                  ref={desktopSearchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search slimpossible.com"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[#999999]"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 rounded-[15px] bg-white p-3.5 text-black transition-colors hover:bg-gray-200"
              >
                <Search className="h-6 w-6" />
              </button>
            </form>

            <button
              className="ml-2 shrink-0 text-white hover:text-gray-300"
              onClick={() => setDesktopSearchOpen(false)}
              aria-label="Close search"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        ) : (
          <div className="flex w-full flex-col">
            <div className="flex w-full items-center justify-between px-8 py-4">
              <Link
                href="/"
                className="flex shrink-0 items-center"
                onClick={closeDesktopMenu}
              >
                {renderLogo("desktop")}
              </Link>

              <div className="flex shrink-0 items-center gap-6">
                <button
                  className="text-white hover:text-gray-300"
                  onClick={() => {
                    setDesktopSearchOpen(true);
                    closeDesktopMenu();
                  }}
                  aria-label="Open search"
                >
                  <Search className="h-5 w-5" />
                </button>
                <button
                  className="text-white hover:text-gray-300"
                  onMouseEnter={openDesktopMenu}
                  onMouseLeave={() => {
                    ignoreHamburgerHoverRef.current = false;
                  }}
                  onClick={() => {
                    if (desktopMenuOpen) {
                      ignoreHamburgerHoverRef.current = true;
                      closeDesktopMenu();
                    } else {
                      ignoreHamburgerHoverRef.current = false;
                      openDesktopMenu();
                    }
                  }}
                  aria-label="Toggle menu"
                  aria-expanded={desktopMenuOpen}
                >
                  {desktopMenuOpen ? (
                    <X className="h-8 w-8" strokeWidth={2} />
                  ) : (
                    <Menu className="h-8 w-8" strokeWidth={2} />
                  )}
                </button>
              </div>
            </div>

            {desktopMenuOpen ? (
              <div className="flex w-full items-center justify-between px-8 pb-5 pt-2">
                <nav className="flex flex-1 items-center justify-start gap-2">
                  {mainNavItems.map((item) => (
                    <div
                      key={item.href}
                      className="static"
                      onMouseEnter={() =>
                        hasDropdown(item) && setActivePrimaryDropdown(item.label)
                      }
                    >
                      <Link
                        href={item.href}
                        className={navLinkClass(item)}
                        onClick={closeDesktopMenu}
                      >
                        {item.label}
                      </Link>
                      {renderMegaMenu(item)}
                    </div>
                  ))}
                </nav>

                <div className="flex shrink-0 items-center gap-2">
                  {secondaryNavItems.map((item) => (
                    <div
                      key={item.href}
                      className="static"
                      onMouseEnter={() =>
                        hasDropdown(item) && setActivePrimaryDropdown(item.label)
                      }
                    >
                      <Link
                        href={item.href}
                        className={navLinkClass(item)}
                        onClick={closeDesktopMenu}
                      >
                        {item.label}
                      </Link>
                      {renderMegaMenu(item)}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* Mobile collapsed bar */}
      <div
        className={cn(
          "pointer-events-auto flex items-center justify-between rounded-[25px] px-3 py-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.08)] xl:hidden",
          NAV_BG,
        )}
      >
        {mobileSearchOpen ? (
          <form
            onSubmit={handleSearchSubmit}
            className="flex w-full items-center gap-2"
          >
            <div className="flex min-w-0 flex-1 items-center rounded-full bg-[#222222] px-3 py-1.5">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[#999999]"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 rounded-[10px] bg-white p-2 text-black"
              aria-label="Submit search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="shrink-0 p-1 text-white"
              onClick={() => setMobileSearchOpen(false)}
              aria-label="Close search"
            >
              <X className="h-4 w-4" />
            </button>
          </form>
        ) : (
          <>
            <Link href="/" className="flex min-w-0 shrink-0 items-center">
              {renderLogo("mobile")}
            </Link>
            <div className="flex shrink-0 items-center gap-0.5">
              <button
                className="p-1.5 text-white"
                onClick={() => setMobileSearchOpen(true)}
                aria-label="Open search"
              >
                <Search className="h-4 w-4" />
              </button>
              <button
                className="p-1.5 text-white"
                onClick={() => {
                  setMobileSearchOpen(false);
                  setMobileOpen(true);
                }}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" strokeWidth={2} />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Mobile full-screen menu */}
      {mobileOpen ? (
        <div
          className={cn(
            "pointer-events-auto fixed inset-0 z-[100] flex flex-col xl:hidden",
            NAV_BG,
          )}
        >
          <div className="flex items-center justify-between px-6 py-6">
            <Link
              href="/"
              className="flex min-w-0 shrink-0 items-center"
              onClick={() => {
                setMobileOpen(false);
                setMobileDropdown(null);
              }}
            >
              {renderLogo("mobile")}
            </Link>
            <button
              className="p-2 text-white"
              onClick={() => {
                setMobileOpen(false);
                setMobileDropdown(null);
              }}
              aria-label="Close menu"
            >
              <X className="h-8 w-8" strokeWidth={2} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            <form
              onSubmit={handleSearchSubmit}
              className="mb-8 flex items-center gap-2"
            >
              <div className="flex min-w-0 flex-1 items-center rounded-full bg-[#222222] px-4 py-3">
                <Search className="mr-3 h-4 w-4 shrink-0 text-white/50" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  className="w-full bg-transparent text-base text-white outline-none placeholder:text-[#999999]"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 rounded-[12px] bg-white p-3 text-black"
                aria-label="Submit search"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>

            {!mobileDropdown ? (
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  {mainNavItems.map((item) => (
                    <div
                      key={item.href}
                      className="flex items-center justify-between"
                    >
                      {hasDropdown(item) ? (
                        <button
                          className="group flex w-full items-center justify-between text-left"
                          onClick={() => setMobileDropdown(item.label)}
                        >
                          <span className="font-sans text-3xl text-white transition-colors group-hover:text-gray-300">
                            {item.label}
                          </span>
                          <ChevronRight className="h-6 w-6 text-white" />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="w-full text-left font-sans text-3xl text-white transition-colors hover:text-gray-300"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-6">
                  {secondaryNavItems.map((item) => (
                    <div
                      key={item.href}
                      className="flex items-center justify-between"
                    >
                      {hasDropdown(item) ? (
                        <button
                          className="group flex w-full items-center justify-between text-left"
                          onClick={() => setMobileDropdown(item.label)}
                        >
                          <span className="font-sans text-2xl text-white transition-colors group-hover:text-gray-300">
                            {item.label}
                          </span>
                          <ChevronRight className="h-5 w-5 text-white" />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="w-full text-left font-sans text-2xl text-white transition-colors hover:text-gray-300"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col pb-10">
                <button
                  onClick={() => setMobileDropdown(null)}
                  className="mb-6 flex w-fit items-center gap-2 text-left text-sm text-white/50 transition-colors hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" /> Back to menu
                </button>

                {(() => {
                  const activeItem = [
                    ...mainNavItems,
                    ...secondaryNavItems,
                  ].find((i) => i.label === mobileDropdown);
                  if (!activeItem) return null;

                  return (
                    <div className="flex flex-col">
                      <h2 className="mb-8 inline-block w-fit border-b-2 border-white pb-2 font-sans text-[2rem] leading-tight text-white">
                        {activeItem.label}
                      </h2>

                      <div className="mb-12 flex flex-col gap-6">
                        {activeItem.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="text-lg font-medium text-white transition-all hover:text-[#89bdf2] hover:underline hover:underline-offset-4"
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileDropdown(null);
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>

                      {activeItem.megaImage ? (
                        <div className="group relative h-[250px] w-full overflow-hidden rounded-2xl">
                          <Image
                            src={activeItem.megaImage}
                            alt={activeItem.megaImageTitle || activeItem.label}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/30 to-transparent p-5">
                            <Link
                              href={activeItem.megaImageLink || activeItem.href}
                              className="flex items-center justify-end gap-2 text-xs font-medium text-white transition-colors hover:text-white/90"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileDropdown(null);
                              }}
                            >
                              {activeItem.megaImageSubtitle}
                              <ArrowRight className="h-3 w-3 shrink-0" />
                            </Link>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
