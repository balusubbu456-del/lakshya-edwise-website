"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const quickLinks = [
  "Home",
  "Services",
  "Countries",
  "Loans",
  "Process",
  "Contact",
];

const services = [
  "Admission Guidance",
  "Visa Assistance",
  "Education Loans",
  "Scholarships",
];

const countries = [
  "USA",
  "Canada",
  "UK",
  "Australia",
  "Germany",
  "Ireland",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020617] px-6 py-16 lg:px-20">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-4">

        {/* Company */}

        <div>
          <h2 className="text-3xl font-black text-white">
            Lakshya International Edwise
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            Premium overseas education consultancy helping students achieve
            their dream of studying abroad with admissions, visa support,
            scholarships and education loans.
          </p>

          <div className="mt-8 flex gap-4">

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-cyan-300 transition duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-cyan-300 transition duration-300 hover:scale-110 hover:bg-blue-700 hover:text-white"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-cyan-300 transition duration-300 hover:scale-110 hover:bg-pink-600 hover:text-white"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-cyan-300 transition duration-300 hover:scale-110 hover:bg-red-600 hover:text-white"
            >
              <FaYoutube />
            </a>

          </div>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="text-xl font-black text-white">
            Quick Links
          </h3>

          <div className="mt-6 space-y-4">

            {quickLinks.map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="block text-slate-400 transition hover:translate-x-1 hover:text-cyan-300"
              >
                {item}
              </a>
            ))}

          </div>
        </div>

        {/* Services */}

        <div>

          <h3 className="text-xl font-black text-white">
            Services
          </h3>

          <div className="mt-6 space-y-4">

            {services.map((item) => (
              <p
                key={item}
                className="text-slate-400"
              >
                {item}
              </p>
            ))}

          </div>

          <h3 className="mt-8 text-xl font-black text-white">
            Countries
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">

            {countries.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-black text-white">
            Contact Us
          </h3>

          <div className="mt-6 space-y-5">

            <a
              href="tel:+919999999999"
              className="flex items-center gap-3 text-slate-400 transition hover:text-cyan-300"
            >
              <FaPhoneAlt />
              +91 99999 99999
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              className="flex items-center gap-3 text-slate-400 transition hover:text-cyan-300"
            >
              <FaWhatsapp />
              WhatsApp Consultation
            </a>

            <a
              href="mailto:info@lakshyaedwise.com"
              className="flex items-center gap-3 text-slate-400 transition hover:text-cyan-300"
            >
              <FaEnvelope />
              info@lakshyaedwise.com
            </a>

            <div className="flex items-center gap-3 text-slate-400">
              <FaMapMarkerAlt />
              India
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <FaClock />
              Mon - Sat | 10:00 AM - 7:00 PM
            </div>

          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 font-bold text-white transition hover:scale-105"
          >
            Book Free Consultation
          </a>

        </div>

      </div>

      <div className="relative mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row">

        <p>
          © 2026 Lakshya International Edwise. All Rights Reserved.
        </p>

        <p>
          Designed & Developed by Lakshya International Edwise
        </p>

      </div>

    </footer>
  );
}