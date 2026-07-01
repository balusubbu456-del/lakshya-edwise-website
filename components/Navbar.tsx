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
    <header className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2">
      <div className="rounded-full border border-white/10 bg-[#08101f]/90 backdrop-blur-xl shadow-2xl">
        <div className="flex h-20 items-center justify-between px-6">
          <div>
            <h2 className="text-xl font-black text-white">
              Lakshya International Edwise
            </h2>
            <p className="text-sm text-cyan-300">
              Study Abroad • Visa • Education Loans
            </p>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-cyan-300 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:inline-flex rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-7 py-3 font-semibold text-white shadow-lg"
          >
            Free Consultation
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-white"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 py-3 text-center font-bold text-white"
              >
                Free Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}