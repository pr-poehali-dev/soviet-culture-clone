export type Lang = "ru" | "en";

export const translations = {
  ru: {
    siteTitle: "АВАНГАРД СССР",
    siteSubtitle: "Культура 1920–1930-х",
    nav: {
      home: "Главная",
      literature: "Литература",
      architecture: "Архитектура",
      painting: "Живопись",
      cinema: "Кино",
    },
    hero: {
      label: "★ 1920 — 1934 ★",
      title: "Эпоха\nАвангарда",
      desc: "Тринадцать лет — с революции до «великого перелома» — советское искусство переживало один из самых мощных творческих взрывов в мировой истории. Конструктивизм, ВХУТЕМАС, Родченко, Маяковский, Вертов — имена, навсегда изменившие облик культуры XX века.",
      years: "1917 — 1934",
      yearsLabel: "Годы советского авангарда",
    },
    intro: {
      title: "Что такое советский авангард?",
      text1: "После революции 1917 года Россия стала лабораторией нового искусства. Художники, архитекторы, поэты и режиссёры были убеждены: искусство должно не просто отражать действительность, но строить её. Они отказались от академических канонов, орнаментики и украшательства — в пользу функции, конструкции и движения.",
      text2: "Советский авангард 1920-х — это не один стиль, а целое созвездие направлений: конструктивизм в архитектуре и дизайне, супрематизм и производственное искусство в живописи, ЛЕФ и пролеткульт в литературе, монтажная школа в кино. Объединяло их одно — вера в то, что новый человек требует нового искусства.",
      text3: "К 1934 году эта эпоха была официально завершена: постановление о социалистическом реализме закрыло авангардный эксперимент. Но за полтора десятилетия советские художники создали наследие, которое изучают, цитируют и воспроизводят до сих пор.",
    },
    sections: [
      {
        id: "literature",
        tag: "Литература",
        title: "Слово как оружие и стройматериал",
        lead: "В 1920-е годы русская литература переживала невиданное разнообразие. Одновременно существовали десятки групп, манифестов и стилей — от футуризма до имажинизма, от ЛЕФа до «Серапионовых братьев».",
        blocks: [
          {
            subtitle: "ЛЕФ и производственная литература",
            text: "Левый фронт искусств — объединение вокруг Маяковского — провозгласил смерть «чистого» искусства. Литература должна быть полезной: очерк, репортаж, агитационная поэзия. «Улицы — наши кисти, площади — наши палитры» — это не метафора, а буквальная программа. Маяковский писал рекламные тексты для Моссельпрома и считал это равноценным поэме.",
          },
          {
            subtitle: "Пролеткульт и рабочая культура",
            text: "Пролетарская культура претендовала на создание принципиально нового искусства — без опоры на «буржуазное» наследие. Организация имела собственные театры, издательства и литературные студии по всей стране. Её идеолог Александр Богданов мечтал о «тектологии» — науке об организации всего сущего, включая художественный текст.",
          },
          {
            subtitle: "Велимир Хлебников и язык будущего",
            text: "Хлебников шёл дальше всех: он изобретал новый язык — «заумь», — основанный на звуковых и корневых архетипах. Его «Председатель Земного Шара» был не поэтической метафорой, а серьёзным проектом переустройства человечества. Хлебников разрабатывал математические законы истории и верил, что время подчиняется числам.",
          },
          {
            subtitle: "РАПП и конец многообразия",
            text: "К концу 1920-х Российская ассоциация пролетарских писателей установила идеологический контроль над литературой. Она травила «попутчиков» — писателей вроде Булгакова и Платонова, — не вписывавшихся в пролетарский канон. В 1932 году РАПП был распущен, а все писатели объединены в единый Союз — с обязательным социалистическим реализмом.",
          },
        ],
      },
      {
        id: "architecture",
        tag: "Архитектура",
        title: "Строить новый мир буквально",
        lead: "Советские архитекторы 1920-х были убеждены, что пространство формирует человека. Новые здания должны воплощать новые отношения между людьми — коллективный быт, равенство, прозрачность.",
        blocks: [
          {
            subtitle: "ВХУТЕМАС — советский Баухаус",
            text: "Высшие художественно-технические мастерские, основанные в 1920 году, стали главной кузницей советских конструктивистов. Здесь преподавали Родченко, Попова, Веснин. Студенты изучали не «изящные искусства», а проектирование — промышленное, текстильное, архитектурное. ВХУТЕМАС просуществовал до 1930 года, но его методика повлияла на дизайн-образование по всему миру.",
          },
          {
            subtitle: "Константин Мельников и рабочие клубы",
            text: "Мельников — самый оригинальный архитектор эпохи — построил шесть рабочих клубов в Москве. Каждый был экспериментом: вращающиеся зрительные залы, трансформируемые пространства, геометрические фасады. Его собственный дом на Арбате — цилиндр с шестиугольными окнами — единственный в истории СССР частный дом, построенный архитектором для себя.",
          },
          {
            subtitle: "Братья Весины и ОСА",
            text: "Объединение современных архитекторов под руководством Весиных разрабатывало принципы «функционализма»: форма следует за функцией, никакого декора, только конструкция. Их проекты — Дворец труда, ДнепроГЭС, универмаги — стали образцами промышленного модернизма. Конкурс на здание «Ленинградской правды» дал серию проектов-манифестов.",
          },
          {
            subtitle: "Дома-коммуны и новый быт",
            text: "Архитекторы проектировали не просто здания, а уклад жизни. Дом-коммуна предполагал общие столовые, прачечные, детские сады — всё, что освобождало человека (прежде всего женщину) от домашнего труда. Самый известный — дом Наркомфина Гинзбурга в Москве, реставрированный в 2020 году и признанный памятником мирового значения.",
          },
        ],
      },
      {
        id: "painting",
        tag: "Живопись и дизайн",
        title: "От холста к производству",
        lead: "Советский авангард в изобразительном искусстве прошёл путь от абстракции к «производственному искусству» — когда художник становился конструктором вещей, плакатов и тканей.",
        blocks: [
          {
            subtitle: "Александр Родченко: фотография и дизайн",
            text: "Родченко начал как живописец-абстракционист, но к середине 1920-х объявил живопись мёртвой и перешёл к фотографии, дизайну и рекламе. Его диагональные ракурсы — снизу вверх, сверху вниз — стали иконами авангардной фотографии. Плакаты для Ленгиза и Моссельпрома, сделанные совместно с Маяковским, — образцы тотального дизайна: единство текста, образа и идеи.",
          },
          {
            subtitle: "Варвара Степанова и текстиль",
            text: "Жена Родченко Варвара Степанова реализовала идеи конструктивизма в ткани. Её рисунки для Первой ситценабивной фабрики — геометрические, ритмичные, без орнаментальных излишеств — предвосхитили принципы современного текстильного дизайна. Степанова настаивала: ткань должна быть удобной для движения, а не красивой для разглядывания.",
          },
          {
            subtitle: "Эль Лисицкий и проун",
            text: "Лазарь Лисицкий изобрёл жанр «проун» — Проект утверждения нового, — нечто среднее между картиной и архитектурным макетом. Его работы существуют в пространстве между двумя и тремя измерениями. Лисицкий оформлял советские международные выставки, создавал книги как визуальные объекты и разрабатывал принципы типографики, актуальные по сей день.",
          },
          {
            subtitle: "Агитплакат: искусство без рамы",
            text: "Плакат стал главным жанром советского авангарда — демократичным, тиражным, уличным. «Окна РОСТА» Маяковского и Черемных — быстрая реакция на события гражданской войны, нарисованные от руки и расклеенные в витринах. Позже плакат стал более полиграфическим, но сохранил конструктивистскую ясность: минимум элементов, максимум воздействия.",
          },
        ],
      },
      {
        id: "cinema",
        tag: "Кино",
        title: "Монтаж как философия",
        lead: "Советское кино 1920-х изобрело язык, которым пользуется весь мировой кинематограф до сих пор. Теория монтажа, разработанная Эйзенштейном, Вертовым и Кулешовым, стала фундаментом кинообразования.",
        blocks: [
          {
            subtitle: "Дзига Вертов и Киноглаз",
            text: "Вертов отрицал игровое кино как ложь и провозгласил документальный «Киноглаз» — камеру, которая видит правду, недоступную человеческому глазу. «Человек с киноаппаратом» (1929) — фильм без сценария, актёров и интертитров — до сих пор входит в списки лучших документальных фильмов всех времён. Вертов снимал скрытой камерой, монтировал изображение в ритме музыки и разрушал четвёртую стену задолго до того, как это стало модным.",
          },
          {
            subtitle: "Сергей Эйзенштейн и монтаж аттракционов",
            text: "Эйзенштейн пришёл в кино из театра и принёс с собой теорию «аттракциона» — шокового воздействия на зрителя. «Броненосец Потёмкин» (1925) и «Октябрь» (1927) — не просто пропагандистские фильмы, но эксперименты с восприятием. Знаменитая «Одесская лестница» — серия кадров, которая создаёт у зрителя ощущение длящейся катастрофы, хотя реального события не было.",
          },
          {
            subtitle: "Лев Кулешов и эффект монтажа",
            text: "Кулешов экспериментально доказал: значение кадра зависит не от его содержания, а от контекста — что стоит до и после. Один и тот же крупный план актёра рядом с едой воспринимается как голод, рядом с гробом — как горе, рядом с женщиной — как желание. Этот «эффект Кулешова» — основа монтажного мышления, без которого невозможны ни триллер, ни реклама, ни новостной сюжет.",
          },
          {
            subtitle: "Конец эпохи: звук и соцреализм",
            text: "Приход звукового кино в 1930-х совпал с политическим закручиванием гаек. Авангардный эксперимент закончился: кино стало обязано быть «понятным народу», героическим и оптимистичным. Эйзенштейн снимал «Бежин луг» — и картину уничтожили. Вертов был отстранён от постановок. Эпоха великого эксперимента завершилась, оставив после себя язык, без которого невозможно представить современную визуальную культуру.",
          },
        ],
      },
    ],
    closingQuote: {
      text: "«Улицы — наши кисти. Площади — наши палитры»",
      author: "— В. Маяковский, 1918",
    },
    footer: {
      desc: "Информационный ресурс о советском авангарде и культуре 1920–1930-х годов.",
      sections: "Разделы",
      links: ["Главная", "Литература", "Архитектура", "Живопись", "Кино"],
      rights: "© 2024 Авангард СССР.",
    },
  },
  en: {
    siteTitle: "USSR AVANT-GARDE",
    siteSubtitle: "Culture of the 1920s–1930s",
    nav: {
      home: "Home",
      literature: "Literature",
      architecture: "Architecture",
      painting: "Painting",
      cinema: "Cinema",
    },
    hero: {
      label: "★ 1920 — 1934 ★",
      title: "The Age of\nAvant-Garde",
      desc: "Thirteen years — from the revolution to the 'great break' — Soviet art experienced one of the most powerful creative explosions in world history. Constructivism, VKHUTEMAS, Rodchenko, Mayakovsky, Vertov — names that forever changed the face of 20th-century culture.",
      years: "1917 — 1934",
      yearsLabel: "Years of Soviet avant-garde",
    },
    intro: {
      title: "What is the Soviet Avant-Garde?",
      text1: "After the 1917 revolution, Russia became a laboratory for new art. Artists, architects, poets and directors were convinced: art must not merely reflect reality, but build it. They rejected academic canons, ornamentation and decoration — in favour of function, construction and movement.",
      text2: "The Soviet avant-garde of the 1920s is not one style but a whole constellation of directions: constructivism in architecture and design, suprematism and industrial art in painting, LEF and Proletkult in literature, the montage school in cinema. What united them was a single belief — that a new person demands new art.",
      text3: "By 1934 this era was officially over: the resolution on socialist realism closed the avant-garde experiment. But in a decade and a half, Soviet artists created a legacy that is still studied, cited and reproduced today.",
    },
    sections: [
      {
        id: "literature",
        tag: "Literature",
        title: "The Word as Weapon and Building Material",
        lead: "In the 1920s Russian literature experienced unprecedented diversity. Dozens of groups, manifestos and styles coexisted simultaneously — from futurism to imagism, from LEF to the Serapion Brothers.",
        blocks: [
          {
            subtitle: "LEF and Industrial Literature",
            text: "The Left Front of the Arts — gathered around Mayakovsky — proclaimed the death of 'pure' art. Literature must be useful: essays, reportage, agitprop poetry. 'The streets are our brushes, the squares our palettes' — this was not a metaphor but a literal programme. Mayakovsky wrote advertising copy for Mosselprom and considered it equal to an epic poem.",
          },
          {
            subtitle: "Proletkult and Working-Class Culture",
            text: "Proletarian culture claimed to create a fundamentally new art — without relying on 'bourgeois' heritage. The organisation had its own theatres, publishing houses and literary studios across the country. Its ideologist Alexander Bogdanov dreamed of 'tectology' — a science of organising everything that exists, including the literary text.",
          },
          {
            subtitle: "Velimir Khlebnikov and the Language of the Future",
            text: "Khlebnikov went furthest of all: he invented a new language — 'zaum', trans-sense — based on sonic and root archetypes. His 'Chairman of the Terrestrial Globe' was not a poetic metaphor but a serious project for reorganising humanity. Khlebnikov developed mathematical laws of history and believed that time obeys numbers.",
          },
          {
            subtitle: "RAPP and the End of Diversity",
            text: "By the late 1920s the Russian Association of Proletarian Writers had established ideological control over literature. It hounded 'fellow travellers' — writers like Bulgakov and Platonov — who did not fit the proletarian canon. In 1932 RAPP was dissolved and all writers united in a single Union — with mandatory socialist realism.",
          },
        ],
      },
      {
        id: "architecture",
        tag: "Architecture",
        title: "Building a New World, Literally",
        lead: "Soviet architects of the 1920s were convinced that space shapes people. New buildings had to embody new human relations — collective life, equality, transparency.",
        blocks: [
          {
            subtitle: "VKHUTEMAS — the Soviet Bauhaus",
            text: "The Higher Art and Technical Studios, founded in 1920, were the main forge of Soviet constructivists. Rodchenko, Popova and Vesnin taught here. Students studied not 'fine arts' but design — industrial, textile, architectural. VKHUTEMAS lasted until 1930, but its methodology influenced design education around the world.",
          },
          {
            subtitle: "Konstantin Melnikov and Workers' Clubs",
            text: "Melnikov — the most original architect of the era — built six workers' clubs in Moscow. Each was an experiment: rotating auditoriums, transformable spaces, geometric facades. His own house on Arbat — a cylinder with hexagonal windows — is the only private house in Soviet history built by an architect for himself.",
          },
          {
            subtitle: "The Vesnin Brothers and OSA",
            text: "The Association of Contemporary Architects under the Vesnins developed the principles of 'functionalism': form follows function, no decoration, only construction. Their projects — the Palace of Labour, DneproGES, department stores — became models of industrial modernism.",
          },
          {
            subtitle: "Commune Houses and the New Way of Life",
            text: "Architects designed not just buildings but a way of life. The commune house provided shared canteens, laundries and nurseries — everything that freed people (especially women) from domestic labour. The most famous — Ginzburg's Narkomfin House in Moscow, restored in 2020 and recognised as a monument of world significance.",
          },
        ],
      },
      {
        id: "painting",
        tag: "Painting & Design",
        title: "From Canvas to Production",
        lead: "Soviet avant-garde in the visual arts traced a path from abstraction to 'industrial art' — where the artist became a designer of objects, posters and fabrics.",
        blocks: [
          {
            subtitle: "Alexander Rodchenko: Photography and Design",
            text: "Rodchenko began as an abstract painter but by the mid-1920s declared painting dead and moved to photography, design and advertising. His diagonal angles — from below, from above — became icons of avant-garde photography. His posters for Lengiz and Mosselprom, made with Mayakovsky, are models of total design: unity of text, image and idea.",
          },
          {
            subtitle: "Varvara Stepanova and Textile",
            text: "Rodchenko's wife Varvara Stepanova realised constructivist ideas in fabric. Her designs for the First Cotton-Printing Factory — geometric, rhythmic, without ornamental excess — anticipated the principles of modern textile design. Stepanova insisted: fabric must be comfortable for movement, not beautiful to look at.",
          },
          {
            subtitle: "El Lissitzky and Proun",
            text: "Lazar Lissitzky invented the 'proun' genre — Project for the Affirmation of the New — something between a painting and an architectural model. His works exist in the space between two and three dimensions. Lissitzky designed Soviet international exhibitions, created books as visual objects and developed principles of typography still current today.",
          },
          {
            subtitle: "Agitprop Poster: Art Without a Frame",
            text: "The poster became the main genre of the Soviet avant-garde — democratic, mass-produced, street-level. Mayakovsky and Cheremnych's 'ROSTA Windows' were quick reactions to civil war events, hand-drawn and pasted in shop windows. Later the poster became more typographic but retained constructivist clarity: minimum elements, maximum impact.",
          },
        ],
      },
      {
        id: "cinema",
        tag: "Cinema",
        title: "Montage as Philosophy",
        lead: "Soviet cinema of the 1920s invented a language that the entire world cinema still uses today. The theory of montage, developed by Eisenstein, Vertov and Kuleshov, became the foundation of film education.",
        blocks: [
          {
            subtitle: "Dziga Vertov and the Kino-Eye",
            text: "Vertov denied fiction film as a lie and proclaimed the documentary 'Kino-Eye' — a camera that sees the truth inaccessible to the human eye. 'Man with a Movie Camera' (1929) — a film without a script, actors or intertitles — still features in lists of the greatest documentaries of all time. Vertov shot with hidden cameras, edited images to musical rhythm and broke the fourth wall long before it became fashionable.",
          },
          {
            subtitle: "Sergei Eisenstein and the Montage of Attractions",
            text: "Eisenstein came to cinema from theatre and brought with him the theory of the 'attraction' — the shock effect on the viewer. 'Battleship Potemkin' (1925) and 'October' (1927) are not merely propaganda films but experiments in perception. The famous 'Odessa Steps' sequence creates in the viewer a sense of a prolonged catastrophe, even though no such real event occurred.",
          },
          {
            subtitle: "Lev Kuleshov and the Montage Effect",
            text: "Kuleshov experimentally proved that the meaning of a shot depends not on its content but on context — what comes before and after. The same close-up of an actor next to food reads as hunger, next to a coffin as grief, next to a woman as desire. This 'Kuleshov Effect' is the foundation of montage thinking, without which no thriller, advertisement or news report is possible.",
          },
          {
            subtitle: "End of an Era: Sound and Socialist Realism",
            text: "The arrival of sound cinema in the 1930s coincided with political tightening. The avant-garde experiment ended: cinema was now required to be 'comprehensible to the people', heroic and optimistic. Eisenstein shot 'Bezhin Meadow' — and the film was destroyed. Vertov was removed from directing. The era of the great experiment ended, leaving behind a language without which modern visual culture is unimaginable.",
          },
        ],
      },
    ],
    closingQuote: {
      text: "«The streets are our brushes. The squares are our palettes»",
      author: "— V. Mayakovsky, 1918",
    },
    footer: {
      desc: "An information resource on Soviet avant-garde and the culture of the 1920s–1930s.",
      sections: "Sections",
      links: ["Home", "Literature", "Architecture", "Painting", "Cinema"],
      rights: "© 2024 USSR Avant-Garde.",
    },
  },
};
