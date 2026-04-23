import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { lang, setLang, tr } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#work", label: tr("navWork") },
    { href: "#certs", label: tr("navCerts") },
    { href: "#stack", label: tr("navStack") },
    { href: "#contact", label: tr("navContact") },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "py-3" : "py-5"
    )}>
      <div className="container">
        <nav className={cn(
          "flex items-center justify-between gap-4 px-4 md:px-6 py-3 rounded-full transition-all duration-500",
          scrolled ? "glass-strong shadow-soft" : "bg-transparent"
        )}>
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-azure shadow-glow" />
            <span>Oleksandr<span className="text-primary">.</span></span>
          </a>
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1 p-1 rounded-full bg-secondary/70 border border-border">
            <button
              onClick={() => setLang("ua")}
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-full transition-all",
                lang === "ua" ? "bg-foreground text-background shadow-soft" : "text-muted-foreground hover:text-foreground"
              )}
              aria-pressed={lang === "ua"}
            >UA</button>
            <button
              onClick={() => setLang("en")}
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-full transition-all",
                lang === "en" ? "bg-foreground text-background shadow-soft" : "text-muted-foreground hover:text-foreground"
              )}
              aria-pressed={lang === "en"}
            >EN</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
