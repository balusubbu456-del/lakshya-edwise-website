const countries = [
  {
    flag: "🇺🇸",
    symbol: "🗽",
    name: "USA",
    tag: "World-class research & STEM programs",
    universities: "4,000+ Universities",
    tuition: "From $20K/year",
    intake: "Jan • May • Sep",
    visa: "F1 Visa Guidance",
    work: "OPT / STEM OPT",
    scholarship: "Merit Scholarships",
  },
  {
    flag: "🇨🇦",
    symbol: "🍁",
    name: "Canada",
    tag: "Affordable education with PR pathways",
    universities: "220+ Institutions",
    tuition: "From CAD 18K/year",
    intake: "Jan • May • Sep",
    visa: "SDS / Non-SDS",
    work: "PGWP Options",
    scholarship: "College Scholarships",
  },
  {
    flag: "🇬🇧",
    symbol: "🏰",
    name: "United Kingdom",
    tag: "Fast-track degrees & global reputation",
    universities: "160+ Universities",
    tuition: "From £14K/year",
    intake: "Jan • Sep",
    visa: "Student Visa",
    work: "Graduate Route",
    scholarship: "University Grants",
  },
  {
    flag: "🇦🇺",
    symbol: "🎭",
    name: "Australia",
    tag: "High quality education & work options",
    universities: "40+ Universities",
    tuition: "From AUD 22K/year",
    intake: "Feb • Jul",
    visa: "Subclass 500",
    work: "Post Study Work",
    scholarship: "Destination Aid",
  },
  {
    flag: "🇩🇪",
    symbol: "🏛️",
    name: "Germany",
    tag: "Low tuition and strong engineering focus",
    universities: "400+ Institutions",
    tuition: "Low Tuition Options",
    intake: "Summer • Winter",
    visa: "APS & Visa Support",
    work: "Job Seeker Route",
    scholarship: "DAAD Options",
  },
  {
    flag: "🇮🇪",
    symbol: "☘️",
    name: "Ireland",
    tag: "Tech hub with strong career pathways",
    universities: "Top Tech Programs",
    tuition: "From €12K/year",
    intake: "Jan • Sep",
    visa: "Study Visa",
    work: "Stay Back Option",
    scholarship: "Merit Aid",
  },
  {
    flag: "🇫🇷",
    symbol: "🗼",
    name: "France",
    tag: "Business, fashion, hospitality & arts",
    universities: "Global Schools",
    tuition: "Affordable Options",
    intake: "Jan • Sep",
    visa: "Campus France",
    work: "Part-time Work",
    scholarship: "Eiffel Aid",
  },
  {
    flag: "🇳🇿",
    symbol: "🌿",
    name: "New Zealand",
    tag: "Safe destination with career-focused study",
    universities: "Career Programs",
    tuition: "From NZD 20K/year",
    intake: "Feb • Jul",
    visa: "Student Visa",
    work: "Post Study Visa",
    scholarship: "Govt Aid",
  },
];

export default function Countries() {
  return (
    <section id="countries" className="relative overflow-hidden px-6 py-24 lg:px-20">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-bold text-cyan-300">Popular Destinations</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Choose Your Study Country
            </h2>
          </div>

          <p className="max-w-xl text-slate-400">
            Compare countries by tuition, intake, visa type, scholarship options,
            and work opportunities.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((country) => (
            <div
              key={country.name}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-2xl hover:shadow-cyan-950/30"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/25" />

              <div className="flex items-center justify-between">
                <span className="text-5xl">{country.flag}</span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-3xl transition group-hover:scale-110">
                  {country.symbol}
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-black">{country.name}</h3>

              <p className="mt-2 min-h-[48px] text-sm leading-6 text-cyan-100/80">
                {country.tag}
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <p>🎓 {country.universities}</p>
                <p>💰 {country.tuition}</p>
                <p>📅 {country.intake}</p>
                <p>🛂 {country.visa}</p>
                <p>💼 {country.work}</p>
                <p>🏆 {country.scholarship}</p>
              </div>

              <a
                href="#contact"
                className="mt-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-cyan-200 transition hover:bg-white/10"
              >
                Enquire Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}