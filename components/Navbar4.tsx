"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { name: "About", href: "/about", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { name: "Services", href: "/services", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
  { name: "Contact", href: "/contact", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
];

export default function Navbar4() {
  const [active, setActive] = useState("Home");

  return (
    <>
      {/* Desktop Top Navbar - xl+ */}
      <nav className="fixed top-32 left-0 right-0 z-30 hidden bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 shadow-lg xl:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-black tracking-tight text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-sm backdrop-blur-sm">
              N
            </span>
            <span>
              Navbar<span className="text-amber-200"> Four</span>
            </span>
          </Link>

          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                    active === item.name
                      ? "bg-white text-rose-600 shadow-md"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5"
              >
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-semibold text-white backdrop-blur-sm">
              U
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Bottom Nav - below xl */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-rose-200 bg-white px-2 pb-safe dark:border-zinc-800 dark:bg-zinc-950 xl:hidden">
        <ul className="flex items-center justify-around">
          {navItems.map((item) => (
            <li key={item.name} className="flex-1">
              <Link
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`flex flex-col items-center gap-0.5 py-2 text-[10px] font-medium transition-colors ${
                  active === item.name
                    ? "text-rose-600 dark:text-rose-400"
                    : "text-zinc-400 dark:text-zinc-600"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={active === item.name ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth={active === item.name ? 0 : 1.5}
                  className="h-6 w-6"
                >
                  <path d={item.icon} />
                </svg>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
