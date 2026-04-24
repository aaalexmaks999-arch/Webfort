import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "ua" | "en";

type Dict = Record<string, { ua: string; en: string }>;

export const t: Dict = {
  navWork: { ua: "Проєкти", en: "Work" },
  navCerts: { ua: "Сертифікати", en: "Certifications" },
  navStack: { ua: "Стек", en: "Stack" },
  navContact: { ua: "Контакти", en: "Contact" },
  heroBadge: { ua: "Доступний для проєктів", en: "Available for projects" },
  heroTitle: {
    ua: "Створюю розумні боти, вебплатформи та автоматизацію",
    en: "Building smart bots, web platforms, and automation",
  },
  heroSub: {
    ua: "Розробляю high-load Telegram-екосистеми, масштабовані корпоративні платформи та системи промислової автоматизації. Сертифікований США інженер (Inductive Automation). Будую надійну інфраструктуру, яка гарантовано «не впаде».",
    en: "I build high-load Telegram ecosystems, scalable enterprise platforms, and industrial automation systems. US-Certified engineer (Inductive Automation). Reliable infrastructure that simply won't go down.",
  },
  navProcess: { ua: "Процес", en: "Process" },
  processTitle: { ua: "Як ми працюємо", en: "How we work" },
  processSub: { ua: "Прозорий процес від ідеї до продакшну.", en: "A transparent process from idea to production." },
  step1Title: { ua: "Дослідження", en: "Discovery" },
  step1Time: { ua: "1–3 дні", en: "1–3 days" },
  step1Desc: { ua: "Занурюємось у задачу, цілі бізнесу та обмеження. Формуємо чіткий скоуп.", en: "We dive into the problem, business goals, and constraints. Clear scope is set." },
  step2Title: { ua: "Архітектура", en: "Architecture" },
  step2Time: { ua: "2–5 днів", en: "2–5 days" },
  step2Desc: { ua: "Технології, моделі даних, інтеграції та схема інфраструктури.", en: "Technologies, data models, integrations and infrastructure blueprint." },
  step3Title: { ua: "Розробка", en: "Development" },
  step3Time: { ua: "2–8 тижнів", en: "2–8 weeks" },
  step3Desc: { ua: "Ітеративна розробка з демо щотижня — ви бачите прогрес у реальному часі.", en: "Iterative development with weekly demos — you see progress in real time." },
  step4Title: { ua: "Деплой", en: "Deploy" },
  step4Time: { ua: "Постійно", en: "Continuous" },
  step4Desc: { ua: "CI/CD, моніторинг, алерти та підтримка після запуску.", en: "CI/CD, monitoring, alerts, and post-launch support." },
  cert4Back: { ua: "Курс Python від Kaggle Learn — основи мови та робота з даними для AI.", en: "Kaggle Learn Python course — language fundamentals and data work for AI." },
  viewProject: { ua: "Подивитися проєкт", en: "View project" },
  heroCta: { ua: "Подивитися роботи", en: "View my work" },
  heroCta2: { ua: "Зв'язатися", en: "Get in touch" },
  badgeRole: { ua: "Інженер-розробник", en: "Software Engineer" },
  badgeLabel: { ua: "Сертифіковано в США", en: "US-Certified Engineer" },
  workTitle: { ua: "Вибрані проєкти", en: "Selected work" },
  workSub: { ua: "Чотири продукти, що поєднують промислову точність та сучасний веб.", en: "Four products blending industrial precision with the modern web." },
  viewCase: { ua: "Подивитись кейс", en: "View case" },
  certsTitle: { ua: "Сертифікації", en: "Certifications" },
  certsSub: { ua: "Перевернути картку — деталі на звороті.", en: "Hover to flip — details on the back." },
  stackTitle: { ua: "Технологічний стек", en: "Tech Stack" },
  stackSub: { ua: "Інструменти, з якими я будую системи щодня.", en: "Tools I build with every day." },
  contactTitle: { ua: "Поговорімо", en: "Let's talk" },
  contactSub: { ua: "Готовий обговорити ваш проєкт. Відповідь — протягом доби.", en: "Ready to discuss your project. I respond within 24h." },
  formName: { ua: "Ім'я", en: "Name" },
  formEmail: { ua: "Email", en: "Email" },
  formMessage: { ua: "Повідомлення", en: "Message" },
  formSend: { ua: "Надіслати", en: "Send message" },
  formSending: { ua: "Надсилання…", en: "Sending…" },
  formSuccess: { ua: "Дякую! Я отримав ваше повідомлення.", en: "Thanks! Your message has been received." },
  formError: { ua: "Щось пішло не так. Спробуйте ще раз.", en: "Something went wrong. Please try again." },
  telegramBtn: { ua: "Написати в Telegram", en: "Message on Telegram" },
  footer: { ua: "© 2026 Олександр Максименко. Створено з точністю.", en: "© 2026 Oleksandr Maksymenko. Engineered with precision." },
  proj1Title: { ua: "Промислова автоматизація PLC", en: "Industrial PLC Automation" },
  proj1Desc: {
    ua: "Розробка ПЗ для виробничих ліній (мова ST). Інтеграція зі SCADA та обладнанням Schneider Electric.",
    en: "Software for production lines (ST language). SCADA & Schneider Electric integration.",
  },
  proj2Title: { ua: "Telegram-екосистема високого навантаження", en: "High-Load Telegram Ecosystem" },
  proj2Desc: {
    ua: "Багаторівнева реферальна система, Linux-сервери, БД та Userbot API. Включає фінансовий бот CheckMate.",
    en: "Multi-level referral system, Linux servers, DB, and Userbot API. Includes CheckMate finance bot.",
  },
  proj3Title: { ua: "Платформа онлайн-навчання", en: "Online Learning Platform" },
  proj3Desc: {
    ua: "Повноцінна онлайн-академія з курсами та кабінетом учня.",
    en: "Full-scale online academy with courses and student dashboards.",
  },
  proj4Title: { ua: "AI-агент підтримки", en: "AI Support Agent" },
  proj4Desc: {
    ua: "Бот на базі GPT з базою знань і передачею діалогу оператору.",
    en: "GPT-powered support bot with knowledge base and operator handoff.",
  },
  cert1Back: { ua: "Стандарти надійності промислових SCADA, застосовані у веб-проєктах.", en: "Industrial SCADA reliability standards applied to web projects." },
  cert2Back: { ua: "Симуляція ролі Software Engineer: фічі, OOP, дебаг.", en: "Software Engineer simulation: features, OOP, debugging." },
  cert3Back: { ua: "SQL Fundamentals — 29 тем, від запитів до оптимізації.", en: "SQL Fundamentals — 29 topics, queries to optimization." },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; tr: (key: keyof typeof t) => string };
const LanguageContext = createContext<Ctx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ua");
  const tr = (key: keyof typeof t) => t[key]?.[lang] ?? key;
  return <LanguageContext.Provider value={{ lang, setLang, tr }}>{children}</LanguageContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be inside LanguageProvider");
  return ctx;
};
