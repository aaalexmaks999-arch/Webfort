import { FormEvent, useState } from "react";
import { Check, Mail, Send } from "lucide-react";
import { z } from "zod";
import { useLang } from "@/i18n/LanguageContext";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
});

const Contact = () => {
  const { tr, lang } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      setStatus("error");
      setErrorMsg(parsed.error.errors[0]?.message ?? "Invalid input");
      return;
    }
    try {
      const res = await fetch("https://formspree.io/f/xojylyyd", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setErrorMsg(tr("formError"));
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">{tr("navContact")}</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-gradient">{tr("contactTitle")}</h2>
            <p className="mt-4 text-muted-foreground max-w-md">{tr("contactSub")}</p>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:al.exma2356@gmail.com"
                className="group flex items-center gap-3 p-4 rounded-2xl glass hover:bg-white transition-all duration-300 shadow-soft hover:shadow-elegant"
              >
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="font-medium truncate">al.exma2356@gmail.com</div>
                </div>
              </a>

              <a
                href="https://t.me/alexandermaksimenko"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 p-4 rounded-2xl bg-foreground text-background shadow-elegant hover:shadow-lift hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-azure flex items-center justify-center shadow-glow">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-background/60">Telegram</div>
                    <div className="font-semibold">{tr("telegramBtn")}</div>
                  </div>
                </div>
                <span className="text-background/60 group-hover:text-background transition-colors">→</span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="glass-strong rounded-3xl p-6 md:p-8 shadow-elegant">
            {status === "success" ? (
              <div className="min-h-[420px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                  <Check className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-xl font-semibold">{tr("formSuccess")}</div>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-primary hover:underline"
                >
                  {lang === "ua" ? "Надіслати ще" : "Send another"}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{tr("formName")}</label>
                  <input
                    id="name" name="name" required maxLength={100}
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{tr("formEmail")}</label>
                  <input
                    id="email" name="email" type="email" required maxLength={255}
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{tr("formMessage")}</label>
                  <textarea
                    id="message" name="message" required rows={5} maxLength={2000}
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-white border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="text-sm text-destructive">{errorMsg || tr("formError")}</div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-foreground text-background text-sm font-medium shadow-elegant hover:shadow-lift disabled:opacity-60 transition-all duration-300"
                >
                  {status === "sending" ? tr("formSending") : tr("formSend")}
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
