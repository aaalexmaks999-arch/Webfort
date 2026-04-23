import { ArrowRight, Sparkles } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import IdBadge from "./IdBadge";

const Hero = () => {
  const { tr, lang } = useLang();
  const stats = [
    { v: "5+", l: { ua: "років досвіду", en: "years building" } },
    { v: "30+", l: { ua: "проєктів", en: "projects shipped" } },
    { v: "US", l: { ua: "сертифікація", en: "certified" } },
  ];
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute top-20 -right-32 w-[400px] h-[400px] rounded-full bg-primary-glow/10 blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {tr("heroBadge")}
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="text-gradient">{tr("heroTitle")}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              {tr("heroSub")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-medium shadow-elegant hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5"
              >
                {tr("heroCta")}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-sm font-medium hover:bg-white transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                {tr("heroCta2")}
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-bold tracking-tight">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l[lang]}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Badge column */}
          <div className="relative h-[520px] lg:h-[560px]">
            <IdBadge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
