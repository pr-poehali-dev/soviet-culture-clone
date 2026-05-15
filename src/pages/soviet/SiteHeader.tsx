import { Lang, translations } from "./translations";

interface SiteHeaderProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  activeNav: string;
  setActiveNav: (key: string) => void;
}

const navKeys = ["home", "literature", "architecture", "painting", "cinema"] as const;

export default function SiteHeader({ lang, setLang, activeNav, setActiveNav }: SiteHeaderProps) {
  const t = translations[lang];
  const navLabels = [t.nav.home, t.nav.literature, t.nav.architecture, t.nav.painting, t.nav.cinema];

  return (
    <>
      {/* Top bar */}
      <div style={{ backgroundColor: "var(--soviet-red)" }} className="py-1.5 px-6 flex justify-between items-center">
        <span className="font-mono text-xs text-white tracking-widest opacity-80">
          {lang === "ru" ? "ОБРАЗОВАНИЕ · ИСТОРИЯ · КУЛЬТУРА" : "EDUCATION · HISTORY · CULTURE"}
        </span>
        <button
          onClick={() => setLang(lang === "ru" ? "en" : "ru")}
          className="font-mono text-xs text-white border border-white/40 px-3 py-0.5 hover:bg-white hover:text-red-700 transition-all duration-200 tracking-widest"
        >
          {lang === "ru" ? "EN" : "RU"}
        </button>
      </div>

      {/* Header */}
      <header style={{ backgroundColor: "var(--soviet-dark)" }} className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              style={{ backgroundColor: "var(--soviet-red)", border: "2px solid var(--soviet-gold)" }}
              className="w-10 h-10 flex items-center justify-center text-white text-lg font-bold"
            >
              ★
            </div>
            <div>
              <div className="font-display text-white tracking-[0.15em] text-sm font-bold leading-none">
                {t.siteTitle}
              </div>
              <div className="font-mono text-xs tracking-widest" style={{ color: "var(--soviet-gold)" }}>
                {t.siteSubtitle}
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navKeys.map((key, i) => (
              <button
                key={key}
                onClick={() => setActiveNav(key)}
                className={`nav-link font-display text-xs tracking-[0.12em] uppercase transition-colors ${
                  activeNav === key ? "text-white active" : "text-white/60 hover:text-white"
                }`}
              >
                {navLabels[i]}
              </button>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
