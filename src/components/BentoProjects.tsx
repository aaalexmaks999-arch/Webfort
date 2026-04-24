import { ArrowUpRight, Cpu, Send, GraduationCap, Bot } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import projPlc from "@/assets/proj-plc.jpg";
import projTelegram from "@/assets/proj-telegram.jpg";
import projLearning from "@/assets/proj-learning.jpg";
import projAi from "@/assets/proj-ai.jpg";

type Project = {
  titleKey: any;
  descKey: any;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  className: string;
};

const projects: Project[] = [
  {
    titleKey: "proj1Title", descKey: "proj1Desc",
    tags: ["PLC", "ST", "Machine Expert", "SCADA"],
    icon: Cpu, image: projPlc,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    titleKey: "proj2Title", descKey: "proj2Desc",
    tags: ["Python", "aiogram", "PostgreSQL", "Linux"],
    icon: Send, image: projTelegram,
    className: "md:col-span-2",
  },
  {
    titleKey: "proj3Title", descKey: "proj3Desc",
    tags: ["Web", "Full-Stack", "Database"],
    icon: GraduationCap, image: projLearning,
    className: "md:col-span-1",
  },
  {
    titleKey: "proj4Title", descKey: "proj4Desc",
    tags: ["AI", "LLM", "OpenAI"],
    icon: Bot, image: projAi,
    className: "md:col-span-1",
  },
];

const BentoProjects = () => {
  const { tr } = useLang();
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">{tr("navWork")}</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-gradient">{tr("workTitle")}</h2>
          <p className="mt-4 text-muted-foreground">{tr("workSub")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[200px] gap-4 md:gap-5">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={i}
                className={cn(
                  "group relative overflow-hidden rounded-3xl glass border border-border/60 shadow-soft",
                  "transition-all duration-500 hover:shadow-lift hover:-translate-y-2 hover:border-primary/30",
                  p.className
                )}
              >
                {/* Bg image fade */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full w-full flex flex-col justify-between p-5 md:p-6 overflow-hidden">
                  {/* Top row */}
                  <div className="flex items-start justify-between shrink-0">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl glass-strong flex items-center justify-center shadow-soft">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all duration-500 group-hover:text-primary group-hover:rotate-12" />
                  </div>

                  {/* Title (always visible) */}
                  <h3 className="mt-4 text-base md:text-lg lg:text-xl font-semibold tracking-tight line-clamp-2">
                    {tr(p.titleKey)}
                  </h3>

                  {/* Reveal content */}
                  <div className="mt-3 flex flex-col gap-2.5 min-w-0">
                    <p className="text-[13px] md:text-sm text-foreground/80 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                      {tr(p.descKey)}
                    </p>

                    <div className="flex flex-wrap gap-1.5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[10px] md:text-[11px] font-medium rounded-full bg-white/90 border border-border text-foreground/80">
                          {t}
                        </span>
                      ))}
                    </div>

                    <button className="self-start mt-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border text-[11px] md:text-xs font-semibold text-primary shadow-soft translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 hover:bg-accent">
                      {tr("viewProject")}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoProjects;
