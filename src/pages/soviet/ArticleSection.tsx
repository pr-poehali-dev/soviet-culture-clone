import { Lang, translations } from "./translations";

const IMG_CINEMA = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/5ddf4502-1f2d-4c6e-860a-6a82eafa1957.jpg";

interface ArticleSectionProps {
  lang: Lang;
}

export default function ArticleSection({ lang }: ArticleSectionProps) {
  const t = translations[lang];

  return (
    <>
      {/* Тематические разделы */}
      {t.sections.map((section, sectionIdx) => {
        const isDark = sectionIdx % 2 === 1;
        return (
          <section
            key={section.id}
            id={section.id}
            className="py-24"
            style={{ backgroundColor: isDark ? "var(--soviet-dark)" : "var(--soviet-cream)" }}
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Заголовок раздела */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                <div className="md:col-span-4">
                  <div
                    className="inline-block font-mono text-xs tracking-[0.2em] px-3 py-1 mb-4"
                    style={isDark
                      ? { color: "var(--soviet-gold)", border: "1px solid var(--soviet-gold)" }
                      : { color: "var(--soviet-red)", border: "1px solid var(--soviet-red)" }
                    }
                  >
                    {section.tag}
                  </div>
                  <h2
                    className="font-display font-bold leading-tight"
                    style={{
                      fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                      letterSpacing: "0.02em",
                      color: isDark ? "white" : "var(--soviet-dark)",
                    }}
                  >
                    {section.title}
                  </h2>
                </div>
                <div className="md:col-span-8 flex items-end">
                  <p
                    className="font-body leading-relaxed"
                    style={{
                      fontSize: "1.15rem",
                      color: isDark ? "rgba(255,255,255,0.55)" : "#555",
                      borderLeft: `3px solid ${isDark ? "var(--soviet-gold)" : "var(--soviet-red)"}`,
                      paddingLeft: "1.25rem",
                    }}
                  >
                    {section.lead}
                  </p>
                </div>
              </div>

              {/* Блоки текста */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {section.blocks.map((block, bi) => (
                  <div key={bi} className="relative">
                    {/* Номер блока */}
                    <div
                      className="font-display font-bold text-7xl absolute -top-4 -left-2 select-none pointer-events-none"
                      style={{ color: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.05)", lineHeight: 1 }}
                    >
                      {String(bi + 1).padStart(2, "0")}
                    </div>
                    <div className="relative">
                      <div className="w-6 h-0.5 mb-4" style={{ backgroundColor: isDark ? "var(--soviet-gold)" : "var(--soviet-red)" }} />
                      <h3
                        className="font-display font-bold text-lg mb-3"
                        style={{ letterSpacing: "0.03em", color: isDark ? "white" : "var(--soviet-dark)" }}
                      >
                        {block.subtitle}
                      </h3>
                      <p
                        className="font-body leading-relaxed"
                        style={{ fontSize: "1rem", color: isDark ? "rgba(255,255,255,0.55)" : "#555", lineHeight: 1.85 }}
                      >
                        {block.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Разделитель — изображение кино */}
      <section className="relative overflow-hidden" style={{ height: "500px" }}>
        <img src={IMG_CINEMA} alt="Soviet Cinema" className="w-full h-full object-cover" style={{ filter: "grayscale(60%) contrast(1.1)" }} />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.5) 0%, rgba(13,13,13,0.85) 100%)" }}
        />
        <div className="absolute inset-0 flex items-end pb-16 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="font-mono text-xs tracking-[0.25em] text-white/40 mb-3 uppercase">
              {lang === "ru" ? "Дзига Вертов · Человек с киноаппаратом · 1929" : "Dziga Vertov · Man with a Movie Camera · 1929"}
            </div>
            <p
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(1.3rem, 3vw, 2.5rem)", letterSpacing: "0.02em", maxWidth: "800px" }}
            >
              {lang === "ru"
                ? "Камера не лжёт. Камера видит то, что скрыто от человека."
                : "The camera does not lie. The camera sees what is hidden from the human eye."}
            </p>
          </div>
        </div>
      </section>

      {/* Финальная цитата */}
      <div className="diagonal-stripe py-20" style={{ borderTop: "4px solid var(--soviet-red)", borderBottom: "4px solid var(--soviet-red)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-5xl mb-6" style={{ color: "var(--soviet-red)" }}>★</div>
          <blockquote
            className="font-display font-bold mb-5"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", letterSpacing: "0.03em", color: "var(--soviet-dark)" }}
          >
            {t.closingQuote.text}
          </blockquote>
          <cite className="font-mono text-sm tracking-widest not-italic" style={{ color: "var(--soviet-red)" }}>
            {t.closingQuote.author}
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
