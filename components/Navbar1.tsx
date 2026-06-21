"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar1() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Navbar */}
      <nav className="fixed top-50 left-1/2 z-30 w-[95%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-white/10 backdrop-blur-md">
        <div className="flex items-center justify-between rounded-full px-6 py-3">
          {/* Logo */}
          <Link href="/" className="text-xl font-black">
            Navbar
            <span className="text-blue-500"> One</span>
          </Link>

          {/* Menu / Close Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition hover:scale-105"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5"
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
                className="h-5 w-5"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-[60] flex items-center justify-center bg-black text-white transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-8 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-500 hover:scale-105"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            className="h-6 w-6"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <ul className="space-y-8 text-center">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="group text-5xl font-bold transition hover:text-blue-400"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Background Number */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="text-[25vw] font-black text-white/[0.03]">MENU</span>
        </div>
      </div>
    </>
  );
}
