"use client";

import Link from "next/link";
import { useState } from "react";

const footerColumns = [
  {
    title: "Explore",
    links: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Integrations", href: "/integrations" },
      { name: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" },
      { name: "Status", href: "/status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
      { name: "Licenses", href: "/licenses" },
    ],
  },
];

export default function Footer2() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="relative mt-auto overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-indigo-950">
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-32">
        {/* Newsletter */}
        <div className="mb-20 rounded-2xl border border-indigo-500/10 bg-gradient-to-r from-indigo-900/40 via-slate-800/30 to-indigo-900/40 p-8 shadow-2xl shadow-indigo-500/5 backdrop-blur-sm sm:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 ring-1 ring-indigo-400/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-6 w-6 text-indigo-300"
              >
                <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Stay in the loop
            </h3>
            <p className="mt-2 text-sm text-indigo-300/70">
              Get curated insights, product updates, and early access to new features
              delivered to your inbox.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="footer2-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer2-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="flex-1 rounded-xl border border-indigo-500/20 bg-indigo-950/50 px-5 py-3 text-sm text-white placeholder-indigo-300/40 outline-none transition focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/20"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:from-indigo-400 hover:to-violet-400 hover:shadow-indigo-400/30 active:scale-[0.97]"
              >
                Subscribe
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                </svg>
              </button>
            </form>
            <p className="mt-3 text-xs text-indigo-400/40">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold tracking-wide text-indigo-300 uppercase">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group relative inline-flex items-center gap-1.5 text-sm text-slate-400 transition hover:text-white"
                    >
                      <span className="h-px w-0 bg-indigo-400 transition-all duration-300 group-hover:w-3" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-indigo-800/30" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-b from-indigo-950 via-slate-900 to-indigo-950 px-6 text-xs text-indigo-400/60">
              ✦ &nbsp;✦ &nbsp;✦
            </span>
          </div>
        </div>

        {/* Brand name — animated aurora gradient + glow */}
        <div className="relative select-none text-center">
          <span
            className="block bg-clip-text text-[clamp(3.5rem,14vw,12rem)] font-black leading-none tracking-tighter text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #6366f1, #a78bfa, #f472b6, #818cf8, #6366f1)",
              backgroundSize: "200% 200%",
              animation: "shimmer 6s ease-in-out infinite",
              WebkitTextStroke: "1px rgba(255,255,255,0.08)",
              textShadow:
                "0 0 40px rgba(99,102,241,0.3), 0 0 80px rgba(167,139,250,0.15), 0 0 120px rgba(244,114,182,0.1)",
            }}
          >
            Footer Two
          </span>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
            <span className="text-xs font-medium tracking-[0.3em] text-indigo-400/50 uppercase">
              Est. 2026
            </span>
            <span className="h-px w-8 bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
          </div>
          <style>{`@keyframes shimmer { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }`}</style>
        </div>
      </div>

      {/* Cloud shapes at bottom */}
      <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80c320 60 480-40 720 0s400-60 720 0v40H0V80z"
            fill="rgb(15,23,42)"
            opacity="0.3"
          />
          <path
            d="M0 60c240 50 400-30 600 0s360-50 600 0 240-30 240 0v60H0V60z"
            fill="rgb(30,27,75)"
            opacity="0.4"
          />
          <path
            d="M0 90c160 30 280-20 420 0s260-30 420 0 260-30 420 0 160-30 180 0v30H0V90z"
            fill="rgb(15,23,42)"
            opacity="0.5"
          />
          <path
            d="M0 50c120 40 200-20 300 0s180-30 300 0 180-30 300 0 180-30 300 0 120-25 240 0v70H0V50z"
            fill="rgb(49,46,129)"
            opacity="0.15"
          />
          <path
            d="M0 70c200 35 320-25 480 0s280-25 420 0 260-25 420 0 200-25 120 0v50H0V70z"
            fill="rgb(99,102,241)"
            opacity="0.08"
          />
        </svg>
      </div>
    </footer>
  );
}
