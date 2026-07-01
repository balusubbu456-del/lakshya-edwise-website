"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Services", href: "#services" },
  { name: "Countries", href: "#countries" },
  { name: "Loans", href: "#loans" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-[9999] w-full bg-[#020617]/95 px-4 py-4 backdrop-blur-xl lg:left-1/2 lg:top-4 lg:w-[94%] lg:max-w-7xl lg:-translate-x-1/2 lg:rounded-full lg:border lg:border-white/10 lg:bg-[#061024]/90">
      <div className="flex items-center justify-between">
        <a href="#" onClick={() => setOpen(false)}>
          <h2 className="text-lg font-black leading-tight text-white sm:text-xl">
            Lakshya International Edwise
          </h2>
          <p className="text-xs font-semibold text-cyan-300 sm:text-sm">
            Study Abroad • Visa • Education Loans
          </p>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-white/80 hover:text-cyan-300">
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-7 py-3 font-bold text-white lg:inline-flex"
        >
          Free Consultation
        </a>

        <button onClick={() => setOpen(!open)} className="text-white lg:hidden">
          {open ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-full z-[9999] mt-3 w-full rounded-3xl border border-white/10 bg-[#020617] p-6 shadow-2xl lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-xl font-semibold text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 py-4 text-center font-black text-white"
            >
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}