import { useLang } from "@/i18n/LanguageContext";

const Footer = () => {
  const { tr } = useLang();
  return (
    <footer className="py-10 border-t border-border">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="inline-block w-2 h-2 rounded-full bg-gradient-azure" />
          {tr("footer")}
        </div>
        <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <a href="mailto:al.exma2356@gmail.com" className="hover:text-foreground transition-colors">Email</a>
          <a href="https://t.me/alexandermaksimenko" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Telegram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
