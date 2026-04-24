import { useLang } from "@/i18n/LanguageContext";

const row1 = ["Python", "Node.js", "Angular", "PostgreSQL", "Schneider Electric", "SCADA", "Docker", "Firebase", "Next.js"];
const row2 = ["aiogram", "TypeScript", "React", "Linux", "Ignition 8.1", "OpenAI", "PLC / ST", "REST API", "Tailwind"];

const Pill = ({ label }: { label: string }) => (
  <div className="shrink-0 mx-2 md:mx-3 px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200/60 shadow-sm text-sm font-semibold text-slate-700 hover:shadow-md hover:shadow-blue-500/10 hover:text-blue-600 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
    {label}
  </div>
);

const Marquee = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => {
  // Умножаем массив на 4, чтобы лента была бесконечной на абсолютно любых экранах
  const extendedItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className="relative overflow-hidden flex w-full group">
      {/* group-hover:[animation-play-state:paused] - останавливает ленту при наведении мыши */}
      <div className={`flex w-max shrink-0 ${reverse ? "animate-marquee-rev" : "animate-marquee"} group-hover:[animation-play-state:paused]`}>
        {extendedItems.map((item, i) => (
          <Pill key={i} label={item} />
        ))}
      </div>
    </div>
  );
};

const StackMarquee = () => {
  const { tr } = useLang();
  
  return (
    <section id="stack" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container">
        <div className="max-w-2xl mb-12 text-center mx-auto">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 font-semibold">{tr("navStack")}</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">{tr("stackTitle")}</h2>
          <p className="mt-4 text-slate-600">{tr("stackSub")}</p>
        </div>
      </div>

      <div className="relative space-y-6 mt-10">
        {/* Боковые градиенты (чтобы таблетки красиво выплывали из пустоты) */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
        
        <Marquee items={row1} />
        <Marquee items={row2} reverse />
      </div>
    </section>
  );
};

export default StackMarquee;