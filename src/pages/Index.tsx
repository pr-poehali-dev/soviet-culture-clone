import { useState } from "react";
import Icon from "@/components/ui/icon";

type Lang = "ru" | "en";

const IMG_HERO    = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/179cabb6-a801-4865-8c48-e8f597973f61.jpg";
const IMG_ARCH    = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/1abb08cc-9776-4281-917e-c4ace9046077.jpg";
const IMG_CINEMA  = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/5ddf4502-1f2d-4c6e-860a-6a82eafa1957.jpg";

const IMG_MAYAKOVSKY  = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/f502efd5-8898-453e-91f4-0b4f2dea6d31.jpg";
const IMG_RODCHENKO   = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/67ca0652-d39c-4d44-bb5b-60e9f7e746ba.jpg";
const IMG_VERTOV      = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/788aef42-de64-4471-b9ab-242c8c15c874.jpg";
const IMG_PAINTING    = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/10d7075f-9d83-4db9-9851-777d43470497.jpg";
const IMG_POSTER      = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/7b78e410-c40c-4293-b178-9586920853d0.jpg";
const IMG_MELNIKOV    = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/e6216e14-65c4-4598-9264-8c9c338e1d6e.jpg";
const IMG_EISENSTEIN  = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/94a96145-c6f3-416f-a6fb-67b41af7119d.jpg";
const IMG_KHLEBNIKOV  = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/1492642a-f7f9-44af-8de4-226f33ee9b32.jpg";

// Rutube embed IDs — публичные фильмы из открытого доступа
const RUTUBE_VERTOV      = "929254b24755d8852f15981c60995663"; // Человек с киноаппаратом
const RUTUBE_EISENSTEIN  = "8561cb92284205749b590c1ad9e68379"; // Броненосец Потёмкин
const RUTUBE_MAYAKOVSKY  = "72d1e60688995088deb89fa0d2bc689e"; // Маяковский читает стихи

const NAV_KEYS = ["home", "literature", "architecture", "painting", "cinema"] as const;

const T = {
  ru: {
    siteTitle: "АВАНГАРД СССР",
    siteSubtitle: "Культура 1920–1930-х",
    topbar: "ОБРАЗОВАНИЕ · ИСТОРИЯ · КУЛЬТУРА",
    nav: ["Главная", "Литература", "Архитектура", "Живопись", "Кино"],
    hero: {
      label: "★ 1917 — 1934 ★",
      title: "Эпоха\nАвангарда",
      desc: "Тринадцать лет — с революции до «великого перелома» — советское искусство переживало один из самых мощных творческих взрывов в мировой истории. Конструктивизм, ВХУТЕМАС, Родченко, Маяковский, Вертов — имена, навсегда изменившие облик культуры XX века.",
      years: "1917 — 1934",
      yearsLabel: "годы советского авангарда",
    },
    intro: {
      title: "Что такое советский авангард?",
      paragraphs: [
        "После революции 1917 года Россия стала лабораторией нового искусства. Художники, архитекторы, поэты и режиссёры были убеждены: искусство должно не просто отражать действительность, но строить её. Они отказались от академических канонов, орнаментики и украшательства — в пользу функции, конструкции и движения.",
        "Советский авангард 1920-х — это не один стиль, а целое созвездие направлений: конструктивизм в архитектуре и дизайне, супрематизм и производственное искусство в живописи, ЛЕФ и пролеткульт в литературе, монтажная школа в кино. Объединяло их одно — вера в то, что новый человек требует нового искусства.",
        "К 1934 году эта эпоха была официально завершена: постановление о социалистическом реализме закрыло авангардный эксперимент. Но за полтора десятилетия советские художники создали наследие, которое изучают, цитируют и воспроизводят до сих пор.",
      ],
    },
    videoLabel: "Смотреть на Rutube",
    figureLabel: "Ключевая фигура",
    artworkLabel: "Произведение",
  },
  en: {
    siteTitle: "USSR AVANT-GARDE",
    siteSubtitle: "Culture of the 1920s–1930s",
    topbar: "EDUCATION · HISTORY · CULTURE",
    nav: ["Home", "Literature", "Architecture", "Painting", "Cinema"],
    hero: {
      label: "★ 1917 — 1934 ★",
      title: "The Age of\nAvant-Garde",
      desc: "Thirteen years — from the revolution to the 'great break' — Soviet art experienced one of the most powerful creative explosions in world history. Constructivism, VKHUTEMAS, Rodchenko, Mayakovsky, Vertov — names that forever changed the face of 20th-century culture.",
      years: "1917 — 1934",
      yearsLabel: "years of Soviet avant-garde",
    },
    intro: {
      title: "What is the Soviet Avant-Garde?",
      paragraphs: [
        "After the 1917 revolution, Russia became a laboratory for new art. Artists, architects, poets and directors were convinced: art must not merely reflect reality, but build it. They rejected academic canons, ornamentation and decoration — in favour of function, construction and movement.",
        "The Soviet avant-garde of the 1920s is not one style but a whole constellation of directions: constructivism in architecture and design, suprematism and industrial art in painting, LEF and Proletkult in literature, the montage school in cinema. What united them was a single belief — that a new person demands new art.",
        "By 1934 this era was officially over: the resolution on socialist realism closed the avant-garde experiment. But in a decade and a half, Soviet artists created a legacy that is still studied, cited and reproduced today.",
      ],
    },
    videoLabel: "Watch on Rutube",
    figureLabel: "Key figure",
    artworkLabel: "Artwork",
  },
};

// ─── Секции с медиа-контентом ───────────────────────────────────────────────

const SECTIONS = {
  ru: [
    {
      id: "literature",
      tag: "Литература",
      title: "Слово как оружие и стройматериал",
      lead: "В 1920-е годы русская литература переживала невиданное разнообразие. Одновременно существовали десятки групп, манифестов и стилей — от футуризма до имажинизма, от ЛЕФа до «Серапионовых братьев».",
      figures: [
        {
          name: "Владимир Маяковский",
          years: "1893–1930",
          role: "Поэт, драматург, художник",
          img: IMG_MAYAKOVSKY,
          desc: "Главный голос революции. Маяковский стоял у истоков ЛЕФа, писал агитплакаты и рекламу, читал стихи на заводах. «Облако в штанах», «Про это», «Во весь голос» — эпосы советской эпохи.",
          rutube: RUTUBE_MAYAKOVSKY,
          rutubeTitle: "Маяковский читает стихи (архивная запись)",
        },
        {
          name: "Велимир Хлебников",
          years: "1885–1922",
          role: "Поэт-футурист, изобретатель «зауми»",
          img: IMG_KHLEBNIKOV,
          desc: "Председатель Земного Шара — так он себя называл. Хлебников изобретал новые слова, разрабатывал математические законы истории и создавал стихи, в которых звук важнее смысла.",
          rutube: null,
          rutubeTitle: null,
        },
      ],
      artworks: [
        {
          title: "Окна РОСТА",
          year: "1919–1921",
          img: IMG_POSTER,
          desc: "Серия агитационных плакатов, созданных Маяковским совместно с художниками. Рисовались вручную, размножались трафаретом и вывешивались в витринах магазинов — первое советское «медиа».",
        },
      ],
    },
    {
      id: "architecture",
      tag: "Архитектура",
      title: "Строить новый мир буквально",
      lead: "Советские архитекторы 1920-х были убеждены, что пространство формирует человека. Новые здания должны воплощать новые отношения между людьми — коллективный быт, равенство, прозрачность.",
      figures: [
        {
          name: "Константин Мельников",
          years: "1890–1974",
          role: "Архитектор, мастер конструктивизма",
          img: IMG_MELNIKOV,
          desc: "Самый дерзкий архитектор эпохи. Построил шесть рабочих клубов в Москве — каждый уникален. Его собственный дом-цилиндр на Арбате до сих пор стоит и является единственным частным домом, построенным в СССР для самого архитектора.",
          rutube: null,
          rutubeTitle: null,
        },
      ],
      artworks: [
        {
          title: "ВХУТЕМАС — советский Баухаус",
          year: "1920–1930",
          img: IMG_ARCH,
          desc: "Высшие художественно-технические мастерские воспитали целое поколение конструктивистов. Родченко, Попова, Веснин преподавали здесь. Методика ВХУТЕМАСа повлияла на дизайн-образование по всему миру.",
        },
      ],
    },
    {
      id: "painting",
      tag: "Живопись и дизайн",
      title: "От холста к производству",
      lead: "Советский авангард в изобразительном искусстве прошёл путь от абстракции к «производственному искусству» — когда художник становился конструктором вещей, плакатов и тканей.",
      figures: [
        {
          name: "Александр Родченко",
          years: "1891–1956",
          role: "Художник, фотограф, дизайнер",
          img: IMG_RODCHENKO,
          desc: "Объявил живопись мёртвой и перешёл к фотографии, рекламе и дизайну. Его диагональные ракурсы стали иконами авангарда. В соавторстве с Маяковским создал серию плакатов — образцы тотального визуального дизайна.",
          rutube: null,
          rutubeTitle: null,
        },
      ],
      artworks: [
        {
          title: "Конструктивистская абстракция",
          year: "1921–1925",
          img: IMG_PAINTING,
          desc: "Беспредметная живопись как исследование пространства и цвета. Родченко, Попова, Степанова отказались от изображения реальности в пользу чистой конструкции. Позже эти принципы перешли в дизайн и полиграфику.",
        },
        {
          title: "Советский агитационный плакат",
          year: "1918–1930",
          img: IMG_POSTER,
          desc: "Плакат — главный жанр советского авангарда. Минимум элементов, максимум воздействия. Геометрия вместо орнамента, диагональ вместо симметрии, красный вместо золота.",
        },
      ],
    },
    {
      id: "cinema",
      tag: "Кино",
      title: "Монтаж как философия",
      lead: "Советское кино 1920-х изобрело язык, которым пользуется весь мировой кинематограф до сих пор. Теория монтажа, разработанная Эйзенштейном, Вертовым и Кулешовым, стала фундаментом кинообразования.",
      figures: [
        {
          name: "Дзига Вертов",
          years: "1896–1954",
          role: "Кинорежиссёр, теоретик документального кино",
          img: IMG_VERTOV,
          desc: "Создатель концепции «Киноглаза» — камеры, видящей правду. «Человек с киноаппаратом» (1929) — фильм без сценария, актёров и интертитров — до сих пор входит в списки лучших документальных фильмов всех времён.",
          rutube: RUTUBE_VERTOV,
          rutubeTitle: "Человек с киноаппаратом (1929)",
        },
        {
          name: "Сергей Эйзенштейн",
          years: "1898–1948",
          role: "Кинорежиссёр, теоретик монтажа",
          img: IMG_EISENSTEIN,
          desc: "Автор теории «монтажа аттракционов». «Броненосец Потёмкин» (1925) признан одним из величайших фильмов в истории кино. Знаменитая сцена на Одесской лестнице — учебник кинематографического напряжения.",
          rutube: RUTUBE_EISENSTEIN,
          rutubeTitle: "Броненосец Потёмкин (1925)",
        },
      ],
      artworks: [
        {
          title: "Кадры советского авангардного кино",
          year: "1924–1930",
          img: IMG_CINEMA,
          desc: "Советская монтажная школа изобрела язык, без которого невозможны современные блокбастеры, рекламные ролики и новостные репортажи. Эффект Кулешова работает до сих пор.",
        },
      ],
    },
  ],
  en: [
    {
      id: "literature",
      tag: "Literature",
      title: "The Word as Weapon and Building Material",
      lead: "In the 1920s Russian literature experienced unprecedented diversity. Dozens of groups, manifestos and styles coexisted — from futurism to imagism, from LEF to the Serapion Brothers.",
      figures: [
        {
          name: "Vladimir Mayakovsky",
          years: "1893–1930",
          role: "Poet, playwright, artist",
          img: IMG_MAYAKOVSKY,
          desc: "The main voice of the revolution. Mayakovsky co-founded LEF, wrote agitprop posters and advertising, read poetry in factories. 'A Cloud in Trousers', 'About That', 'At the Top of My Voice' — epics of the Soviet era.",
          rutube: RUTUBE_MAYAKOVSKY,
          rutubeTitle: "Mayakovsky reads poetry (archival recording)",
        },
        {
          name: "Velimir Khlebnikov",
          years: "1885–1922",
          role: "Futurist poet, inventor of 'zaum'",
          img: IMG_KHLEBNIKOV,
          desc: "Chairman of the Terrestrial Globe — as he called himself. Khlebnikov invented new words, developed mathematical laws of history and created poetry where sound matters more than meaning.",
          rutube: null,
          rutubeTitle: null,
        },
      ],
      artworks: [
        {
          title: "ROSTA Windows",
          year: "1919–1921",
          img: IMG_POSTER,
          desc: "A series of agitprop posters created by Mayakovsky with artists. Drawn by hand, reproduced by stencil and displayed in shop windows — the first Soviet 'media'.",
        },
      ],
    },
    {
      id: "architecture",
      tag: "Architecture",
      title: "Building a New World, Literally",
      lead: "Soviet architects of the 1920s were convinced that space shapes people. New buildings had to embody new human relations — collective life, equality, transparency.",
      figures: [
        {
          name: "Konstantin Melnikov",
          years: "1890–1974",
          role: "Architect, master of constructivism",
          img: IMG_MELNIKOV,
          desc: "The boldest architect of the era. Built six workers' clubs in Moscow — each unique. His own cylindrical house on Arbat still stands and is the only private house built in the USSR for the architect himself.",
          rutube: null,
          rutubeTitle: null,
        },
      ],
      artworks: [
        {
          title: "VKHUTEMAS — the Soviet Bauhaus",
          year: "1920–1930",
          img: IMG_ARCH,
          desc: "The Higher Art and Technical Studios raised a whole generation of constructivists. Rodchenko, Popova, Vesnin taught here. The VKHUTEMAS methodology influenced design education worldwide.",
        },
      ],
    },
    {
      id: "painting",
      tag: "Painting & Design",
      title: "From Canvas to Production",
      lead: "Soviet avant-garde in the visual arts traced a path from abstraction to 'industrial art' — where the artist became a designer of objects, posters and fabrics.",
      figures: [
        {
          name: "Alexander Rodchenko",
          years: "1891–1956",
          role: "Artist, photographer, designer",
          img: IMG_RODCHENKO,
          desc: "Declared painting dead and moved to photography, advertising and design. His diagonal angles became icons of the avant-garde. Co-created a series of posters with Mayakovsky — models of total visual design.",
          rutube: null,
          rutubeTitle: null,
        },
      ],
      artworks: [
        {
          title: "Constructivist Abstraction",
          year: "1921–1925",
          img: IMG_PAINTING,
          desc: "Non-objective painting as an exploration of space and colour. Rodchenko, Popova, Stepanova rejected the depiction of reality in favour of pure construction. These principles later moved into design and print.",
        },
        {
          title: "Soviet Agitprop Poster",
          year: "1918–1930",
          img: IMG_POSTER,
          desc: "The poster — the main genre of Soviet avant-garde. Minimum elements, maximum impact. Geometry instead of ornament, diagonal instead of symmetry, red instead of gold.",
        },
      ],
    },
    {
      id: "cinema",
      tag: "Cinema",
      title: "Montage as Philosophy",
      lead: "Soviet cinema of the 1920s invented a language that the entire world cinema still uses today. The theory of montage, developed by Eisenstein, Vertov and Kuleshov, became the foundation of film education.",
      figures: [
        {
          name: "Dziga Vertov",
          years: "1896–1954",
          role: "Film director, theorist of documentary cinema",
          img: IMG_VERTOV,
          desc: "Creator of the 'Kino-Eye' concept — a camera that sees the truth. 'Man with a Movie Camera' (1929) — a film without a script, actors or intertitles — still features in lists of the greatest documentaries of all time.",
          rutube: RUTUBE_VERTOV,
          rutubeTitle: "Man with a Movie Camera (1929)",
        },
        {
          name: "Sergei Eisenstein",
          years: "1898–1948",
          role: "Film director, theorist of montage",
          img: IMG_EISENSTEIN,
          desc: "Author of the 'montage of attractions' theory. 'Battleship Potemkin' (1925) is recognised as one of the greatest films in cinema history. The famous Odessa Steps sequence is a textbook of cinematic tension.",
          rutube: RUTUBE_EISENSTEIN,
          rutubeTitle: "Battleship Potemkin (1925)",
        },
      ],
      artworks: [
        {
          title: "Soviet Avant-Garde Cinema Frames",
          year: "1924–1930",
          img: IMG_CINEMA,
          desc: "The Soviet montage school invented a language without which modern blockbusters, commercials and news reports are impossible. The Kuleshov Effect still works today.",
        },
      ],
    },
  ],
};

export default function Index() {
  const [lang, setLang] = useState<Lang>("ru");
  const [activeNav, setActiveNav] = useState("home");
  const t = T[lang];
  const sections = SECTIONS[lang];

  const scrollTo = (id: string) => {
    setActiveNav(id);
    if (id === "home") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen soviet-texture" style={{ backgroundColor: "var(--soviet-cream)", color: "var(--soviet-dark)" }}>

      {/* Топбар */}
      <div style={{ backgroundColor: "var(--soviet-red)" }} className="py-1.5 px-6 flex justify-between items-center">
        <span className="font-mono text-xs text-white tracking-widest opacity-80">{t.topbar}</span>
        <button
          onClick={() => setLang(lang === "ru" ? "en" : "ru")}
          className="font-mono text-xs text-white border border-white/40 px-3 py-0.5 hover:bg-white hover:text-red-700 transition-all duration-200 tracking-widest"
        >
          {lang === "ru" ? "EN" : "RU"}
        </button>
      </div>

      {/* Хедер */}
      <header style={{ backgroundColor: "var(--soviet-dark)" }} className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div style={{ backgroundColor: "var(--soviet-red)", border: "2px solid var(--soviet-gold)" }} className="w-10 h-10 flex items-center justify-center text-white text-lg font-bold">★</div>
            <div>
              <div className="font-display text-white tracking-[0.15em] text-sm font-bold leading-none">{t.siteTitle}</div>
              <div className="font-mono text-xs tracking-widest" style={{ color: "var(--soviet-gold)" }}>{t.siteSubtitle}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_KEYS.map((key, i) => (
              <button key={key} onClick={() => scrollTo(key)}
                className={`nav-link font-display text-xs tracking-[0.12em] uppercase transition-colors ${activeNav === key ? "text-white active" : "text-white/60 hover:text-white"}`}>
                {t.nav[i]}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Герой */}
      <section className="relative overflow-hidden" style={{ minHeight: "95vh" }}>
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="Авангард СССР" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(13,13,13,0.96) 55%, rgba(13,13,13,0.5) 100%)" }} />
          <div className="absolute top-0 right-0 w-2/5 h-full opacity-15" style={{ background: "repeating-linear-gradient(-45deg, transparent, transparent 18px, var(--soviet-red) 18px, var(--soviet-red) 20px)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center" style={{ minHeight: "95vh" }}>
          <div style={{ maxWidth: "640px" }}>
            <div className="inline-block font-mono text-xs tracking-[0.25em] px-3 py-1 mb-10 animate-fade-in" style={{ color: "var(--soviet-gold)", border: "1px solid var(--soviet-gold)" }}>
              {t.hero.label}
            </div>
            <h1 className="font-display text-white font-bold leading-none mb-6 animate-fade-in-up delay-200" style={{ fontSize: "clamp(4rem, 9vw, 8rem)", letterSpacing: "0.01em", whiteSpace: "pre-line" }}>
              {t.hero.title}
            </h1>
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up delay-300">
              <div className="h-px w-20" style={{ backgroundColor: "var(--soviet-red)" }} />
              <div className="h-px w-6" style={{ backgroundColor: "var(--soviet-gold)" }} />
            </div>
            <p className="font-body text-white/65 leading-relaxed mb-10 animate-fade-in-up delay-400" style={{ fontSize: "1.15rem", maxWidth: "560px" }}>
              {t.hero.desc}
            </p>
            <div className="flex items-baseline gap-4 animate-fade-in-up delay-500">
              <span className="font-display font-bold text-4xl" style={{ color: "var(--soviet-gold)" }}>{t.hero.years}</span>
              <span className="font-mono text-xs tracking-widest text-white/40 uppercase">{t.hero.yearsLabel}</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 flex">
          <div className="flex-1" style={{ backgroundColor: "var(--soviet-red)" }} />
          <div className="w-20" style={{ backgroundColor: "var(--soviet-gold)" }} />
          <div className="flex-1" style={{ backgroundColor: "var(--soviet-red)" }} />
        </div>
      </section>

      {/* Введение */}
      <section className="py-24" style={{ backgroundColor: "var(--soviet-cream)" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="sticky top-28">
              <div className="w-12 h-1 mb-6" style={{ backgroundColor: "var(--soviet-red)" }} />
              <h2 className="font-display font-bold leading-tight" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "0.03em" }}>
                {t.intro.title}
              </h2>
              <div className="mt-10 relative w-24 h-24 hidden md:block">
                <div className="absolute inset-0 border-4" style={{ borderColor: "var(--soviet-red)" }} />
                <div className="absolute inset-3 border-4" style={{ borderColor: "var(--soviet-gold)" }} />
                <div className="absolute inset-6" style={{ backgroundColor: "var(--soviet-dark)" }} />
              </div>
            </div>
          </div>
          <div className="md:col-span-8 space-y-8">
            {t.intro.paragraphs.map((text, i) => (
              <p key={i} className="font-body leading-relaxed"
                style={{ fontSize: "1.15rem", color: i === 0 ? "var(--soviet-dark)" : "#444", borderLeft: i === 0 ? "3px solid var(--soviet-red)" : "none", paddingLeft: i === 0 ? "1.25rem" : "0" }}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Баннер ВХУТЕМАС */}
      <section className="relative overflow-hidden" style={{ height: "380px" }}>
        <img src={IMG_ARCH} alt="ВХУТЕМАС" className="w-full h-full object-cover" style={{ filter: "grayscale(30%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(13,13,13,0.9) 0%, rgba(214,43,43,0.5) 60%, rgba(13,13,13,0.7) 100%)" }} />
        <div className="absolute inset-0 flex items-center px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="font-mono text-xs tracking-[0.3em] text-white/50 mb-4 uppercase">
              {lang === "ru" ? "ВХУТЕМАС · Москва · 1920–1930" : "VKHUTEMAS · Moscow · 1920–1930"}
            </div>
            <p className="font-display font-bold text-white" style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)", letterSpacing: "0.02em", maxWidth: "700px" }}>
              {lang === "ru" ? "Школа, изменившая облик XX века" : "The school that changed the face of the 20th century"}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Тематические разделы с медиа ─────────────────────────────────── */}
      {sections.map((section, sectionIdx) => {
        const isDark = sectionIdx % 2 === 1;
        const bg = isDark ? "var(--soviet-dark)" : "var(--soviet-cream)";
        const textMain = isDark ? "white" : "var(--soviet-dark)";
        const textSub = isDark ? "rgba(255,255,255,0.55)" : "#555";
        const accent = isDark ? "var(--soviet-gold)" : "var(--soviet-red)";

        return (
          <section key={section.id} id={section.id} className="py-24" style={{ backgroundColor: bg }}>
            <div className="max-w-7xl mx-auto px-6">

              {/* Заголовок раздела */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                <div className="md:col-span-4">
                  <div className="inline-block font-mono text-xs tracking-[0.2em] px-3 py-1 mb-4"
                    style={{ color: accent, border: `1px solid ${accent}` }}>
                    {section.tag}
                  </div>
                  <h2 className="font-display font-bold leading-tight"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "0.02em", color: textMain }}>
                    {section.title}
                  </h2>
                </div>
                <div className="md:col-span-8 flex items-end">
                  <p className="font-body leading-relaxed"
                    style={{ fontSize: "1.15rem", color: textSub, borderLeft: `3px solid ${accent}`, paddingLeft: "1.25rem" }}>
                    {section.lead}
                  </p>
                </div>
              </div>

              {/* Ключевые фигуры */}
              <div className="mb-16">
                <div className="font-mono text-xs tracking-[0.2em] uppercase mb-8" style={{ color: accent }}>
                  {t.figureLabel}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {section.figures.map((fig, fi) => (
                    <div key={fi} className="overflow-hidden" style={{ border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)"}`, backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "white" }}>
                      {/* Фото автора */}
                      <div className="relative overflow-hidden" style={{ height: "260px" }}>
                        <img src={fig.img} alt={fig.name} className="w-full h-full object-cover"
                          style={{ filter: "grayscale(20%) contrast(1.05)" }} />
                        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${isDark ? "rgba(13,13,13,0.9)" : "rgba(0,0,0,0.6)"} 0%, transparent 60%)` }} />
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <div className="font-display font-bold text-white text-xl leading-tight">{fig.name}</div>
                          <div className="font-mono text-xs tracking-widest mt-1" style={{ color: "var(--soviet-gold)" }}>{fig.years}</div>
                        </div>
                        {/* Акцентная полоска */}
                        <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: "var(--soviet-red)" }} />
                      </div>
                      {/* Описание */}
                      <div className="p-6">
                        <div className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: accent }}>{fig.role}</div>
                        <p className="font-body leading-relaxed" style={{ fontSize: "0.95rem", color: textSub }}>{fig.desc}</p>
                        {/* Кнопка видео */}
                        {fig.rutube && (
                          <a href={`https://rutube.ru/video/${fig.rutube}/`} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-5 font-mono text-xs tracking-widest px-4 py-2 transition-all hover:opacity-80"
                            style={{ backgroundColor: "var(--soviet-red)", color: "white" }}>
                            <Icon name="Play" size={12} />
                            {t.videoLabel}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Произведения искусства */}
              {section.artworks.length > 0 && (
                <div className="mb-16">
                  <div className="font-mono text-xs tracking-[0.2em] uppercase mb-8" style={{ color: accent }}>
                    {t.artworkLabel}
                  </div>
                  <div className={`grid gap-8 ${section.artworks.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                    {section.artworks.map((art, ai) => (
                      <div key={ai} className="course-card overflow-hidden" style={{ border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)"}`, backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "white" }}>
                        <div className="overflow-hidden" style={{ height: "220px" }}>
                          <img src={art.img} alt={art.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-display font-bold text-lg" style={{ color: textMain, letterSpacing: "0.02em" }}>{art.title}</h3>
                            <span className="font-mono text-xs tracking-widest" style={{ color: accent }}>{art.year}</span>
                          </div>
                          <p className="font-body leading-relaxed" style={{ fontSize: "0.95rem", color: textSub }}>{art.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Видеоплеер (Rutube embed) — только для секций с видео у фигур */}
              {section.figures.some(f => f.rutube) && (
                <div>
                  <div className="font-mono text-xs tracking-[0.2em] uppercase mb-8" style={{ color: accent }}>
                    {t.videoLabel}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {section.figures.filter(f => f.rutube).map((fig, vi) => (
                      <div key={vi}>
                        <div className="font-display font-bold mb-3" style={{ color: textMain, fontSize: "1rem" }}>{fig.rutubeTitle}</div>
                        <div className="relative w-full overflow-hidden" style={{ paddingTop: "56.25%", border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)"}` }}>
                          <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={`https://rutube.ru/play/embed/${fig.rutube}/`}
                            allow="clipboard-write; autoplay"
                            allowFullScreen
                            title={fig.rutubeTitle || fig.name}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </section>
        );
      })}

      {/* Баннер кино */}
      <section className="relative overflow-hidden" style={{ height: "420px" }}>
        <img src={IMG_CINEMA} alt="Советское кино" className="w-full h-full object-cover" style={{ filter: "grayscale(60%) contrast(1.1)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.5) 0%, rgba(13,13,13,0.88) 100%)" }} />
        <div className="absolute inset-0 flex items-end pb-16 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="font-mono text-xs tracking-[0.25em] text-white/40 mb-3 uppercase">
              {lang === "ru" ? "Дзига Вертов · Человек с киноаппаратом · 1929" : "Dziga Vertov · Man with a Movie Camera · 1929"}
            </div>
            <p className="font-display font-bold text-white" style={{ fontSize: "clamp(1.3rem, 3vw, 2.5rem)", letterSpacing: "0.02em", maxWidth: "800px" }}>
              {lang === "ru" ? "Камера не лжёт. Камера видит то, что скрыто от человека." : "The camera does not lie. The camera sees what is hidden from the human eye."}
            </p>
          </div>
        </div>
      </section>

      {/* Цитата */}
      <div className="diagonal-stripe py-20" style={{ borderTop: "4px solid var(--soviet-red)", borderBottom: "4px solid var(--soviet-red)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-5xl mb-6" style={{ color: "var(--soviet-red)" }}>★</div>
          <blockquote className="font-display font-bold mb-5" style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", letterSpacing: "0.03em" }}>
            {lang === "ru" ? "«Улицы — наши кисти. Площади — наши палитры»" : "«The streets are our brushes. The squares are our palettes»"}
          </blockquote>
          <cite className="font-mono text-sm tracking-widest not-italic" style={{ color: "var(--soviet-red)" }}>
            {lang === "ru" ? "— В. Маяковский, 1918" : "— V. Mayakovsky, 1918"}
          </cite>
        </div>
      </div>

      {/* Футер */}
      <footer style={{ backgroundColor: "var(--soviet-dark)" }} className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div style={{ backgroundColor: "var(--soviet-red)", border: "2px solid var(--soviet-gold)" }} className="w-8 h-8 flex items-center justify-center text-white text-sm font-bold">★</div>
                <span className="font-display text-white font-bold tracking-[0.15em] text-sm">{t.siteTitle}</span>
              </div>
              <p className="font-body text-white/40 leading-relaxed max-w-md">
                {lang === "ru" ? "Информационный ресурс о советском авангарде и культуре 1920–1930-х годов." : "An information resource on Soviet avant-garde and the culture of the 1920s–1930s."}
              </p>
            </div>
            <div>
              <div className="font-mono text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "var(--soviet-gold)" }}>
                {lang === "ru" ? "Разделы" : "Sections"}
              </div>
              <ul className="space-y-2">
                {t.nav.map((link, i) => (
                  <li key={i}>
                    <button onClick={() => scrollTo(NAV_KEYS[i])} className="font-body text-white/40 hover:text-white transition-colors text-sm">{link}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <span className="font-mono text-xs text-white/20">
              {lang === "ru" ? "© 2024 Авангард СССР." : "© 2024 USSR Avant-Garde."}
            </span>
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
