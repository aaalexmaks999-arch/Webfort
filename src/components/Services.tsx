import { Rocket, LayoutDashboard, Bot, Sparkles } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const services = [
  { icon: Rocket, titleKey: "svc1Title", descKey: "svc1Desc" },
  { icon: LayoutDashboard, titleKey: "svc2Title", descKey: "svc2Desc" },
  { icon: Bot, titleKey: "svc3Title", descKey: "svc3Desc" },
  { icon: Sparkles, titleKey: "svc4Title", descKey: "svc4Desc" },
] as const;

const Services = () => {
  const { tr } = useLang();
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-primary">
            {tr("servicesBadge")}
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            <span className="text-foreground">{tr("servicesTitleLead")} </span>
            <span className="text-primary">{tr("servicesTitleAccent")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl">
            {tr("servicesSub")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={i}
                className="group relative bg-white rounded-2xl border border-slate-100 p-6 md:p-7 shadow-soft transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-soft group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mt-5 text-lg md:text-xl font-semibold tracking-tight leading-snug">
                  {tr(s.titleKey)}
                </h3>
                <p className="mt-3 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                  {tr(s.descKey)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
