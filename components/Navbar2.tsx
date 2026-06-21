"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar2() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-zinc-900 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-black tracking-tight">
          <span className="text-zinc-400">Navbar</span>
          <span className="text-emerald-400"> Two</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm font-medium text-zinc-300 transition hover:text-emerald-400"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/"
              className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-emerald-400"
            >
              Get Started
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-zinc-100 transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-zinc-100 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-zinc-100 transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 border-t border-zinc-800 px-6 pb-4 pt-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-emerald-400"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-emerald-400"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
