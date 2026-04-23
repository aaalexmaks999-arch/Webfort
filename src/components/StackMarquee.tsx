import { useLang } from "@/i18n/LanguageContext";

const row1 = ["Python", "Node.js", "Angular", "PostgreSQL", "Schneider Electric", "SCADA", "Docker", "Firebase", "Next.js"];
const row2 = ["aiogram", "TypeScript", "React", "Linux", "Ignition 8.1", "OpenAI", "PLC / ST", "REST API", "Tailwind"];

const Pill = ({ label }: { label: string }) => (
  <div className="shrink-0 mx-2 px-5 py-3 rounded-full glass-strong shadow-soft text-sm font-medium whitespace-nowrap hover:shadow-elegant hover:text-primary transition-all duration-300">
    {label}
  </div>
);

const Marquee = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => (
  <div className="relative overflow-hidden">
    <div className={`flex w-max ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
      {[...items, ...items].map((item, i) => <Pill key={i} label={item} />)}
    </div>
  </div>
);

const StackMarquee = () => {
  const { tr } = useLang();
  return (
    <section id="stack" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container">
        <div className="max-w-2xl mb-12 text-center mx-auto">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">{tr("navStack")}</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-gradient">{tr("stackTitle")}</h2>
          <p className="mt-4 text-muted-foreground">{tr("stackSub")}</p>
        </div>
      </div>

      <div className="relative space-y-4">
        {/* Side fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <Marquee items={row1} />
        <Marquee items={row2} reverse />
      </div>
    </section>
  );
};

export default StackMarquee;
