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
    <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-6 sm:pt-32 lg:min-h-screen lg:px-20 lg:pb-24 lg:pt-36">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#071426] to-[#030712]" />
      <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="text-left">
          <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-200 sm:text-sm">
            Overseas Education • Visa • Scholarships • Loans
          </div>

          <h1 className="mt-6 text-[3.1rem] font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Your Dream
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent">
              University
            </span>
            <br />
            Starts Here
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Premium overseas education consultancy helping students with
            admissions, universities, visas, scholarships and education loans.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-white px-7 py-4 text-center font-bold text-slate-900 transition hover:scale-105"
            >
              Book Free Consultation
            </a>

            <a
              href="#countries"
              className="rounded-full border border-white/20 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
            >
              Explore Countries
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:rounded-3xl sm:p-6"
              >
                <div className="text-2xl font-black text-white sm:text-3xl">
                  {item.value}
                </div>
                <div className="mt-2 text-xs text-slate-400 sm:text-base">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex h-[430px] w-full max-w-[430px] items-center justify-center overflow-hidden sm:h-[520px] sm:max-w-[520px] lg:h-[560px] lg:max-w-[560px]">
          <div className="absolute h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-3xl sm:h-[460px] sm:w-[460px]" />

          <div className="scale-[0.72] sm:scale-90 lg:scale-100">
            <EarthGlobe />
          </div>

          <div className="absolute left-2 top-8 space-y-3 sm:left-0 sm:top-14">
            {flights.slice(0, 2).map((f) => (
              <div
                key={f}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur sm:px-5 sm:text-sm"
              >
                ✈ {f}
              </div>
            ))}
          </div>

          <div className="absolute bottom-10 right-2 space-y-3 sm:bottom-14 sm:right-0">
            {flights.slice(2).map((f) => (
              <div
                key={f}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur sm:px-5 sm:text-sm"
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