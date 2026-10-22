import Image from "next/image";
import Link from "next/link";
import { footerLinkGroups } from "@/data/navbar";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#1E1E1E] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between md:px-8">
        <div className="max-w-sm">
          <Link href="/" className="flex w-fit flex-col gap-0.5 text-white">
            <Image
              src="/images/slim-possible-gp.png"
              alt="#SlimPossible"
              width={220}
              height={40}
              className="h-7 w-auto"
            />
            <span className="whitespace-nowrap text-[11px] text-white">
              <span className="text-[8px] italic">with</span> Diet, Stride
              &amp; Medical Advise
            </span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Understand your health, explore your options, and find the right
            professional support.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
                {group.title}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/85 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 SlimPossible. All rights reserved.</p>
          <p>An awareness initiative, not a substitute for medical advice.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
