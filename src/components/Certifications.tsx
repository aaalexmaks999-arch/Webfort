import { useLang } from "@/i18n/LanguageContext";
import certIgnition from "@/assets/cert-ignition.jpg";
import certEa from "@/assets/cert-ea.jpg";
import certHyperskill from "@/assets/cert-hyperskill.jpg";
import certKaggle from "@/assets/cert-kaggle.png";

type Cert = {
  img: string;
  title: string;
  titleKey?: "cert1Title";
  sub: string;
  tagKey?: "cert1Tag";
  backKey: "cert1Back" | "cert2Back" | "cert3Back" | "cert4Back";
  accent: string;
};

const certs: Cert[] = [
  {
    img: certIgnition,
    title: "Ignition 8.1",
    titleKey: "cert1Title",
    tagKey: "cert1Tag",
    sub: "US-Certified · Inductive Automation",
    backKey: "cert1Back",
    accent: "from-primary/30 to-primary-glow/30",
  },
  {
    img: certEa,
    title: "Electronic Arts",
    sub: "Software Engineering · Forage",
    backKey: "cert2Back",
    accent: "from-rose-300/40 to-orange-300/40",
  },
  {
    img: certHyperskill,
    title: "JetBrains Academy",
    sub: "SQL Fundamentals · Hyperskill",
    backKey: "cert3Back",
    accent: "from-emerald-300/40 to-cyan-300/40",
  },
  {
    img: certKaggle,
    title: "Maksymenko Oleksandr",
    sub: "Python / AI · Kaggle",
    backKey: "cert4Back",
    accent: "from-yellow-300/40 to-sky-300/40",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {certs.map((c, i) => (
            <div key={i} className="cert-card h-[280px] md:h-[300px]">
              <div className="cert-card-inner">
                {/* Front */}
                <div className="cert-face cert-front rounded-2xl overflow-hidden glass-strong shadow-elegant border border-border/60">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-60`} />
                  <div className="relative h-full p-4 flex flex-col">
                    <div className="flex-1 rounded-xl overflow-hidden bg-white shadow-soft">
                      <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="min-w-0">
                        <div className="text-sm font-semibold truncate">{c.title}</div>
                        <div className="text-[11px] text-muted-foreground truncate">{c.sub}</div>
                      </div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground shrink-0 ml-2">Hover →</div>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className="cert-face cert-back rounded-2xl overflow-hidden bg-foreground text-background shadow-lift p-6 flex flex-col justify-center items-start gap-3">
                  <div className="holo-shine absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" />
                  <div className="relative">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-primary-glow">
                      {c.tagKey ? tr(c.tagKey) : "Certificate"}
                    </div>
                    <div className="mt-1.5 text-lg font-semibold leading-tight">
                      {c.titleKey ? tr(c.titleKey) : c.title}
                    </div>
                  </div>
                  <p className="relative text-sm leading-relaxed text-background/85">{tr(c.backKey)}</p>
                  <div className="relative text-[11px] text-background/60">{c.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
