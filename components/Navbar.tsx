const links = [
  { name: "Services", href: "#services" },
  { name: "Countries", href: "#countries" },
  { name: "Loans", href: "#loans" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/80 px-5 py-4 shadow-2xl shadow-blue-950/30 backdrop-blur-xl">
        <a href="#" className="leading-tight">
          <h1 className="text-base font-black tracking-tight text-white md:text-xl">
            Lakshya International Edwise
          </h1>
          <p className="text-xs font-medium text-cyan-300">
            Study Abroad • Visa • Education Loans
          </p>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="transition hover:text-white">
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:scale-105"
        >
          Free Consultation
        </a>
      </div>
    </header>
  );
}
