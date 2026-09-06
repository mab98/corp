"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/performance", label: "Performance" },
  { href: "/reliability", label: "Reliability" },
  { href: "/scale", label: "Scale" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="absolute z-10 w-full text-white">
      <nav className="container mx-auto flex flex-wrap items-center justify-between px-6 py-6">
        <Link href="/" className="text-3xl font-bold tracking-tight">
          Corp
        </Link>

        <div className="flex items-center gap-7 text-2xl font-medium">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center gap-2 pb-1 transition-colors ${
                  active ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full border transition-colors ${
                    active ? "border-white bg-white" : "border-white/40"
                  }`}
                />
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px bg-white transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
