"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar3() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-16 left-0 right-0 z-40 border-b border-violet-500/20 bg-white/80 backdrop-blur-lg dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2 py-4 text-xl font-black tracking-tight"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-sm text-white">
              N
            </span>
            <span>
              Navbar<span className="text-violet-600"> Three</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="group relative px-4 py-6 text-sm font-medium text-zinc-600 transition hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-violet-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
            <li className="ml-4">
              <Link
                href="/"
                className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500"
              >
                Sign Up
              </Link>
            </li>
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-6 w-6 text-violet-600"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-6 w-6 text-zinc-700 dark:text-zinc-300"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 border-l border-violet-500/20 bg-white transition-transform duration-300 dark:bg-zinc-950 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
          <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
            Menu
          </span>
          <button
            onClick={() => setOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="space-y-1 p-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-violet-50 hover:text-violet-600 dark:text-zinc-400 dark:hover:bg-violet-950/50 dark:hover:text-violet-400"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-lg bg-violet-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
