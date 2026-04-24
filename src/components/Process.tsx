import { Search, LayoutGrid, Code2, Rocket } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const steps = [
  { icon: Search, titleKey: "step1Title", timeKey: "step1Time", descKey: "step1Desc" },
  { icon: LayoutGrid, titleKey: "step2Title", timeKey: "step2Time", descKey: "step2Desc" },
  { icon: Code2, titleKey: "step3Title", timeKey: "step3Time", descKey: "step3Desc" },
  { icon: Rocket, titleKey: "step4Title", timeKey: "step4Time", descKey: "step4Desc" },
] as const;

const Process = () => {
  const { tr } = useLang();
  return (
    <section id="process" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">{tr("navProcess")}</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-gradient">{tr("processTitle")}</h2>
          <p className="mt-4 text-muted-foreground">{tr("processSub")}</p>
        </div>

        <ol className="relative max-w-3xl mx-auto">
          {/* Vertical rail */}
          <div className="absolute left-6 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-border" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={i} className="relative pl-16 md:pl-24 pb-8 last:pb-0">
                {/* Node */}
                <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl glass-strong shadow-soft border border-border/60">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>

                {/* Card */}
                <div className="group rounded-2xl border border-border/60 bg-white/40 p-5 md:p-6 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                      {`0${i + 1}`}
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold tracking-tight">{tr(s.titleKey)}</h3>
                    <span className="ml-auto inline-flex items-center px-2.5 py-1 rounded-full bg-accent text-[11px] font-mono font-medium text-accent-foreground">
                      {tr(s.timeKey)}
                    </span>
                  </div>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {tr(s.descKey)}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Process;
