"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar5() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-80 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-cyan-500/20 bg-zinc-950/90 backdrop-blur-xl shadow-lg shadow-cyan-500/5"
            : "bg-transparent"
        }`}
      >
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-zinc-800/50">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.slice(0, 2).map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="group relative text-sm font-medium text-zinc-400 transition-colors hover:text-cyan-400"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/"
            className="relative text-2xl font-black tracking-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Navbar
            </span>
            <span className="ml-1 text-white">Five</span>
            <span className="absolute -top-1 -right-2 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <ul className="hidden items-center gap-8 md:flex">
              {navItems.slice(2).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group relative text-sm font-medium text-zinc-400 transition-colors hover:text-cyan-400"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>

            <button
              className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-800 hover:text-cyan-400"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-[2px] w-5 rounded-full bg-zinc-100 transition-all duration-300 ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-zinc-100 transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-zinc-100 transition-all duration-300 ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`absolute bottom-0 left-0 right-0 rounded-t-3xl border-t border-cyan-500/20 bg-zinc-950 px-6 pb-10 pt-8 shadow-2xl transition-transform duration-500 ${
            open ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-zinc-700" />

          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-4 rounded-2xl px-4 py-4 text-lg font-semibold text-zinc-400 transition-all hover:bg-zinc-900 hover:text-cyan-400"
                  style={{
                    transitionDelay: open ? `${index * 80}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-sm text-zinc-600 transition group-hover:bg-zinc-800 group-hover:text-cyan-400">
                    {index + 1}
                  </span>
                  {item.name}
                  <svg
                    className="ml-auto h-5 w-5 -translate-x-2 text-zinc-700 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-zinc-800 pt-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-4 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
