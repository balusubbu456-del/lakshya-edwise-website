"use client";

import EarthGlobe from "./Globe";

const stats = [
  { value: "500+", label: "Students Guided" },
  { value: "10+", label: "Countries" },
  { value: "95%", label: "Visa Support" },
];

const flights = [
  "India → USA",
  "India → Canada",
  "India → UK",
  "India → Australia",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-24 pt-36 lg:px-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#071426] to-[#030712]" />

      <div className="absolute -top-20 left-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-200">
            Overseas Education • Visa • Scholarships • Loans
          </div>

          <h1 className="mt-7 text-5xl font-black leading-tight lg:text-7xl">
            Your Dream
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent">
              University
            </span>
            <br />
            Starts Here
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
            Premium overseas education consultancy helping students with
            admissions, universities, visas, scholarships and education loans.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-8 py-4 font-bold text-slate-900 transition hover:scale-105"
            >
              Book Free Consultation
            </a>

            <a
              href="#countries"
              className="rounded-full border border-white/20 px-8 py-4 font-bold transition hover:bg-white/10"
            >
              Explore Countries
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-5">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="text-3xl font-black">{item.value}</div>
                <div className="mt-2 text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />

          <EarthGlobe />

          <div className="absolute left-0 top-10 space-y-4">
            {flights.slice(0, 2).map((f) => (
              <div
                key={f}
                className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm backdrop-blur"
              >
                ✈ {f}
              </div>
            ))}
          </div>

          <div className="absolute bottom-10 right-0 space-y-4">
            {flights.slice(2).map((f) => (
              <div
                key={f}
                className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm backdrop-blur"
              >
                🎓 {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}