const faqs = [
  ["Do you help with university selection?", "Yes. We shortlist universities based on profile, course interest, budget, and country preference."],
  ["Do you support education loans?", "Yes. We provide eligibility guidance, documentation support, and bank/NBFC process help."],
  ["Do you help with visa documentation?", "Yes. We guide students with visa documents, checklist, and interview preparation."],
  ["Is the first consultation free?", "Yes. Students can book a free initial counselling session."],
];

export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-center font-bold text-cyan-300">FAQ</p>
        <h2 className="mt-3 text-center text-4xl font-black md:text-5xl">Frequently Asked Questions</h2>
        <div className="mt-10 space-y-4">
          {faqs.map(([q, a]) => (
            <div key={q} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6">
              <h3 className="text-xl font-black">{q}</h3>
              <p className="mt-3 leading-7 text-slate-400">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
