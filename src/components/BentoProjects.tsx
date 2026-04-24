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

        {/* Убрали жесткое ограничение высоты auto-rows-[200px], теперь сетка "дышит" */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-auto">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={i}
                className={cn(
                  "group relative overflow-hidden rounded-3xl bg-white/50 backdrop-blur-sm border border-slate-200/60 shadow-sm flex flex-col",
                  "transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-2 hover:border-blue-200",
                  p.className
                )}
              >
                {/* Фоновая картинка (появляется очень мягко при наведении) */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-all duration-700 scale-105 group-hover:scale-100 z-0"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
                
                {/* Легкий градиент поверх картинки, чтобы текст всегда читался */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                {/* Основной контент (z-10 чтобы быть поверх фона) */}
                <div className="relative z-10 h-full w-full flex flex-col p-6">
                  
                  {/* Иконки сверху */}
                  <div className="flex items-start justify-between shrink-0 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 transition-all duration-500 group-hover:text-blue-600 group-hover:rotate-12" />
                  </div>

                  {/* Заголовок (Всегда видим) */}
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 mb-3">
                    {tr(p.titleKey)}
                  </h3>

                  {/* Текст описания (Всегда видим, flex-grow заставляет его толкать кнопку вниз) */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-grow">
                    {tr(p.descKey)}
                  </p>

                  {/* Теги (Всегда видимы) */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className="px-3 py-1 text-[11px] font-semibold tracking-wide rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {t}
                      </span>
                    ))}
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