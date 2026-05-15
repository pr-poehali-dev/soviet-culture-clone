import { useState } from "react";
import Icon from "@/components/ui/icon";

type Lang = "ru" | "en";

const IMG_HERO = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/179cabb6-a801-4865-8c48-e8f597973f61.jpg";
const IMG_ARCH = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/1abb08cc-9776-4281-917e-c4ace9046077.jpg";
const IMG_CINEMA = "https://cdn.poehali.dev/projects/8a250f04-d23b-47f7-9175-b68b0f5c995e/files/5ddf4502-1f2d-4c6e-860a-6a82eafa1957.jpg";

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
    sections: [
      {
        id: "literature",
        tag: "Литература",
        title: "Слово как оружие и стройматериал",
        lead: "В 1920-е годы русская литература переживала невиданное разнообразие. Одновременно существовали десятки групп, манифестов и стилей — от футуризма до имажинизма, от ЛЕФа до «Серапионовых братьев».",
        blocks: [
          { subtitle: "ЛЕФ и производственная литература", text: "Левый фронт искусств — объединение вокруг Маяковского — провозгласил смерть «чистого» искусства. Литература должна быть полезной: очерк, репортаж, агитационная поэзия. «Улицы — наши кисти, площади — наши палитры» — это не метафора, а буквальная программа. Маяковский писал рекламные тексты для Моссельпрома и считал это равноценным поэме." },
          { subtitle: "Пролеткульт и рабочая культура", text: "Пролетарская культура претендовала на создание принципиально нового искусства — без опоры на «буржуазное» наследие. Организация имела собственные театры, издательства и литературные студии по всей стране. Её идеолог Александр Богданов мечтал о «тектологии» — науке об организации всего сущего, включая художественный текст." },
          { subtitle: "Велимир Хлебников и язык будущего", text: "Хлебников шёл дальше всех: он изобретал новый язык — «заумь», — основанный на звуковых и корневых архетипах. Его «Председатель Земного Шара» был не поэтической метафорой, а серьёзным проектом переустройства человечества. Хлебников разрабатывал математические законы истории и верил, что время подчиняется числам." },
          { subtitle: "РАПП и конец многообразия", text: "К концу 1920-х Российская ассоциация пролетарских писателей установила идеологический контроль над литературой. Она травила «попутчиков» — писателей вроде Булгакова и Платонова, — не вписывавшихся в пролетарский канон. В 1932 году РАПП был распущен, а все писатели объединены в единый Союз — с обязательным социалистическим реализмом." },
        ],
      },
      {
        id: "architecture",
        tag: "Архитектура",
        title: "Строить новый мир буквально",
        lead: "Советские архитекторы 1920-х были убеждены, что пространство формирует человека. Новые здания должны воплощать новые отношения между людьми — коллективный быт, равенство, прозрачность.",
        blocks: [
          { subtitle: "ВХУТЕМАС — советский Баухаус", text: "Высшие художественно-технические мастерские, основанные в 1920 году, стали главной кузницей советских конструктивистов. Здесь преподавали Родченко, Попова, Веснин. Студенты изучали не «изящные искусства», а проектирование — промышленное, текстильное, архитектурное. ВХУТЕМАС просуществовал до 1930 года, но его методика повлияла на дизайн-образование по всему миру." },
          { subtitle: "Константин Мельников и рабочие клубы", text: "Мельников — самый оригинальный архитектор эпохи — построил шесть рабочих клубов в Москве. Каждый был экспериментом: вращающиеся зрительные залы, трансформируемые пространства, геометрические фасады. Его собственный дом на Арбате — цилиндр с шестиугольными окнами — единственный в истории СССР частный дом, построенный архитектором для себя." },
          { subtitle: "Братья Весины и ОСА", text: "Объединение современных архитекторов под руководством Весиных разрабатывало принципы «функционализма»: форма следует за функцией, никакого декора, только конструкция. Их проекты — Дворец труда, ДнепроГЭС, универмаги — стали образцами промышленного модернизма." },
          { subtitle: "Дома-коммуны и новый быт", text: "Архитекторы проектировали не просто здания, а уклад жизни. Дом-коммуна предполагал общие столовые, прачечные, детские сады — всё, что освобождало человека от домашнего труда. Самый известный — дом Наркомфина Гинзбурга в Москве, реставрированный в 2020 году и признанный памятником мирового значения." },
        ],
      },
      {
        id: "painting",
        tag: "Живопись и дизайн",
        title: "От холста к производству",
        lead: "Советский авангард в изобразительном искусстве прошёл путь от абстракции к «производственному искусству» — когда художник становился конструктором вещей, плакатов и тканей.",
        blocks: [
          { subtitle: "Александр Родченко: фотография и дизайн", text: "Родченко начал как живописец-абстракционист, но к середине 1920-х объявил живопись мёртвой и перешёл к фотографии, дизайну и рекламе. Его диагональные ракурсы — снизу вверх, сверху вниз — стали иконами авангардной фотографии. Плакаты для Ленгиза и Моссельпрома, сделанные совместно с Маяковским, — образцы тотального дизайна: единство текста, образа и идеи." },
          { subtitle: "Варвара Степанова и текстиль", text: "Жена Родченко Варвара Степанова реализовала идеи конструктивизма в ткани. Её рисунки для Первой ситценабивной фабрики — геометрические, ритмичные, без орнаментальных излишеств — предвосхитили принципы современного текстильного дизайна. Степанова настаивала: ткань должна быть удобной для движения, а не красивой для разглядывания." },
          { subtitle: "Эль Лисицкий и проун", text: "Лазарь Лисицкий изобрёл жанр «проун» — Проект утверждения нового, — нечто среднее между картиной и архитектурным макетом. Его работы существуют в пространстве между двумя и тремя измерениями. Лисицкий разрабатывал принципы типографики и оформления выставок, актуальные по сей день." },
          { subtitle: "Агитплакат: искусство без рамы", text: "Плакат стал главным жанром советского авангарда — демократичным, тиражным, уличным. «Окна РОСТА» Маяковского и Черемных — быстрая реакция на события гражданской войны, нарисованные от руки и расклеенные в витринах. Позже плакат стал более полиграфическим, но сохранил конструктивистскую ясность: минимум элементов, максимум воздействия." },
        ],
      },
      {
        id: "cinema",
        tag: "Кино",
        title: "Монтаж как философия",
        lead: "Советское кино 1920-х изобрело язык, которым пользуется весь мировой кинематограф до сих пор. Теория монтажа, разработанная Эйзенштейном, Вертовым и Кулешовым, стала фундаментом кинообразования.",
        blocks: [
          { subtitle: "Дзига Вертов и Киноглаз", text: "Вертов отрицал игровое кино как ложь и провозгласил документальный «Киноглаз» — камеру, которая видит правду, недоступную человеческому глазу. «Человек с киноаппаратом» (1929) — фильм без сценария, актёров и интертитров — до сих пор входит в списки лучших документальных фильмов всех времён. Вертов снимал скрытой камерой и разрушал четвёртую стену задолго до того, как это стало модным." },
          { subtitle: "Сергей Эйзенштейн и монтаж аттракционов", text: "Эйзенштейн пришёл в кино из театра и принёс с собой теорию «аттракциона» — шокового воздействия на зрителя. «Броненосец Потёмкин» (1925) и «Октябрь» (1927) — не просто пропагандистские фильмы, но эксперименты с восприятием. Знаменитая «Одесская лестница» создаёт у зрителя ощущение длящейся катастрофы, хотя реального события не было." },
          { subtitle: "Лев Кулешов и эффект монтажа", text: "Кулешов экспериментально доказал: значение кадра зависит не от его содержания, а от контекста. Один и тот же крупный план рядом с едой воспринимается как голод, рядом с гробом — как горе, рядом с женщиной — как желание. Этот «эффект Кулешова» — основа монтажного мышления, без которого невозможны ни триллер, ни реклама, ни новостной сюжет." },
          { subtitle: "Конец эпохи: звук и соцреализм", text: "Приход звукового кино в 1930-х совпал с политическим закручиванием гаек. Авангардный эксперимент закончился: кино стало обязано быть «понятным народу», героическим и оптимистичным. Эйзенштейн снимал «Бежин луг» — и картину уничтожили. Вертов был отстранён от постановок. Эпоха великого эксперимента завершилась, оставив после себя язык, без которого немыслима современная визуальная культура." },
        ],
      },
    ],
    quote: "«Улицы — наши кисти. Площади — наши палитры»",
    quoteAuthor: "— В. Маяковский, 1918",
    footer: {
      desc: "Информационный ресурс о советском авангарде и культуре 1920–1930-х годов.",
      sections: "Разделы",
      rights: "© 2024 Авангард СССР.",
    },
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
    sections: [
      {
        id: "literature",
        tag: "Literature",
        title: "The Word as Weapon and Building Material",
        lead: "In the 1920s Russian literature experienced unprecedented diversity. Dozens of groups, manifestos and styles coexisted — from futurism to imagism, from LEF to the Serapion Brothers.",
        blocks: [
          { subtitle: "LEF and Industrial Literature", text: "The Left Front of the Arts — gathered around Mayakovsky — proclaimed the death of 'pure' art. Literature must be useful: essays, reportage, agitprop poetry. 'The streets are our brushes, the squares our palettes' — this was not a metaphor but a literal programme. Mayakovsky wrote advertising copy for Mosselprom and considered it equal to an epic poem." },
          { subtitle: "Proletkult and Working-Class Culture", text: "Proletarian culture claimed to create a fundamentally new art — without relying on 'bourgeois' heritage. The organisation had its own theatres, publishing houses and literary studios across the country. Its ideologist Alexander Bogdanov dreamed of 'tectology' — a science of organising everything that exists, including the literary text." },
          { subtitle: "Velimir Khlebnikov and the Language of the Future", text: "Khlebnikov went furthest of all: he invented a new language — 'zaum', trans-sense — based on sonic and root archetypes. His 'Chairman of the Terrestrial Globe' was not a poetic metaphor but a serious project for reorganising humanity. Khlebnikov developed mathematical laws of history and believed that time obeys numbers." },
          { subtitle: "RAPP and the End of Diversity", text: "By the late 1920s the Russian Association of Proletarian Writers had established ideological control over literature. It hounded 'fellow travellers' — writers like Bulgakov and Platonov — who did not fit the proletarian canon. In 1932 RAPP was dissolved and all writers united in a single Union — with mandatory socialist realism." },
        ],
      },
      {
        id: "architecture",
        tag: "Architecture",
        title: "Building a New World, Literally",
        lead: "Soviet architects of the 1920s were convinced that space shapes people. New buildings had to embody new human relations — collective life, equality, transparency.",
        blocks: [
          { subtitle: "VKHUTEMAS — the Soviet Bauhaus", text: "The Higher Art and Technical Studios, founded in 1920, were the main forge of Soviet constructivists. Rodchenko, Popova and Vesnin taught here. Students studied not 'fine arts' but design — industrial, textile, architectural. VKHUTEMAS lasted until 1930, but its methodology influenced design education around the world." },
          { subtitle: "Konstantin Melnikov and Workers' Clubs", text: "Melnikov — the most original architect of the era — built six workers' clubs in Moscow. Each was an experiment: rotating auditoriums, transformable spaces, geometric facades. His own house on Arbat — a cylinder with hexagonal windows — is the only private house in Soviet history built by an architect for himself." },
          { subtitle: "The Vesnin Brothers and OSA", text: "The Association of Contemporary Architects under the Vesnins developed the principles of 'functionalism': form follows function, no decoration, only construction. Their projects — the Palace of Labour, DneproGES, department stores — became models of industrial modernism." },
          { subtitle: "Commune Houses and the New Way of Life", text: "Architects designed not just buildings but a way of life. The commune house provided shared canteens, laundries and nurseries. The most famous — Ginzburg's Narkomfin House in Moscow, restored in 2020 and recognised as a monument of world significance." },
        ],
      },
      {
        id: "painting",
        tag: "Painting & Design",
        title: "From Canvas to Production",
        lead: "Soviet avant-garde in the visual arts traced a path from abstraction to 'industrial art' — where the artist became a designer of objects, posters and fabrics.",
        blocks: [
          { subtitle: "Alexander Rodchenko: Photography and Design", text: "Rodchenko began as an abstract painter but by the mid-1920s declared painting dead and moved to photography, design and advertising. His diagonal angles — from below, from above — became icons of avant-garde photography. His posters for Lengiz and Mosselprom, made with Mayakovsky, are models of total design: unity of text, image and idea." },
          { subtitle: "Varvara Stepanova and Textile", text: "Rodchenko's wife Varvara Stepanova realised constructivist ideas in fabric. Her designs for the First Cotton-Printing Factory — geometric, rhythmic, without ornamental excess — anticipated the principles of modern textile design. Stepanova insisted: fabric must be comfortable for movement, not beautiful to look at." },
          { subtitle: "El Lissitzky and Proun", text: "Lazar Lissitzky invented the 'proun' genre — Project for the Affirmation of the New — something between a painting and an architectural model. His works exist in the space between two and three dimensions. Lissitzky developed principles of typography and exhibition design still current today." },
          { subtitle: "Agitprop Poster: Art Without a Frame", text: "The poster became the main genre of the Soviet avant-garde — democratic, mass-produced, street-level. Mayakovsky and Cheremnych's 'ROSTA Windows' were quick reactions to civil war events. Later the poster became more typographic but retained constructivist clarity: minimum elements, maximum impact." },
        ],
      },
      {
        id: "cinema",
        tag: "Cinema",
        title: "Montage as Philosophy",
        lead: "Soviet cinema of the 1920s invented a language that the entire world cinema still uses today. The theory of montage, developed by Eisenstein, Vertov and Kuleshov, became the foundation of film education.",
        blocks: [
          { subtitle: "Dziga Vertov and the Kino-Eye", text: "Vertov denied fiction film as a lie and proclaimed the documentary 'Kino-Eye' — a camera that sees truth inaccessible to the human eye. 'Man with a Movie Camera' (1929) — a film without a script, actors or intertitles — still features in lists of the greatest documentaries of all time." },
          { subtitle: "Sergei Eisenstein and the Montage of Attractions", text: "Eisenstein came to cinema from theatre and brought with him the theory of the 'attraction' — the shock effect on the viewer. 'Battleship Potemkin' (1925) and 'October' (1927) are not merely propaganda films but experiments in perception. The famous 'Odessa Steps' creates in the viewer a sense of prolonged catastrophe." },
          { subtitle: "Lev Kuleshov and the Montage Effect", text: "Kuleshov experimentally proved that the meaning of a shot depends not on its content but on context. The same close-up next to food reads as hunger, next to a coffin as grief, next to a woman as desire. This 'Kuleshov Effect' is the foundation of montage thinking, without which no thriller, advertisement or news report is possible." },
          { subtitle: "End of an Era: Sound and Socialist Realism", text: "The arrival of sound cinema in the 1930s coincided with political tightening. The avant-garde experiment ended: cinema was now required to be heroic and optimistic. Eisenstein shot 'Bezhin Meadow' — and the film was destroyed. The era of the great experiment ended, leaving behind a language without which modern visual culture is unimaginable." },
        ],
      },
    ],
    quote: "«The streets are our brushes. The squares are our palettes»",
    quoteAuthor: "— V. Mayakovsky, 1918",
    footer: {
      desc: "An information resource on Soviet avant-garde and the culture of the 1920s–1930s.",
      sections: "Sections",
      rights: "© 2024 USSR Avant-Garde.",
    },
  },
};

export default function Index() {
  const [lang, setLang] = useState<Lang>("ru");
  const [activeNav, setActiveNav] = useState("home");
  const t = T[lang];

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
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className={`nav-link font-display text-xs tracking-[0.12em] uppercase transition-colors ${activeNav === key ? "text-white active" : "text-white/60 hover:text-white"}`}
              >
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
              <p key={i} className="font-body leading-relaxed" style={{ fontSize: "1.15rem", color: i === 0 ? "var(--soviet-dark)" : "#444", borderLeft: i === 0 ? "3px solid var(--soviet-red)" : "none", paddingLeft: i === 0 ? "1.25rem" : "0" }}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Баннер ВХУТЕМАС */}
      <section className="relative overflow-hidden" style={{ height: "420px" }}>
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
        <div className="absolute top-8 right-8 w-20 h-20 border-2 opacity-20" style={{ borderColor: "var(--soviet-gold)" }} />
      </section>

      {/* Тематические разделы */}
      {t.sections.map((section, sectionIdx) => {
        const isDark = sectionIdx % 2 === 1;
        return (
          <section key={section.id} id={section.id} className="py-24" style={{ backgroundColor: isDark ? "var(--soviet-dark)" : "var(--soviet-cream)" }}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                <div className="md:col-span-4">
                  <div className="inline-block font-mono text-xs tracking-[0.2em] px-3 py-1 mb-4" style={isDark ? { color: "var(--soviet-gold)", border: "1px solid var(--soviet-gold)" } : { color: "var(--soviet-red)", border: "1px solid var(--soviet-red)" }}>
                    {section.tag}
                  </div>
                  <h2 className="font-display font-bold leading-tight" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "0.02em", color: isDark ? "white" : "var(--soviet-dark)" }}>
                    {section.title}
                  </h2>
                </div>
                <div className="md:col-span-8 flex items-end">
                  <p className="font-body leading-relaxed" style={{ fontSize: "1.15rem", color: isDark ? "rgba(255,255,255,0.55)" : "#555", borderLeft: `3px solid ${isDark ? "var(--soviet-gold)" : "var(--soviet-red)"}`, paddingLeft: "1.25rem" }}>
                    {section.lead}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {section.blocks.map((block, bi) => (
                  <div key={bi} className="relative">
                    <div className="font-display font-bold text-7xl absolute -top-4 -left-2 select-none pointer-events-none" style={{ color: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.05)", lineHeight: 1 }}>
                      {String(bi + 1).padStart(2, "0")}
                    </div>
                    <div className="relative">
                      <div className="w-6 h-0.5 mb-4" style={{ backgroundColor: isDark ? "var(--soviet-gold)" : "var(--soviet-red)" }} />
                      <h3 className="font-display font-bold text-lg mb-3" style={{ letterSpacing: "0.03em", color: isDark ? "white" : "var(--soviet-dark)" }}>
                        {block.subtitle}
                      </h3>
                      <p className="font-body leading-relaxed" style={{ fontSize: "1rem", color: isDark ? "rgba(255,255,255,0.55)" : "#555", lineHeight: 1.85 }}>
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

      {/* Баннер кино */}
      <section className="relative overflow-hidden" style={{ height: "480px" }}>
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
            {t.quote}
          </blockquote>
          <cite className="font-mono text-sm tracking-widest not-italic" style={{ color: "var(--soviet-red)" }}>
            {t.quoteAuthor}
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
              <p className="font-body text-white/40 leading-relaxed max-w-md">{t.footer.desc}</p>
            </div>
            <div>
              <div className="font-mono text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "var(--soviet-gold)" }}>{t.footer.sections}</div>
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
