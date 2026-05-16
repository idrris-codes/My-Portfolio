(() => {
  "use strict";

  const translations = {
    ru: {
      nav:{about:"Обо мне",bots:"Боты",websites:"Сайты",contacts:"Контакты"},
      hero:{label:"Telegram-боты • AI • Сайты",title:"Сайты и Telegram-боты для бизнеса, которые выглядят уверенно и работают понятно",text:"Я разрабатываю Telegram-ботов, AI-ассистентов, лендинги и сайты-портфолио для бизнеса, экспертов и личных брендов. Продумываю структуру, тексты, визуал, адаптацию под телефон и понятный путь пользователя, чтобы проект выглядел профессионально и помогал получать обращения.",projects:"Смотреть проекты",contact:"Связаться"},
      about:{label:"Обо мне",title:"Разработка, которая превращает идею в понятный цифровой продукт",text:"Я собираю проект как полноценный инструмент для презентации и продаж: сильный первый экран, понятные блоки, аккуратные кнопки, логичная структура, мягкие анимации и удобная мобильная версия. Важно, чтобы посетитель сразу понял, что вы предлагаете, почему вам можно доверять и как с вами связаться.",c1t:"Telegram-боты",c1p:"Разработка Telegram-ботов с меню, кнопками, заявками, языками, AI-функциями и автоматизацией процессов.",c2t:"Сайты",c2p:"Создание лендингов, портфолио, сайтов-визиток, страниц услуг и презентационных сайтов для проектов.",c3t:"Визуал",c3p:"Современный визуальный стиль, мягкие анимации, читаемые тексты, правильные отступы и адаптация под разные экраны.",c4t:"Запуск",c4p:"Подготовка проекта к запуску через GitHub и Railway, понятная структура файлов и готовность к подключению домена."},
      bots:{title:"Telegram-боты",text:"Ниже — примеры Telegram-ботов, где показаны разные сценарии: AI-помощник, полезные инструменты, меню, языки, кнопки и понятная логика взаимодействия с пользователем."},
      web:{title:"Сайты и лендинги",text:"Примеры веб-проектов с адаптацией под телефоны, ноутбуки и компьютеры. В них показаны структура, визуальный стиль, анимации, презентация проекта и готовность к размещению на хостинге."},
      contact:{label:"Контакты",title:"Обсудим ваш проект?",text:"Напишите мне в Instagram или Telegram и коротко расскажите, что вам нужно: бот, сайт, лендинг, портфолио или автоматизация. Я помогу сформулировать идею, подобрать правильный формат и объясню, как можно запустить проект."},
      footer:"Разработчик: Idris — ",
      data:{
        bots:[
          {title:"UniHelper",type:"BOT",status:"LIVE",desc:"Telegram-бот для студентов и поступающих: выбор языка, понятное меню, инструкции, AI-помощник и удобный сценарий для пользователя.",tags:["Education","AI","Telegram"],button:"Открыть проект",link:"https://t.me/UniHelperByIdris_Bot"},
          {title:"iBot GPT",type:"BOT",status:"LIVE",desc:"AI-бот в Telegram для быстрых ответов и консультаций. Пользователь пишет вопрос и получает ответ прямо внутри мессенджера без сложного интерфейса.",tags:["AI Chat","GPT","Assistant"],button:"Открыть проект",link:"https://t.me/ai_byIdris_bot"},
          {title:"MultiTool",type:"BOT",status:"LIVE",desc:"Многофункциональный Telegram-бот с полезными инструментами, быстрыми действиями и простой структурой меню для ежедневного использования.",tags:["Tools","Menu","Automation"],button:"Открыть проект",link:"https://t.me/ByIdris_MultiTool_Bot"}
        ],
        web:[
          {title:"KFC Tajikistan Landing",type:"LANDING",status:"LIVE",desc:"Современный лендинг для KFC Tajikistan с презентацией бренда, меню, доставкой, контактами, адаптацией под телефон и удобным пользовательским сценарием.",tags:["Landing","Responsive","Railway"],button:"Смотреть проект",link:"https://kfctj-production.up.railway.app/"},
          {title:"Mark Zuckerberg Meta Universe",type:"CONCEPT",status:"LIVE",desc:"Кинематичный concept-сайт о Марке Цукерберге и экосистеме Meta. Проект показывает премиальный визуал, сильный первый экран, проекты Meta и адаптацию под устройства.",tags:["Meta","Cinematic","Concept"],button:"Смотреть проект",link:"https://zuckerberg-production.up.railway.app/"},
          {title:"Elon Musk Portfolio",type:"PORTFOLIO",status:"LIVE",desc:"Рабочий сайт-портфолио Илона Маска с современной презентацией личности, компаний, проектов и достижений в премиальном визуальном стиле.",tags:["Portfolio","Elon Musk","Premium"],button:"Смотреть проект",link:"https://visitepage-production.up.railway.app/"}
        ]
      }
    },
    en: {
      nav:{about:"About",bots:"Bots",websites:"Websites",contacts:"Contacts"},
      hero:{label:"Telegram bots • AI • Websites",title:"Websites and Telegram bots for business that look confident and work clearly",text:"I build Telegram bots, AI assistants, landing pages and portfolio websites for businesses, experts and personal brands. I think through structure, copy, visuals, mobile adaptation and the user journey so the project looks professional and helps generate inquiries.",projects:"View projects",contact:"Contact me"},
      about:{label:"About me",title:"Development that turns an idea into a clear digital product",text:"I build every project as a complete presentation and sales tool: a strong first screen, clear sections, accurate buttons, logical structure, soft animations and a convenient mobile version. The visitor should immediately understand what you offer, why they can trust you and how to contact you.",c1t:"Telegram bots",c1p:"Telegram bots with menus, buttons, requests, languages, AI features and process automation.",c2t:"Websites",c2p:"Landing pages, portfolios, service pages, business-card websites and presentation websites for projects.",c3t:"Visual style",c3p:"Modern visual style, soft animations, readable text, correct spacing and adaptation for different screens.",c4t:"Launch",c4p:"Project preparation for GitHub and Railway deployment, clean file structure and readiness for custom domain connection."},
      bots:{title:"Telegram bots",text:"Examples of Telegram bots with different scenarios: AI assistant, useful tools, menus, languages, buttons and clear user interaction logic."},
      web:{title:"Websites and landing pages",text:"Web projects adapted for phones, laptops and desktop screens. They demonstrate structure, visual style, animation, project presentation and hosting readiness."},
      contact:{label:"Contacts",title:"Shall we discuss your project?",text:"Message me on Instagram or Telegram and briefly describe what you need: a bot, website, landing page, portfolio or automation. I will help shape the idea, choose the right format and explain how the project can be launched."},
      footer:"Developer: Idris — ",
      data:{
        bots:[
          {title:"UniHelper",type:"BOT",status:"LIVE",desc:"A Telegram bot for students and applicants: language selection, clear menu, instructions, AI helper and a convenient user scenario.",tags:["Education","AI","Telegram"],button:"Open project",link:"https://t.me/UniHelperByIdris_Bot"},
          {title:"iBot GPT",type:"BOT",status:"LIVE",desc:"An AI bot in Telegram for quick answers and consultations. The user writes a question and receives an answer directly inside the messenger.",tags:["AI Chat","GPT","Assistant"],button:"Open project",link:"https://t.me/ai_byIdris_bot"},
          {title:"MultiTool",type:"BOT",status:"LIVE",desc:"A multifunctional Telegram bot with useful tools, quick actions and a simple menu structure for everyday use.",tags:["Tools","Menu","Automation"],button:"Open project",link:"https://t.me/ByIdris_MultiTool_Bot"}
        ],
        web:[
          {title:"KFC Tajikistan Landing",type:"LANDING",status:"LIVE",desc:"A modern landing page for KFC Tajikistan with brand presentation, menu, delivery, contacts, phone adaptation and a convenient user scenario.",tags:["Landing","Responsive","Railway"],button:"View project",link:"https://kfctj-production.up.railway.app/"},
          {title:"Mark Zuckerberg Meta Universe",type:"CONCEPT",status:"LIVE",desc:"A cinematic concept website about Mark Zuckerberg and the Meta ecosystem. The project shows premium visuals, a strong first screen, Meta projects and device adaptation.",tags:["Meta","Cinematic","Concept"],button:"View project",link:"https://zuckerberg-production.up.railway.app/"},
          {title:"Elon Musk Portfolio",type:"PORTFOLIO",status:"LIVE",desc:"A working Elon Musk portfolio website with a modern presentation of personality, companies, projects and achievements in a premium visual style.",tags:["Portfolio","Elon Musk","Premium"],button:"View project",link:"https://visitepage-production.up.railway.app/"}
        ]
      }
    },
    tj: {
      nav:{about:"Дар бораи ман",bots:"Ботҳо",websites:"Сайтҳо",contacts:"Тамос"},
      hero:{label:"Telegram-ботҳо • AI • Сайтҳо",title:"Сайтҳо ва Telegram-ботҳо барои бизнес, ки боэътимод менамоянд ва фаҳмо кор мекунанд",text:"Ман Telegram-ботҳо, AI-ассистентҳо, лендингҳо ва сайт-портфолиоҳоро барои бизнес, мутахассисон ва бренди шахсӣ месозам. Структура, матнҳо, визуал, адаптатсияи телефон ва роҳи истифодабарандаро фикр карда месозам, то лоиҳа касбӣ намояд ва барои гирифтани муроҷиат кӯмак кунад.",projects:"Дидани лоиҳаҳо",contact:"Тамос гирифтан"},
      about:{label:"Дар бораи ман",title:"Таҳияе, ки идеяро ба маҳсулоти рақамии фаҳмо табдил медиҳад",text:"Ман ҳар лоиҳаро ҳамчун воситаи муаррифӣ ва фурӯш месозам: экрани аввал қавӣ, блокҳои фаҳмо, тугмаҳои қулай, структураи мантиқӣ, анимацияҳои нарм ва версияи хуби мобилӣ. Ҳадаф — меҳмон зуд фаҳмад, ки шумо чӣ пешниҳод мекунед ва чӣ тавр бо шумо тамос гирад.",c1t:"Telegram-ботҳо",c1p:"Telegram-ботҳо бо меню, тугмаҳо, дархостҳо, забонҳо, AI-функсияҳо ва автоматизатсияи равандҳо.",c2t:"Сайтҳо",c2p:"Лендингҳо, портфолио, сайт-визиткаҳо, саҳифаҳои хизматрасонӣ ва сайтҳои муаррифавӣ барои лоиҳаҳо.",c3t:"Визуал",c3p:"Услуби муосир, анимацияҳои нарм, матнҳои хонданӣ, фосилаҳои дуруст ва адаптатсия барои экранҳои гуногун.",c4t:"Запуск",c4p:"Омодасозии лоиҳа барои GitHub ва Railway, структураи тозаи файлҳо ва омодагӣ барои пайваст кардани домен."},
      bots:{title:"Telegram-ботҳо",text:"Намунаҳои Telegram-ботҳо бо сценарияҳои гуногун: AI-ёрдамчӣ, асбобҳои муфид, меню, забонҳо, тугмаҳо ва логикаи фаҳмои истифодабаранда."},
      web:{title:"Сайтҳо ва лендингҳо",text:"Лоиҳаҳои веб барои телефон, ноутбук ва компютер адаптатсия шудаанд. Онҳо структура, визуал, анимация, муаррифии лоиҳа ва омодагӣ барои хостингро нишон медиҳанд."},
      contact:{label:"Тамос",title:"Лоиҳаи шуморо муҳокима кунем?",text:"Ба ман дар Instagram ё Telegram нависед ва кӯтоҳ фаҳмонед, ки ба шумо чӣ лозим аст: бот, сайт, лендинг, портфолио ё автоматизатсия. Ман кӯмак мекунам идеяро дуруст тартиб диҳем ва формати беҳтаринро интихоб кунем."},
      footer:"Таҳиягар: Idris — ",
      data:{
        bots:[
          {title:"UniHelper",type:"BOT",status:"LIVE",desc:"Telegram-бот барои донишҷӯён ва довталабон: интихоби забон, менюи фаҳмо, дастурҳо, AI-ёрдамчӣ ва сценарияи қулай.",tags:["Education","AI","Telegram"],button:"Кушодани лоиҳа",link:"https://t.me/UniHelperByIdris_Bot"},
          {title:"iBot GPT",type:"BOT",status:"LIVE",desc:"AI-бот дар Telegram барои ҷавобҳои зуд ва машваратҳо. Истифодабаранда савол менависад ва ҷавобро мустақим дар мессенҷер мегирад.",tags:["AI Chat","GPT","Assistant"],button:"Кушодани лоиҳа",link:"https://t.me/ai_byIdris_bot"},
          {title:"MultiTool",type:"BOT",status:"LIVE",desc:"Telegram-боти бисёрфунксионалӣ бо асбобҳои муфид, амалҳои зуд ва менюи содда барои истифодаи ҳаррӯза.",tags:["Tools","Menu","Automation"],button:"Кушодани лоиҳа",link:"https://t.me/ByIdris_MultiTool_Bot"}
        ],
        web:[
          {title:"KFC Tajikistan Landing",type:"LANDING",status:"LIVE",desc:"Лендинги муосир барои KFC Tajikistan бо муаррифии бренд, меню, доставка, тамосҳо, адаптатсияи телефон ва сценарияи қулай.",tags:["Landing","Responsive","Railway"],button:"Дидани лоиҳа",link:"https://kfctj-production.up.railway.app/"},
          {title:"Mark Zuckerberg Meta Universe",type:"CONCEPT",status:"LIVE",desc:"Сайти concept-и кинематикӣ дар бораи Марк Цукерберг ва экосистемаи Meta. Лоиҳа визуали премиум, экрани аввал қавӣ, проектҳои Meta ва адаптатсияро нишон медиҳад.",tags:["Meta","Cinematic","Concept"],button:"Дидани лоиҳа",link:"https://zuckerberg-production.up.railway.app/"},
          {title:"Elon Musk Portfolio",type:"PORTFOLIO",status:"LIVE",desc:"Сайти портфолиои кории Илон Маск бо муаррифии муосири шахсият, ширкатҳо, лоиҳаҳо ва дастовардҳо дар услуби премиум.",tags:["Portfolio","Elon Musk","Premium"],button:"Дидани лоиҳа",link:"https://visitepage-production.up.railway.app/"}
        ]
      }
    }
  };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));

  const gate = $("#languageGate");
  const intro = $("#intro");
  const site = $("#site");
  const menuBtn = $("#menuBtn");
  const menu = $("#menu");
  const themeToggle = $("#themeToggle");
  const botsGrid = $("#botsGrid");
  const webGrid = $("#webGrid");

  let currentLang = "ru";
  let motion = 0;
  let introTimer = 0;

  function getValue(path, object){
    return path.split(".").reduce((value, key) => value && value[key], object);
  }

  function closeMenu(){
    menu.classList.remove("open");
    menuBtn.classList.remove("active");
    menuBtn.setAttribute("aria-expanded","false");
  }

  function projectCard(item, index){
    const delay = index === 1 ? " delay-1" : index === 2 ? " delay-2" : "";
    return `
      <article class="project-card reveal${delay}">
        <div class="project-top">
          <span class="project-type">${item.type}</span>
          <span class="status">${item.status}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="tags">${item.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
        <a class="btn secondary" href="${item.link}" target="_blank" rel="noopener">${item.button}</a>
      </article>
    `;
  }

  function renderProjects(){
    botsGrid.innerHTML = translations[currentLang].data.bots.map(projectCard).join("");
    webGrid.innerHTML = translations[currentLang].data.web.map(projectCard).join("");
    observe();
  }

  function setLanguage(lang){
    currentLang = translations[lang] ? lang : "ru";
    document.documentElement.lang = currentLang === "tj" ? "tg" : currentLang;

    $$("[data-i18n]").forEach(element => {
      const value = getValue(element.dataset.i18n, translations[currentLang]);
      if(value) element.textContent = value;
    });

    $$("[data-lang]").forEach(button => {
      button.classList.toggle("active", button.dataset.lang === currentLang);
    });

    renderProjects();
  }

  function openSite(lang){
    clearTimeout(introTimer);
    setLanguage(lang);
    closeMenu();

    gate.classList.add("hidden");
    site.classList.add("visible");
    intro.classList.add("play");

    window.scrollTo({ top: 0, behavior: "auto" });
    observe();

    introTimer = setTimeout(() => {
      intro.classList.remove("play");
    }, 1350);
  }

  window.openSite = openSite;

  function applyTheme(theme){
    const mode = theme === "light" ? "light" : "dark";
    document.body.classList.toggle("light-theme", mode === "light");
    themeToggle.textContent = mode === "light" ? "🌙" : "☀️";
    try{ localStorage.setItem("idris-theme", mode); }catch(error){}
  }

  function initTheme(){
    let saved = "dark";
    try{ saved = localStorage.getItem("idris-theme") || "dark"; }catch(error){}
    applyTheme(saved);
  }


  $$("[data-lang]").forEach(button => {
    const lang = button.dataset.lang;

    button.addEventListener("click", () => {
      if(gate && !gate.classList.contains("hidden")) openSite(lang);
      else setLanguage(lang);
    });

    button.addEventListener("touchend", event => {
      event.preventDefault();
      if(gate && !gate.classList.contains("hidden")) openSite(lang);
      else setLanguage(lang);
    }, { passive:false });
  });

  menuBtn.addEventListener("click", () => {
    const opened = menu.classList.toggle("open");
    menuBtn.classList.toggle("active", opened);
    menuBtn.setAttribute("aria-expanded", String(opened));
  });

  themeToggle.addEventListener("click", () => {
    applyTheme(document.body.classList.contains("light-theme") ? "dark" : "light");
  });

  document.addEventListener("click", event => {
    const anchor = event.target.closest('a[href^="#"]');
    if(!anchor) return;

    const target = $(anchor.getAttribute("href"));
    if(!target) return;

    event.preventDefault();
    const nav = $(".nav");
    const offset = (nav ? nav.offsetHeight : 80) + 16;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior:"smooth" });
    closeMenu();
  });

  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold:.12, rootMargin:"0px 0px -40px 0px" })
    : null;

  function observe(){
    $$(".reveal").forEach(element => {
      if(element.classList.contains("show")) return;
      if(revealObserver) revealObserver.observe(element);
      else element.classList.add("show");
    });
  }

  window.addEventListener("resize", () => {
    if(window.innerWidth > 860) closeMenu();
  });

  window.addEventListener("orientationchange", () => {
  });

  window.addEventListener("mousemove", event => {
    const x = event.clientX / window.innerWidth - .5;
    const y = event.clientY / window.innerHeight - .5;
    document.documentElement.style.setProperty("--mx", (x * 18) + "px");
    document.documentElement.style.setProperty("--my", (y * 18) + "px");
  });

  function gentleMotion(){
    motion += .008;
    if(window.matchMedia("(hover: none), (pointer: coarse), (max-width: 980px)").matches){
      document.documentElement.style.setProperty("--mx", Math.sin(motion) * 16 + "px");
      document.documentElement.style.setProperty("--my", Math.cos(motion * .8) * 16 + "px");
    }
    requestAnimationFrame(gentleMotion);
  }

  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    const rel = link.getAttribute("rel") || "";
    if(!rel.includes("noopener")) link.setAttribute("rel", (rel + " noopener").trim());
  });

  initTheme();
  setLanguage(currentLang);
  observe();
  gentleMotion();
})();