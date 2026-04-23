import { useLang } from "@/i18n/LanguageContext";
import certIgnition from "@/assets/cert-ignition.jpg";
import certEa from "@/assets/cert-ea.jpg";
import certHyperskill from "@/assets/cert-hyperskill.jpg";

const certs = [
  {
    img: certIgnition,
    title: "Ignition 8.1",
    sub: "US-Certified · Inductive Automation",
    backKey: "cert1Back" as const,
    accent: "from-primary/30 to-primary-glow/30",
  },
  {
    img: certEa,
    title: "Electronic Arts",
    sub: "Software Engineering · Forage",
    backKey: "cert2Back" as const,
    accent: "from-rose-300/40 to-orange-300/40",
  },
  {
    img: certHyperskill,
    title: "JetBrains Academy",
    sub: "SQL Fundamentals · Hyperskill",
    backKey: "cert3Back" as const,
    accent: "from-emerald-300/40 to-cyan-300/40",
  },
];

const Certifications = () => {
  const { tr } = useLang();
  return (
    <section id="certs" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">{tr("navCerts")}</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-gradient">{tr("certsTitle")}</h2>
          <p className="mt-4 text-muted-foreground">{tr("certsSub")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8" style={{ perspective: "1500px" }}>
          {certs.map((c, i) => (
            <div key={i} className="group relative h-[280px] md:h-[300px]" style={{ transformStyle: "preserve-3d" }}>
              <div
                className="relative w-full h-full transition-transform duration-700 ease-out"
                style={{ transformStyle: "preserve-3d", transform: "rotateY(0deg)" }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden glass-strong shadow-elegant border border-border/60"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-60`} />
                  <div className="relative h-full p-4 flex flex-col">
                    <div className="flex-1 rounded-xl overflow-hidden bg-white shadow-soft">
                      <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold">{c.title}</div>
                        <div className="text-[11px] text-muted-foreground">{c.sub}</div>
                      </div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Hover →</div>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden bg-foreground text-background shadow-lift p-7 flex flex-col justify-between"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="holo-shine absolute inset-0 opacity-20 mix-blend-overlay" />
                  <div className="relative">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-background/60">Certificate</div>
                    <div className="mt-2 text-xl font-semibold">{c.title}</div>
                  </div>
                  <p className="relative text-sm leading-relaxed text-background/85">{tr(c.backKey)}</p>
                  <div className="relative text-[11px] text-background/60">{c.sub}</div>
                </div>
              </div>

              {/* Hover trigger via group-hover style */}
              <style>{`
                .group:hover > div { transform: rotateY(180deg); }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
