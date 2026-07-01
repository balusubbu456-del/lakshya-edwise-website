const steps = [
  ["01", "Free Counselling", "Understand profile, goals, budget, and country preference."],
  ["02", "University Shortlist", "Select best universities and courses for admission chances."],
  ["03", "Application & Documents", "Prepare applications, SOP/LOR, and required documents."],
  ["04", "Visa & Loan Support", "Visa file support, loan guidance, and pre-departure help."],
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-bold text-cyan-300">Process</p>
        <h2 className="mt-3 text-4xl font-black md:text-5xl">Simple Admission Journey</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map(([no, title, desc]) => (
            <div key={no} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6">
              <p className="text-5xl font-black text-cyan-300/40">{no}</p>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
