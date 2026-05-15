import Icon from "@/components/ui/icon";
import { Lang, translations } from "./translations";

const IMG_PAINTING = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/8d9964ad-0e86-40ed-b45f-05c0df3e5385.jpg";

interface ArticleSectionProps {
  lang: Lang;
}

export default function ArticleSection({ lang }: ArticleSectionProps) {
  const t = translations[lang];

  return (
    <>
      {/* Article of the week */}
      <section className="py-20" style={{ backgroundColor: "var(--soviet-dark)" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-block font-mono text-xs tracking-[0.2em] px-3 py-1 mb-8"
              style={{ color: "var(--soviet-gold)", border: "1px solid var(--soviet-gold)" }}
            >
              {t.featured.label}
            </div>
            <h2
              className="font-display font-bold text-white mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "0.03em", whiteSpace: "pre-line" }}
            >
              {t.featured.title}
            </h2>
            <div className="h-0.5 w-20 mb-6" style={{ backgroundColor: "var(--soviet-red)" }} />
            <p className="font-body text-lg text-white/60 leading-relaxed mb-8">
              {t.featured.desc}
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-white/40">
                <Icon name="User" size={14} />
                <span className="font-mono text-xs">{t.featured.author}</span>
              </div>
              <div className="flex items-center gap-2 text-white/40">
                <Icon name="Clock" size={14} />
                <span className="font-mono text-xs">{t.featured.time}</span>
              </div>
            </div>
            <button
              className="font-display text-sm tracking-widest px-8 py-4 font-bold transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--soviet-red)", color: "white" }}
            >
              {t.featured.readMore}
            </button>
          </div>

          <div className="relative">
            <img
              src={IMG_PAINTING}
              alt="Soviet Art"
              className="w-full object-cover"
              style={{ height: "420px", filter: "sepia(20%) saturate(80%)" }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-full h-full border-2 opacity-30"
              style={{ borderColor: "var(--soviet-red)" }}
            />
            <div
              className="absolute top-4 right-4 font-display text-white/10 font-bold select-none pointer-events-none"
              style={{ fontSize: "8rem", lineHeight: 1 }}
            >
              1
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <div className="diagonal-stripe py-16" style={{ borderTop: "4px solid var(--soviet-red)", borderBottom: "4px solid var(--soviet-red)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-4xl mb-4" style={{ color: "var(--soviet-red)" }}>★</div>
          <blockquote className="font-display font-bold text-2xl md:text-3xl mb-4" style={{ letterSpacing: "0.04em" }}>
            {t.quote.text}
          </blockquote>
          <cite className="font-mono text-sm tracking-widest not-italic" style={{ color: "var(--soviet-red)" }}>
            {t.quote.author}
          </cite>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "var(--soviet-dark)" }} className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div
                  style={{ backgroundColor: "var(--soviet-red)", border: "2px solid var(--soviet-gold)" }}
                  className="w-8 h-8 flex items-center justify-center text-white text-sm font-bold"
                >
                  ★
                </div>
                <span className="font-display text-white font-bold tracking-[0.15em] text-sm">
                  {t.siteTitle}
                </span>
              </div>
              <p className="font-body text-white/40 leading-relaxed max-w-md">
                {t.footer.desc}
              </p>
            </div>
            <div>
              <div className="font-mono text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "var(--soviet-gold)" }}>
                {t.footer.sections}
              </div>
              <ul className="space-y-2">
                {t.footer.links.map((link, i) => (
                  <li key={i}>
                    <button className="font-body text-white/40 hover:text-white transition-colors text-sm">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="pt-8 flex items-center justify-between"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span className="font-mono text-xs text-white/20">{t.footer.rights}</span>
            <div className="flex gap-1">
              <div className="w-6 h-1" style={{ backgroundColor: "var(--soviet-red)" }} />
              <div className="w-2 h-1" style={{ backgroundColor: "var(--soviet-gold)" }} />
              <div className="w-6 h-1" style={{ backgroundColor: "var(--soviet-red)" }} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
