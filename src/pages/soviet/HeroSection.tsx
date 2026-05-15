import { Lang, translations } from "./translations";

const IMG_HERO = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/179cabb6-a801-4865-8c48-e8f597973f61.jpg";
const IMG_ARCH = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/1abb08cc-9776-4281-917e-c4ace9046077.jpg";

interface HeroSectionProps {
  lang: Lang;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = translations[lang];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "95vh" }}>
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="Soviet Avant-garde" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(13,13,13,0.96) 55%, rgba(13,13,13,0.5) 100%)" }}
          />
          <div
            className="absolute top-0 right-0 w-2/5 h-full opacity-15"
            style={{
              background: "repeating-linear-gradient(-45deg, transparent, transparent 18px, var(--soviet-red) 18px, var(--soviet-red) 20px)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center" style={{ minHeight: "95vh" }}>
          <div style={{ maxWidth: "640px" }}>
            <div
              className="inline-block font-mono text-xs tracking-[0.25em] px-3 py-1 mb-10 animate-fade-in"
              style={{ color: "var(--soviet-gold)", border: "1px solid var(--soviet-gold)" }}
            >
              {t.hero.label}
            </div>

            <h1
              className="font-display text-white font-bold leading-none mb-6 animate-fade-in-up delay-200"
              style={{ fontSize: "clamp(4rem, 9vw, 8rem)", letterSpacing: "0.01em", whiteSpace: "pre-line" }}
            >
              {t.hero.title}
            </h1>

            <div className="flex items-center gap-3 mb-8 animate-fade-in-up delay-300">
              <div className="h-px w-20" style={{ backgroundColor: "var(--soviet-red)" }} />
              <div className="h-px w-6" style={{ backgroundColor: "var(--soviet-gold)" }} />
            </div>

            <p className="font-body text-white/65 leading-relaxed mb-10 animate-fade-in-up delay-400" style={{ fontSize: "1.2rem", maxWidth: "560px" }}>
              {t.hero.desc}
            </p>

            <div className="flex items-baseline gap-4 animate-fade-in-up delay-500">
              <span className="font-display font-bold text-5xl" style={{ color: "var(--soviet-gold)" }}>
                {t.hero.years}
              </span>
              <span className="font-mono text-xs tracking-widest text-white/40 uppercase">
                {t.hero.yearsLabel}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 flex">
          <div className="flex-1" style={{ backgroundColor: "var(--soviet-red)" }} />
          <div className="w-20" style={{ backgroundColor: "var(--soviet-gold)" }} />
          <div className="flex-1" style={{ backgroundColor: "var(--soviet-red)" }} />
        </div>
      </section>

      {/* Intro — что такое советский авангард */}
      <section className="py-24" style={{ backgroundColor: "var(--soviet-cream)" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Заголовок слева */}
          <div className="md:col-span-4">
            <div className="sticky top-28">
              <div className="w-12 h-1 mb-6" style={{ backgroundColor: "var(--soviet-red)" }} />
              <h2
                className="font-display font-bold leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "0.03em" }}
              >
                {t.intro.title}
              </h2>
              {/* Геометрический акцент */}
              <div className="mt-10 relative w-24 h-24 hidden md:block">
                <div className="absolute inset-0 border-4" style={{ borderColor: "var(--soviet-red)" }} />
                <div className="absolute inset-3 border-4" style={{ borderColor: "var(--soviet-gold)" }} />
                <div className="absolute inset-6" style={{ backgroundColor: "var(--soviet-dark)" }} />
              </div>
            </div>
          </div>

          {/* Тексты справа */}
          <div className="md:col-span-8 space-y-8">
            {[t.intro.text1, t.intro.text2, t.intro.text3].map((text, i) => (
              <p
                key={i}
                className="font-body leading-relaxed"
                style={{ fontSize: "1.15rem", color: i === 0 ? "var(--soviet-dark)" : "#444", borderLeft: i === 0 ? "3px solid var(--soviet-red)" : "none", paddingLeft: i === 0 ? "1.25rem" : "0" }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Разделительный баннер с архитектурой */}
      <section className="relative overflow-hidden" style={{ height: "420px" }}>
        <img src={IMG_ARCH} alt="VKHUTEMAS" className="w-full h-full object-cover" style={{ filter: "grayscale(30%)" }} />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(13,13,13,0.9) 0%, rgba(214,43,43,0.5) 60%, rgba(13,13,13,0.7) 100%)" }}
        />
        <div className="absolute inset-0 flex items-center px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="font-mono text-xs tracking-[0.3em] text-white/50 mb-4 uppercase">
              {lang === "ru" ? "ВХУТЕМАС · Москва · 1920–1930" : "VKHUTEMAS · Moscow · 1920–1930"}
            </div>
            <p
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)", letterSpacing: "0.02em", maxWidth: "700px" }}
            >
              {lang === "ru"
                ? "Школа, изменившая облик XX века"
                : "The school that changed the face of the 20th century"}
            </p>
          </div>
        </div>
        <div className="absolute top-8 right-8 w-20 h-20 border-2 opacity-20" style={{ borderColor: "var(--soviet-gold)" }} />
      </section>
    </>
  );
}
