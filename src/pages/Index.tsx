import { useState } from "react";
import Icon from "@/components/ui/icon";

type Lang = "ru" | "en";

const translations = {
  ru: {
    siteTitle: "СОВЕТСКАЯ КУЛЬТУРА",
    siteSubtitle: "Образовательный портал",
    nav: {
      home: "Главная",
      literature: "Литература",
      architecture: "Архитектура",
      painting: "Живопись",
      cinema: "Кино",
    },
    hero: {
      label: "★ ОБРАЗОВАТЕЛЬНЫЙ РЕСУРС ★",
      title: "Великое\nНаследие\nСССР",
      desc: "Исследуйте богатейшую культуру советской эпохи — от конструктивизма до социалистического реализма, от поэзии Маяковского до фильмов Тарковского.",
      cta: "Начать обучение",
      ctaSub: "Смотреть курсы",
    },
    stats: [
      { num: "500+", label: "Статей" },
      { num: "48", label: "Курсов" },
      { num: "1917–1991", label: "Охват эпохи" },
      { num: "12", label: "Дисциплин" },
    ],
    sections: {
      featured: "Избранные материалы",
      featuredSub: "Погружайтесь в советскую культуру через наши лучшие курсы и статьи",
    },
    cards: [
      {
        id: "literature",
        cat: "Литература",
        title: "Серебряный век и советская поэзия",
        desc: "От символизма к революционной лирике: Маяковский, Пастернак, Ахматова и судьбы русской поэзии в XX веке.",
        tag: "12 уроков",
        icon: "BookOpen",
      },
      {
        id: "architecture",
        cat: "Архитектура",
        title: "Конструктивизм и сталинский ампир",
        desc: "Как советские архитекторы создавали новый мир — от рабочих клубов авангарда до семи сталинских высоток.",
        tag: "8 уроков",
        icon: "Building2",
      },
      {
        id: "painting",
        cat: "Живопись",
        title: "Социалистический реализм",
        desc: "Официальный стиль СССР: от первых пятилеток до поздней советской живописи. Дейнека, Герасимов, Налбандян.",
        tag: "15 уроков",
        icon: "Palette",
      },
      {
        id: "cinema",
        cat: "Кино",
        title: "Золотой век советского кино",
        desc: "Эйзенштейн, Вертов, Тарковский — как советский кинематограф стал явлением мирового масштаба.",
        tag: "10 уроков",
        icon: "Film",
      },
    ],
    featured: {
      label: "★ СТАТЬЯ НЕДЕЛИ",
      title: "Советский плакат как\nязык эпохи",
      desc: "Плакат в СССР был больше чем искусством — это был язык власти, надежды и ежедневной жизни миллионов. Художники-конструктивисты создали визуальный код целой цивилизации.",
      author: "Проф. Иванова А.С.",
      time: "15 мин чтения",
      readMore: "Читать далее →",
    },
    quote: {
      text: "«Искусство должно принадлежать народу»",
      author: "— В.И. Ленин",
    },
    footer: {
      desc: "Образовательный портал о культуре, искусстве и истории Советского Союза.",
      sections: "Разделы",
      links: ["Главная", "Литература", "Архитектура", "Живопись", "Кино"],
      rights: "© 2024 Советская Культура. Образовательный ресурс.",
    },
  },
  en: {
    siteTitle: "SOVIET CULTURE",
    siteSubtitle: "Educational Portal",
    nav: {
      home: "Home",
      literature: "Literature",
      architecture: "Architecture",
      painting: "Painting",
      cinema: "Cinema",
    },
    hero: {
      label: "★ EDUCATIONAL RESOURCE ★",
      title: "The Great\nHeritage\nof the USSR",
      desc: "Explore the rich culture of the Soviet era — from Constructivism to Socialist Realism, from Mayakovsky's poetry to Tarkovsky's films.",
      cta: "Start Learning",
      ctaSub: "Browse Courses",
    },
    stats: [
      { num: "500+", label: "Articles" },
      { num: "48", label: "Courses" },
      { num: "1917–1991", label: "Era covered" },
      { num: "12", label: "Disciplines" },
    ],
    sections: {
      featured: "Featured Materials",
      featuredSub: "Dive into Soviet culture through our best courses and articles",
    },
    cards: [
      {
        id: "literature",
        cat: "Literature",
        title: "The Silver Age and Soviet Poetry",
        desc: "From symbolism to revolutionary verse: Mayakovsky, Pasternak, Akhmatova and the fate of Russian poetry in the 20th century.",
        tag: "12 lessons",
        icon: "BookOpen",
      },
      {
        id: "architecture",
        cat: "Architecture",
        title: "Constructivism and Stalinist Empire",
        desc: "How Soviet architects created a new world — from avant-garde workers' clubs to the Seven Sisters skyscrapers.",
        tag: "8 lessons",
        icon: "Building2",
      },
      {
        id: "painting",
        cat: "Painting",
        title: "Socialist Realism",
        desc: "The official style of the USSR: from the first five-year plans to late Soviet painting. Deineka, Gerasimov, Nalbandyan.",
        tag: "15 lessons",
        icon: "Palette",
      },
      {
        id: "cinema",
        cat: "Cinema",
        title: "The Golden Age of Soviet Cinema",
        desc: "Eisenstein, Vertov, Tarkovsky — how Soviet filmmaking became a world-class cultural phenomenon.",
        tag: "10 lessons",
        icon: "Film",
      },
    ],
    featured: {
      label: "★ ARTICLE OF THE WEEK",
      title: "The Soviet Poster as\nthe Language of an Era",
      desc: "The poster in the USSR was more than art — it was the language of power, hope and the daily life of millions. Constructivist artists created a visual code for an entire civilization.",
      author: "Prof. Ivanova A.S.",
      time: "15 min read",
      readMore: "Read more →",
    },
    quote: {
      text: "«Art must belong to the people»",
      author: "— V.I. Lenin",
    },
    footer: {
      desc: "Educational portal about the culture, art and history of the Soviet Union.",
      sections: "Sections",
      links: ["Home", "Literature", "Architecture", "Painting", "Cinema"],
      rights: "© 2024 Soviet Culture. Educational Resource.",
    },
  },
};

const IMG_HERO = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/7393a300-7e3c-4256-b663-4bce54f4eace.jpg";
const IMG_PAINTING = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/8d9964ad-0e86-40ed-b45f-05c0df3e5385.jpg";
const IMG_ARCH = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/32db735e-57c8-427e-be13-840cc5095797.jpg";

export default function Index() {
  const [lang, setLang] = useState<Lang>("ru");
  const [activeNav, setActiveNav] = useState("home");
  const t = translations[lang];

  const navKeys = ["home", "literature", "architecture", "painting", "cinema"] as const;
  const navLabels = [t.nav.home, t.nav.literature, t.nav.architecture, t.nav.painting, t.nav.cinema];

  return (
    <div className="min-h-screen soviet-texture" style={{ backgroundColor: "var(--soviet-cream)", color: "var(--soviet-dark)" }}>

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
    </div>
  );
}
