const translations = {
  ru: {
    nav: { about: "Обо мне", bots: "Боты", websites: "Сайты", contacts: "Контакты" },
    hero: {
      eyebrow: "Telegram-боты • AI • Сайты",
      title: "Сайты и Telegram-боты для бизнеса",
      subtitle: "Создаю Telegram-ботов, AI-ассистентов, автоматизацию и сайты с аккуратным дизайном, понятной логикой и адаптацией под любые устройства.",
      projects: "Смотреть проекты",
      contact: "Связаться"
    },
    stats: { exp: "лет опыта", directions: "направления", responsive: "адаптивность" },
    about: {
      label: "Обо мне",
      title: "Idris Codes — разработка под реальные задачи",
      text: "Я помогаю бизнесам, экспертам и проектам запускать удобные Telegram-боты, AI-боты, лендинги, сайты-визитки и портфолио. Мой подход — сделать проект не просто рабочим, а понятным, красивым и убедительным для клиента.",
      cards: {
        specialization: { title: "Специализация", text: "Telegram-боты, AI, сайты" },
        stack: { title: "Стек", text: "Python, HTML, CSS, JavaScript" },
        experience: { title: "Опыт", text: "5+ лет практики" },
        location: { title: "Локация", text: "Душанбе, Таджикистан" }
      }
    },
    bots: { title: "Готовые Telegram-боты", desc: "Проекты, которые показывают мою работу с логикой, кнопками, AI и удобным пользовательским сценарием." },
    websites: { title: "Сайты и лендинги", desc: "Реальные веб-проекты: лендинги, сайты-визитки, резюме-сайты и портфолио с адаптацией под разные устройства." },
    contacts: {
      label: "Контакты",
      title: "Связаться со мной",
      desc: "Если вам нужен Telegram-бот, сайт, лендинг, визитка-резюме или автоматизация — напишите мне. Разберём идею и подберём лучший формат проекта."
    },
    data: {
      bots: [
        { title: "UniHelper", type: "TELEGRAM BOT", status: "LIVE", desc: "Бот для помощи с поступлением: языки, сценарии, удобные кнопки и понятный путь пользователя.", tags: ["Education", "AI", "Multi-language"], button: "Открыть бот", link: "https://t.me/UniHelperByIdris_Bot" },
        { title: "iBot GPT", type: "AI BOT", status: "LIVE", desc: "AI-бот внутри Telegram для быстрых ответов, общения и помощи пользователям без сложного интерфейса.", tags: ["AI", "ChatGPT-style", "Telegram"], button: "Открыть бот", link: "https://t.me/ai_byIdris_bot" },
        { title: "MultiTool", type: "TOOLS BOT", status: "LIVE", desc: "Многофункциональный Telegram-бот с полезными инструментами, быстрыми действиями и удобным меню.", tags: ["Tools", "Fast", "Automation"], button: "Открыть бот", link: "https://t.me/ByIdris_MultiTool_Bot" }
      ],
      websites: [
        { title: "Mark Zuckerberg Meta Universe", type: "CONCEPT", status: "LIVE", desc: "Кинематичный concept-сайт о Марке Цукерберге и экосистеме Meta: Facebook, Instagram, WhatsApp, Threads, Quest и AI.", tags: ["Meta", "Cinematic", "Concept"], button: "Смотреть проект", link: "https://zuckerberg-production.up.railway.app/" },
        { title: "KFC Tajikistan Landing", type: "LANDING", status: "LIVE", desc: "Лендинг в стиле бренда для KFC Tajikistan: яркий дизайн, адаптация и удобные блоки для посетителей.", tags: ["Landing", "Brand", "Responsive"], button: "Смотреть проект", link: "https://kfctj-production.up.railway.app/" },
        { title: "Personal Portfolio", type: "PORTFOLIO", status: "LIVE", desc: "Сайт-портфолио для презентации навыков, проектов, контактов и услуг разработчика.", tags: ["Portfolio", "Clean", "Animated"], button: "Смотреть проект", link: "https://my-resume-site-production.up.railway.app/" }
      ]
    }
  },
  en: {
    nav: { about: "About", bots: "Bots", websites: "Websites", contacts: "Contacts" },
    hero: {
      eyebrow: "Telegram bots • AI • Websites",
      title: "Websites and Telegram bots for business",
      subtitle: "I build Telegram bots, AI assistants, automation and websites with clean design, clear logic and full responsive adaptation.",
      projects: "View projects",
      contact: "Contact me"
    },
    stats: { exp: "years experience", directions: "directions", responsive: "responsive" },
    about: {
      label: "About",
      title: "Idris Codes — development for real tasks",
      text: "I help businesses, experts and projects launch Telegram bots, AI bots, landing pages, personal websites and portfolios. My approach is to make a project not only working, but clear, attractive and persuasive.",
      cards: {
        specialization: { title: "Specialization", text: "Telegram bots, AI, websites" },
        stack: { title: "Stack", text: "Python, HTML, CSS, JavaScript" },
        experience: { title: "Experience", text: "5+ years of practice" },
        location: { title: "Location", text: "Dushanbe, Tajikistan" }
      }
    },
    bots: { title: "Ready Telegram bots", desc: "Projects that show my work with logic, buttons, AI and convenient user scenarios." },
    websites: { title: "Websites and landing pages", desc: "Real web projects: landing pages, personal websites, resume websites and portfolios adapted for different devices." },
    contacts: {
      label: "Contacts",
      title: "Contact me",
      desc: "If you need a Telegram bot, website, landing page, resume website or automation, message me. We will review the idea and choose the best project format."
    },
    data: {
      bots: [
        { title: "UniHelper", type: "TELEGRAM BOT", status: "LIVE", desc: "A bot for admissions assistance: languages, scenarios, convenient buttons and a clear user path.", tags: ["Education", "AI", "Multi-language"], button: "Open bot", link: "https://t.me/UniHelperByIdris_Bot" },
        { title: "iBot GPT", type: "AI BOT", status: "LIVE", desc: "An AI bot inside Telegram for quick answers, conversations and user support without a complex interface.", tags: ["AI", "ChatGPT-style", "Telegram"], button: "Open bot", link: "https://t.me/ai_byIdris_bot" },
        { title: "MultiTool", type: "TOOLS BOT", status: "LIVE", desc: "A multifunctional Telegram bot with useful tools, quick actions and a convenient menu.", tags: ["Tools", "Fast", "Automation"], button: "Open bot", link: "https://t.me/ByIdris_MultiTool_Bot" }
      ],
      websites: [
        { title: "Mark Zuckerberg Meta Universe", type: "CONCEPT", status: "LIVE", desc: "A cinematic concept website about Mark Zuckerberg and the Meta ecosystem: Facebook, Instagram, WhatsApp, Threads, Quest and AI.", tags: ["Meta", "Cinematic", "Concept"], button: "View project", link: "https://zuckerberg-production.up.railway.app/" },
        { title: "KFC Tajikistan Landing", type: "LANDING", status: "LIVE", desc: "A brand-style landing page for KFC Tajikistan with bright design, adaptation and useful sections.", tags: ["Landing", "Brand", "Responsive"], button: "View project", link: "https://kfctj-production.up.railway.app/" },
        { title: "Personal Portfolio", type: "PORTFOLIO", status: "LIVE", desc: "A portfolio website for presenting developer skills, projects, contacts and services.", tags: ["Portfolio", "Clean", "Animated"], button: "View project", link: "https://my-resume-site-production.up.railway.app/" }
      ]
    }
  },
  tj: {
    nav: { about: "Дар бораи ман", bots: "Ботҳо", websites: "Сайтҳо", contacts: "Тамос" },
    hero: {
      eyebrow: "Telegram-ботҳо • AI • Сайтҳо",
      title: "Сайтҳо ва Telegram-ботҳо барои бизнес",
      subtitle: "Ман Telegram-ботҳо, AI-ассистентҳо, автоматизатсия ва сайтҳоро бо дизайни зебо, логикаи фаҳмо ва мутобиқшавӣ ба ҳама дастгоҳҳо месозам.",
      projects: "Дидани лоиҳаҳо",
      contact: "Тамос гирифтан"
    },
    stats: { exp: "сол таҷриба", directions: "самт", responsive: "адаптивӣ" },
    about: {
      label: "Дар бораи ман",
      title: "Idris Codes — таҳия барои вазифаҳои воқеӣ",
      text: "Ман ба бизнесҳо, экспертҳо ва лоиҳаҳо барои сохтани Telegram-ботҳо, AI-ботҳо, лендингҳо, сайт-визиткаҳо ва портфолио кӯмак мекунам. Ҳадаф — лоиҳа на танҳо кор кунад, балки фаҳмо, зебо ва боварибахш бошад.",
      cards: {
        specialization: { title: "Самт", text: "Telegram-ботҳо, AI, сайтҳо" },
        stack: { title: "Технологияҳо", text: "Python, HTML, CSS, JavaScript" },
        experience: { title: "Таҷриба", text: "5+ сол таҷриба" },
        location: { title: "Ҷойгиршавӣ", text: "Душанбе, Тоҷикистон" }
      }
    },
    bots: { title: "Telegram-ботҳои омода", desc: "Лоиҳаҳое, ки кори маро бо логика, тугмаҳо, AI ва сценарияи қулай нишон медиҳанд." },
    websites: { title: "Сайтҳо ва лендингҳо", desc: "Лоиҳаҳои воқеии web: лендингҳо, сайт-визиткаҳо, сайтҳои резюме ва портфолио барои дастгоҳҳои гуногун." },
    contacts: {
      label: "Тамос",
      title: "Бо ман тамос гиред",
      desc: "Агар ба шумо Telegram-бот, сайт, лендинг, сайт-резюме ё автоматизатсия лозим бошад — нависед. Мо идеяро дида, формати беҳтаринро интихоб мекунем."
    },
    data: {
      bots: [
        { title: "UniHelper", type: "TELEGRAM BOT", status: "LIVE", desc: "Бот барои кӯмак дар дохилшавӣ: забонҳо, сценарияҳо, тугмаҳои қулай ва роҳи фаҳмои истифодабаранда.", tags: ["Education", "AI", "Multi-language"], button: "Кушодан", link: "https://t.me/UniHelperByIdris_Bot" },
        { title: "iBot GPT", type: "AI BOT", status: "LIVE", desc: "AI-бот дар Telegram барои ҷавобҳои зуд, суҳбат ва кӯмак ба истифодабарандагон.", tags: ["AI", "ChatGPT-style", "Telegram"], button: "Кушодан", link: "https://t.me/ai_byIdris_bot" },
        { title: "MultiTool", type: "TOOLS BOT", status: "LIVE", desc: "Telegram-боти бисёрфунксионалӣ бо абзорҳои муфид, амалҳои зуд ва менюи қулай.", tags: ["Tools", "Fast", "Automation"], button: "Кушодан", link: "https://t.me/ByIdris_MultiTool_Bot" }
      ],
      websites: [
        { title: "Mark Zuckerberg Meta Universe", type: "CONCEPT", status: "LIVE", desc: "Сайти concept-и кинематикӣ дар бораи Марк Цукерберг ва экосистемаи Meta: Facebook, Instagram, WhatsApp, Threads, Quest ва AI.", tags: ["Meta", "Cinematic", "Concept"], button: "Дидани лоиҳа", link: "https://zuckerberg-production.up.railway.app/" },
        { title: "KFC Tajikistan Landing", type: "LANDING", status: "LIVE", desc: "Лендинг дар услуби бренд барои KFC Tajikistan бо дизайн, адаптатсия ва блокҳои қулай.", tags: ["Landing", "Brand", "Responsive"], button: "Дидани лоиҳа", link: "https://kfctj-production.up.railway.app/" },
        { title: "Personal Portfolio", type: "PORTFOLIO", status: "LIVE", desc: "Сайт-портфолио барои нишон додани малакаҳо, лоиҳаҳо, тамосҳо ва хизматҳои таҳиягар.", tags: ["Portfolio", "Clean", "Animated"], button: "Дидани лоиҳа", link: "https://my-resume-site-production.up.railway.app/" }
      ]
    }
  }
};

const languageScreen = document.getElementById("languageScreen");
const intro = document.getElementById("intro");
const site = document.getElementById("site");
const floatingLang = document.getElementById("floatingLang");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const botsGrid = document.getElementById("botsGrid");
const websitesGrid = document.getElementById("websitesGrid");
const languageButtons = document.querySelectorAll(".language-choice");
let currentLang = "ru";
let timerA = null;
let timerB = null;
let motion = 0;
let touchX = 0;
let touchY = 0;

function getValue(path, obj) {
  return path.split(".").reduce((acc, key) => acc && acc[key], obj);
}

function projectCard(project, index) {
  const delay = index % 3 === 1 ? " delay-1" : index % 3 === 2 ? " delay-2" : "";
  return `
    <article class="project-card reveal${delay}">
      <div class="project-top">
        <span class="project-type">${project.type}</span>
        <span class="status">${project.status}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      <a class="btn ghost" href="${project.link}" target="_blank" rel="noopener">${project.button}</a>
    </article>
  `;
}

function renderProjects() {
  botsGrid.innerHTML = translations[currentLang].data.bots.map(projectCard).join("");
  websitesGrid.innerHTML = translations[currentLang].data.websites.map(projectCard).join("");
  observeReveals();
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "tj" ? "tg" : lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = getValue(el.dataset.i18n, translations[lang]);
    if (value) el.textContent = value;
  });
  renderProjects();
}

function closeNav() {
  navToggle.classList.remove("active");
  navMenu.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

function openSite(lang) {
  clearTimeout(timerA);
  clearTimeout(timerB);
  setLanguage(lang);
  closeNav();
  languageScreen.classList.add("hidden");
  intro.classList.add("play");

  timerA = setTimeout(() => {
    site.classList.add("visible");
    observeReveals();
  }, 1400);

  timerB = setTimeout(() => {
    intro.classList.remove("play");
  }, 2600);
}

function showLanguage() {
  closeNav();
  site.classList.remove("visible");
  languageScreen.classList.remove("hidden");
}

languageButtons.forEach(btn => btn.addEventListener("click", () => openSite(btn.dataset.lang)));
floatingLang.addEventListener("click", showLanguage);

navToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  navToggle.classList.toggle("active", open);
  navToggle.setAttribute("aria-expanded", String(open));
});

document.addEventListener("click", event => {
  const anchor = event.target.closest('a[href^="#"]');
  if (!anchor) return;
  const target = document.querySelector(anchor.getAttribute("href"));
  if (!target) return;
  event.preventDefault();
  const nav = document.querySelector(".navbar");
  const offset = (nav ? nav.offsetHeight : 76) + 16;
  window.scrollTo({
    top: Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset),
    behavior: "smooth"
  });
  closeNav();
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

function observeReveals() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (!el.classList.contains("show")) revealObserver.observe(el);
  });
}

function setVh() {
  document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
}

window.addEventListener("resize", () => {
  setVh();
  if (window.innerWidth > 820) closeNav();
});
window.addEventListener("orientationchange", () => setTimeout(setVh, 250));

window.addEventListener("mousemove", event => {
  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;
  document.documentElement.style.setProperty("--mx", `${x * 18}px`);
  document.documentElement.style.setProperty("--my", `${y * 18}px`);
});

window.addEventListener("touchmove", event => {
  if (!event.touches || !event.touches.length) return;
  touchX = event.touches[0].clientX / window.innerWidth - 0.5;
  touchY = event.touches[0].clientY / window.innerHeight - 0.5;
}, { passive: true });

function mobileMotion() {
  if (window.matchMedia("(hover: none), (pointer: coarse), (max-width: 980px)").matches) {
    motion += 0.009;
    const x = Math.sin(motion) * 18 + touchX * 14;
    const y = Math.cos(motion * 0.78) * 18 + touchY * 14;
    document.documentElement.style.setProperty("--mx", `${x}px`);
    document.documentElement.style.setProperty("--my", `${y}px`);
  }
  requestAnimationFrame(mobileMotion);
}

document.querySelectorAll('a[target="_blank"]').forEach(a => {
  if (!a.rel.includes("noopener")) a.rel += " noopener";
});

setVh();
setLanguage(currentLang);
observeReveals();
mobileMotion();
