const services = [
  ["🎓", "Admission Guidance", "Course selection, university admission process, and offer letter support."],
  ["🏛️", "University Selection", "Shortlist universities based on profile, budget, goals, and career path."],
  ["📝", "Application Processing", "Application forms, SOP/LOR checklist, and document submission tracking."],
  ["💰", "Scholarship Guidance", "Scholarship matching, fee-waiver guidance, and funding opportunity support."],
  ["🛂", "Visa Assistance", "Visa checklist, file preparation, mock interview, and process guidance."],
  ["🏦", "Education Loan Support", "Bank/NBFC loan eligibility, documentation, and step-by-step support."],
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-bold text-cyan-300">Our Services</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-black md:text-5xl">
          Complete Overseas Education Support
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([icon, title, desc]) => (
            <div key={title} className="group rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 transition hover:-translate-y-2 hover:bg-white/[0.09] hover:shadow-2xl hover:shadow-cyan-950/30">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-3xl">
                {icon}
              </div>
              <h3 className="text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
