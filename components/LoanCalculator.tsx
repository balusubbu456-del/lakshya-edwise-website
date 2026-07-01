export default function LoanCalculator() {
  return (
    <section id="loans" className="px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-8 md:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold text-cyan-300">Education Loan Support</p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Hassle-Free Education Loan Guidance
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              Get expert support for eligibility, documentation, bank/NBFC
              guidance, collateral and non-collateral education loan options.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Eligibility Guidance",
                "Bank / NBFC Support",
                "Collateral & Non-Collateral",
                "Document Checklist",
                "Loan Process Support",
                "Quick Callback Assistance",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 font-bold text-white"
                >
                  ✅ {item}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-black text-white shadow-lg shadow-blue-600/30 transition hover:scale-105"
            >
              Get Loan Guidance
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8">
            <h3 className="text-2xl font-black text-white">
              Loan Assistance Partners
            </h3>

            <p className="mt-3 text-slate-400">
              We guide students with documentation and process support for banks
              and education loan providers.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {["SBI", "HDFC", "ICICI", "Axis", "Avanse", "Credila"].map(
                (bank) => (
                  <div
                    key={bank}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center text-xl font-black text-cyan-200"
                  >
                    {bank}
                  </div>
                )
              )}
            </div>

            <div className="mt-8 rounded-2xl bg-cyan-400/10 p-5 text-cyan-100">
              💡 Tip: Students can submit enquiry from the contact form. Our
              counsellor will call back for loan support.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}