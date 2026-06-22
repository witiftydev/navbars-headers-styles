"use client";

import Link from "next/link";

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
  return (
    <footer className="relative mt-auto overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-indigo-950">
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-32">
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

        <div className="select-none text-center">
          <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-indigo-300 bg-clip-text text-[clamp(3rem,12vw,10rem)] font-black leading-none tracking-tighter text-transparent">
            Footer
          </span>
          <span className="-mt-2 block bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-[clamp(2rem,8vw,7rem)] font-black leading-none tracking-[0.3em] text-transparent">
            Two
          </span>
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
