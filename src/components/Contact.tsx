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

      // Отправка события успешной конверсии в Google Ads
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-18117408777/5W09CJWplaIcEInwhr9D'
        });
      }

    } catch {
      setStatus("error");
      setErrorMsg(tr("formError"));
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Очень мягкое, невидимое фоновое свечение для объема */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-40 pointer-events-none rounded-full blur-[120px] bg-blue-100/50" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          
          {/* Left */}
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 font-semibold">{tr("navContact")}</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">{tr("contactTitle")}</h2>
            <p className="mt-4 text-slate-600 max-w-md leading-relaxed">{tr("contactSub")}</p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:al.exma2356@gmail.com"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100/50">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500">Email</div>
                  <div className="font-medium text-slate-900 truncate text-base">al.exma2356@gmail.com</div>
                </div>
              </a>

              <a
                href="https://t.me/alexandermaksimenko"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 p-5 rounded-2xl bg-slate-900 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400">Telegram</div>
                    <div className="font-bold text-lg">{tr("telegramBtn")}</div>
                  </div>
                </div>
                <span className="text-slate-400 group-hover:text-white transition-colors text-lg">→</span>
              </a>
            </div>
          </div>

          {/* Right — form (светлое матовое стекло) */}
          <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-200/50">
            {status === "success" ? (
              <div className="min-h-[420px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6 border border-emerald-200">
                  <Check className="w-10 h-10 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold tracking-tight text-slate-900">{tr("formSuccess")}</div>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                >
                  {lang === "ua" ? "Надіслати ще повідомлення" : "Send another message"}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-slate-500 font-medium">{tr("formName")}</label>
                  <input
                    id="name" name="name" required maxLength={100}
                    placeholder={lang === "ua" ? "Приклад: Іван Петренко" : "e.g., John Doe"}
                    className="mt-2 w-full px-5 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-slate-500 font-medium">{tr("formEmail")}</label>
                  <input
                    id="email" name="email" type="email" required maxLength={255}
                    placeholder={lang === "ua" ? "ivan@company.com" : "john@company.com"}
                    className="mt-2 w-full px-5 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-slate-500 font-medium">{tr("formMessage")}</label>
                  <textarea
                    id="message" name="message" required rows={4} maxLength={2000}
                    placeholder={lang === "ua" ? "Що ви будуєте? Цілі, терміни, орієнтовний бюджет..." : "What are you building? Goals, timeline, budget..."}
                    className="mt-2 w-full px-5 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">{errorMsg || tr("formError")}</div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full group inline-flex items-center justify-center gap-2.5 px-5 py-4 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 disabled:opacity-60 transition-all duration-300"
                >
                  {status === "sending" ? tr("formSending") : tr("formSend")}
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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