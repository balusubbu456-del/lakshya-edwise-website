const items = ["Admissions", "Visa Filing", "Scholarships", "Education Loans", "Documentation", "Pre-Departure"];

export default function TrustLogos() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] px-6 py-6 lg:px-20">
      <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto no-scrollbar">
        {items.map((item) => (
          <div key={item} className="min-w-fit rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-bold text-slate-300">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
