import { useState } from "react";
import { Lang } from "./soviet/translations";
import SiteHeader from "./soviet/SiteHeader";
import HeroSection from "./soviet/HeroSection";
import ArticleSection from "./soviet/ArticleSection";

export default function Index() {
  const [lang, setLang] = useState<Lang>("ru");
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="min-h-screen soviet-texture" style={{ backgroundColor: "var(--soviet-cream)", color: "var(--soviet-dark)" }}>
      <SiteHeader lang={lang} setLang={setLang} activeNav={activeNav} setActiveNav={setActiveNav} />
      <HeroSection lang={lang} />
      <ArticleSection lang={lang} />
    </div>
  );
}
