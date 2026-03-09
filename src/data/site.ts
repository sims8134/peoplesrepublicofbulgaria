export const supportedLangs = ["en", "fr", "es", "bg"] as const;
export type Lang = typeof supportedLangs[number];

export const siteContent = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      history: "History",
      collection: "Collection",
      tourism: "Tourism",
      videos: "Videos",
      contact: "Contact",
      legal: "Legal Notice",
    },
    footer: {
      copyright: "© 2024 People's Republic of Bulgaria — All rights reserved",
    },
    home: {
      title: "People's Republic of Bulgaria",
      description: "The first multilingual website dedicated to the history of the People's Republic of Bulgaria.",
      welcomeTitle: "Welcome",
      welcomeText:
        "Welcome to the first multilingual website fully dedicated to the history of the People's Republic of Bulgaria.",
    },
    about: {
      title: "About | People's Republic of Bulgaria",
      pageTitle: "About",
      whoTitle: "Who am I?",
      whoText1:
        "I have been living in Sofia, Bulgaria for a few years now, and I have been passionate about history since I was a child.",
      whoText2:
        "A big fan of flea markets, I started collecting historical objects at the age of 12.",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      history: "Histoire",
      collection: "Collection",
      tourism: "Tourisme",
      videos: "Vidéos",
      contact: "Contact",
      legal: "Mentions légales",
    },
    footer: {
      copyright: "© 2024 People's Republic of Bulgaria — Tous droits réservés",
    },
    home: {
      title: "People's Republic of Bulgaria",
      description: "Le premier site multilingue dédié à l’histoire de la République populaire de Bulgarie.",
      welcomeTitle: "Bienvenue",
      welcomeText:
        "Bienvenue sur le premier site multilingue entièrement dédié à l’histoire de la République populaire de Bulgarie.",
    },
    about: {
      title: "À propos | People's Republic of Bulgaria",
      pageTitle: "À propos",
      whoTitle: "Qui suis-je ?",
      whoText1:
        "Je vis à Sofia, en Bulgarie, depuis quelques années et je suis passionné d’histoire depuis l’enfance.",
      whoText2:
        "Grand amateur de brocantes, j’ai commencé à collectionner des objets historiques à l’âge de 12 ans.",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      history: "Historia",
      collection: "Colección",
      tourism: "Turismo",
      videos: "Vídeos",
      contact: "Contacto",
      legal: "Aviso legal",
    },
    footer: {
      copyright: "© 2024 People's Republic of Bulgaria — Todos los derechos reservados",
    },
    home: {
      title: "People's Republic of Bulgaria",
      description: "El primer sitio multilingüe dedicado a la historia de la República Popular de Bulgaria.",
      welcomeTitle: "Bienvenido",
      welcomeText:
        "Bienvenido al primer sitio multilingüe dedicado por completo a la historia de la República Popular de Bulgaria.",
    },
    about: {
      title: "Sobre mí | People's Republic of Bulgaria",
      pageTitle: "Sobre mí",
      whoTitle: "¿Quién soy?",
      whoText1:
        "Vivo en Sofía, Bulgaria, desde hace algunos años y me apasiona la historia desde niño.",
      whoText2:
        "Gran aficionado a los mercadillos, empecé a coleccionar objetos históricos a los 12 años.",
    },
  },

  bg: {
    nav: {
      home: "Начало",
      about: "За мен",
      history: "История",
      collection: "Колекция",
      tourism: "Туризъм",
      videos: "Видеа",
      contact: "Контакт",
      legal: "Правна информация",
    },
    footer: {
      copyright: "© 2024 People's Republic of Bulgaria — Всички права запазени",
    },
    home: {
      title: "People's Republic of Bulgaria",
      description: "Първият многоезичен сайт, посветен на историята на Народна република България.",
      welcomeTitle: "Добре дошли",
      welcomeText:
        "Добре дошли в първия многоезичен сайт, изцяло посветен на историята на Народна република България.",
    },
    about: {
      title: "За мен | People's Republic of Bulgaria",
      pageTitle: "За мен",
      whoTitle: "Кой съм аз?",
      whoText1:
        "Живея в София, България, от няколко години и се интересувам от история още от дете.",
      whoText2:
        "Голям фен на битпазарите, започнах да колекционирам исторически предмети на 12 години.",
    },
  },
} as const;

export function getLangFromParams(paramsLang?: string): Lang {
  return supportedLangs.includes(paramsLang as Lang) ? (paramsLang as Lang) : "en";
}

export function buildNav(lang: Lang, t: typeof siteContent[Lang]) {
  return [
    { key: "home", href: `/${lang}`, label: t.nav.home },
    { key: "about", href: `/${lang}/about`, label: t.nav.about },
    { key: "history", href: `/${lang}/history`, label: t.nav.history },
    { key: "collection", href: `/${lang}/collection`, label: t.nav.collection },
    { key: "tourism", href: `/${lang}/tourism`, label: t.nav.tourism },
    { key: "videos", href: `/${lang}/videos`, label: t.nav.videos },
  ];
}

export function buildFooter(lang: Lang, t: typeof siteContent[Lang]) {
  return {
    copyright: t.footer.copyright,
    links: [
      { href: `/${lang}/contact`, label: t.nav.contact },
      { href: `/${lang}/about`, label: t.nav.about },
      { href: `/${lang}/legal`, label: t.nav.legal },
    ],
  };
}