const posts = [
  ["Study Abroad Updates", "Latest admission updates, intakes, and application timelines."],
  ["Visa Updates", "Visa checklist, file preparation, and common mistake guidance."],
  ["Scholarship Info", "Funding opportunities and scholarship application support."],
];

export default function BlogPreview() {
  return (
    <section className="px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-bold text-cyan-300">Insights</p>
        <h2 className="mt-3 text-4xl font-black md:text-5xl">Latest Guidance Articles</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map(([title, desc]) => (
            <article key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7">
              <p className="text-3xl">📰</p>
              <h3 className="mt-6 text-2xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{desc}</p>
              <a href="#contact" className="mt-6 inline-flex font-bold text-cyan-300">
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
