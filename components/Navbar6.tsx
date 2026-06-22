"use client";

import Link from "next/link";
import { useState } from "react";

interface DropdownItem {
  name: string;
  href: string;
  desc: string;
}

interface NavItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
    dropdown: [
      {
        name: "Our Story",
        href: "/story",
        desc: "How we started and where we're going",
      },
      {
        name: "Team",
        href: "/team",
        desc: "Meet the people behind the product",
      },
      { name: "Careers", href: "/careers", desc: "Join us and make an impact" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      {
        name: "Web Design",
        href: "/web-design",
        desc: "Beautiful, conversion-focused design",
      },
      {
        name: "Development",
        href: "/development",
        desc: "Full-stack engineering solutions",
      },
      {
        name: "Consulting",
        href: "/consulting",
        desc: "Technical strategy and guidance",
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    dropdown: [
      {
        name: "Get in Touch",
        href: "/contact",
        desc: "We'd love to hear from you",
      },
      { name: "Support", href: "/support", desc: "24/7 customer support" },
    ],
  },
];

export default function Navbar6() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  return (
    <>
      <nav className="fixed top-96 left-0 right-0 z-50 border-b border-amber-500/20 bg-zinc-950 shadow-xl shadow-amber-500/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2 py-5 text-xl font-black tracking-tight text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-sm font-bold text-black">
              N
            </span>
            <span>
              Navbar<span className="text-amber-500"> Six</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredDropdown(item.name)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <Link
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className={`relative px-4 py-6 text-sm font-medium transition-colors ${
                    active === item.name
                      ? "text-amber-400"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                      active === item.name ? "w-full" : "w-0"
                    }`}
                  />
                </Link>

                {item.dropdown && hoveredDropdown === item.name && (
                  <div className="absolute left-0 top-full w-64 rounded-b-xl border border-amber-500/10 bg-zinc-900 p-4 shadow-2xl shadow-amber-500/10">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="group flex flex-col rounded-lg px-4 py-3 transition hover:bg-zinc-800"
                      >
                        <span className="text-sm font-medium text-zinc-200 transition group-hover:text-amber-400">
                          {sub.name}
                        </span>
                        <span className="mt-0.5 text-xs text-zinc-500">
                          {sub.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-800 hover:text-amber-400"
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
              className="flex h-10 w-10 flex-col items-center justify-center gap-1 lg:hidden"
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

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 z-[70] h-full w-72 border-r border-amber-500/10 bg-zinc-950 transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-sm font-bold text-black">
            N
          </span>
          <button
            onClick={() => setOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-800 hover:text-amber-400"
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

        <div className="overflow-y-auto p-4">
          {navItems.map((item) => (
            <div key={item.name} className="mb-1">
              <Link
                href={item.href}
                onClick={() => {
                  setActive(item.name);
                  setOpen(false);
                }}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                  active === item.name
                    ? "bg-amber-500/10 text-amber-400"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-4 py-2 text-xs text-zinc-500 transition hover:bg-zinc-800 hover:text-zinc-300"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-800 p-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-amber-400"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
