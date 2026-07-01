const stories = [
  { name: "Student Success", text: "Guided from university selection to visa documentation with a smooth process." },
  { name: "Visa Support", text: "Clear counselling, document checklist, and professional follow-up support." },
  { name: "Loan Guidance", text: "Education loan eligibility and documentation process explained clearly." },
];

export default function Testimonials() {
  return (
    <section id="success" className="px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-8 md:p-12">
        <p className="font-bold text-cyan-300">Success Stories</p>
        <h2 className="mt-3 text-4xl font-black md:text-5xl">Trusted By Students</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <div key={story.name} className="rounded-[2rem] bg-slate-950/60 p-7">
              <p className="text-3xl">⭐</p>
              <p className="mt-5 leading-7 text-slate-300">“{story.text}”</p>
              <p className="mt-6 font-black text-white">{story.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
