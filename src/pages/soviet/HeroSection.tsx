import Icon from "@/components/ui/icon";
import { Lang, translations } from "./translations";

const IMG_HERO = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/7393a300-7e3c-4256-b663-4bce54f4eace.jpg";
const IMG_ARCH = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/32db735e-57c8-427e-be13-840cc5095797.jpg";

interface HeroSectionProps {
  lang: Lang;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = translations[lang];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "90vh" }}>
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="Soviet Culture" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(26,15,15,0.92) 50%, rgba(26,15,15,0.4) 100%)",
            }}
          />
          <div
            className="absolute top-0 right-0 w-1/3 h-full opacity-20"
            style={{
              background: "repeating-linear-gradient(-45deg, transparent, transparent 20px, var(--soviet-red) 20px, var(--soviet-red) 22px)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center" style={{ minHeight: "90vh" }}>
          <div className="max-w-2xl">
            <div
              className="inline-block font-mono text-xs tracking-[0.2em] px-3 py-1 mb-8 animate-fade-in"
              style={{ color: "var(--soviet-gold)", border: "1px solid var(--soviet-gold)" }}
            >
              {t.hero.label}
            </div>

            <h1
              className="font-display text-white font-bold leading-none mb-8 animate-fade-in-up delay-200"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", letterSpacing: "0.02em", whiteSpace: "pre-line" }}
            >
              {t.hero.title}
            </h1>

            <div className="flex items-center gap-4 mb-8 animate-fade-in-up delay-300">
              <div className="h-0.5 w-16" style={{ backgroundColor: "var(--soviet-red)" }} />
              <div className="h-0.5 w-4" style={{ backgroundColor: "var(--soviet-gold)" }} />
            </div>

            <p className="text-white/70 text-lg leading-relaxed mb-10 font-body animate-fade-in-up delay-400" style={{ maxWidth: "520px" }}>
              {t.hero.desc}
            </p>

            <div className="flex gap-4 animate-fade-in-up delay-500">
              <button
                className="font-display text-sm tracking-widest px-8 py-4 font-bold transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--soviet-red)", color: "white" }}
              >
                {t.hero.cta}
              </button>
              <button
                className="font-display text-sm tracking-widest px-8 py-4 font-bold transition-all hover:bg-white/10"
                style={{ border: "2px solid rgba(255,255,255,0.4)", color: "white" }}
              >
                {t.hero.ctaSub}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 flex">
          <div className="flex-1" style={{ backgroundColor: "var(--soviet-red)" }} />
          <div className="w-16" style={{ backgroundColor: "var(--soviet-gold)" }} />
          <div className="flex-1" style={{ backgroundColor: "var(--soviet-red)" }} />
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ backgroundColor: "var(--soviet-charcoal)" }} className="py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display font-bold text-3xl" style={{ color: "var(--soviet-gold)" }}>
                {s.num}
              </div>
              <div className="font-mono text-xs tracking-widest text-white/50 mt-1 uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured courses */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5" style={{ backgroundColor: "var(--soviet-red)" }} />
            <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: "var(--soviet-red)" }}>
              {lang === "ru" ? "Курсы и статьи" : "Courses & Articles"}
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-3" style={{ letterSpacing: "0.04em" }}>
            {t.sections.featured}
          </h2>
          <p className="font-body text-lg" style={{ color: "var(--soviet-charcoal)", opacity: 0.6, maxWidth: "560px" }}>
            {t.sections.featuredSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.cards.map((card) => (
            <div
              key={card.id}
              className="course-card cursor-pointer bg-white p-8"
              style={{ border: "1px solid rgba(0,0,0,0.1)", boxShadow: "3px 3px 0 rgba(0,0,0,0.08)" }}
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ backgroundColor: "var(--soviet-red)" }}
                >
                  <Icon name={card.icon} size={20} className="text-white" />
                </div>
                <span
                  className="font-mono text-xs tracking-widest px-3 py-1"
                  style={{ backgroundColor: "rgba(192,57,43,0.08)", color: "var(--soviet-red)" }}
                >
                  {card.tag}
                </span>
              </div>

              <div className="font-mono text-xs tracking-widest mb-2 uppercase" style={{ color: "var(--soviet-red)" }}>
                {card.cat}
              </div>
              <h3 className="font-display font-bold text-xl mb-3" style={{ letterSpacing: "0.03em" }}>
                {card.title}
              </h3>
              <p className="font-body text-base leading-relaxed" style={{ color: "#555" }}>
                {card.desc}
              </p>

              <div className="mt-6 flex items-center gap-2" style={{ color: "var(--soviet-red)" }}>
                <span className="font-mono text-xs tracking-widest">
                  {lang === "ru" ? "Перейти к курсу" : "Go to course"}
                </span>
                <Icon name="ArrowRight" size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture banner */}
      <section className="relative overflow-hidden" style={{ height: "480px" }}>
        <img src={IMG_ARCH} alt="Architecture" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(192,57,43,0.85) 0%, rgba(26,15,15,0.7) 100%)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <div className="font-mono text-xs tracking-[0.25em] text-white/60 mb-6 uppercase">
              {lang === "ru" ? "Советская Архитектура" : "Soviet Architecture"}
            </div>
            <h2
              className="font-display font-bold text-white mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "0.04em", whiteSpace: "pre-line" }}
            >
              {lang === "ru" ? "От авангарда\nк имперскому величию" : "From Avant-garde\nto Imperial Grandeur"}
            </h2>
            <button
              className="font-display text-sm tracking-widest px-10 py-4 font-bold text-white border-2 border-white/60 hover:bg-white hover:text-red-800 transition-all"
            >
              {lang === "ru" ? "Изучить раздел" : "Explore Section"}
            </button>
          </div>
        </div>
        <div
          className="absolute top-8 left-8 w-16 h-16 border-4 opacity-30"
          style={{ borderColor: "var(--soviet-gold)" }}
        />
        <div
          className="absolute bottom-8 right-8 w-24 h-24 border-4 opacity-20"
          style={{ borderColor: "white" }}
        />
      </section>
    </>
  );
}
