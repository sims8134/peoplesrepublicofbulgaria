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
      welcomeText: "Welcome to the first multilingual website fully dedicated to the history of the People's Republic of Bulgaria.",
      tagline: "Welcome to People's Republic of Bulgaria! This website explores Communist Bulgaria (1944–1990) through history, militaria, collection, urbex, edits, and Cold War vibes.",
      notice: "This website has been created for cultural and historical purposes only.",
      explore: "Explore",
      latestVideo: "▶ Latest Video",
      watchOnYoutube: "▶ Watch on YouTube",
      allVideos: "📺 All Videos",
      noVideo: "No latest video found.",
      instagramTitle: "Instagram",
      instagramText: "Follow us on Instagram for regular photos of the collection, urbex spots and life in Bulgaria.",
      followOnInstagram: "Follow on Instagram",
      cards: {
        history: { title: "History", desc: "Timeline of key events from 1944 to 1990.", btn: "Discover" },
        collection: { title: "Collection", desc: "Objects, medals, uniforms and artefacts.", btn: "Discover" },
        tourism: { title: "Tourism", desc: "Sites to visit in Bulgaria — guided tours available.", btn: "Discover" },
        videos: { title: "Videos", desc: "Urbex, vlogs, edits and presentations.", btn: "Discover" },
      },
    },
    about: {
      title: "About | People's Republic of Bulgaria",
      pageTitle: "About",
      whoTitle: "Who am I?",
      whoText1: "I have been living in Sofia, Bulgaria for a few years now, and I have been passionate about history since I was a child.",
      whoText2: "A big fan of flea markets, I started collecting historical objects at the age of 12.",
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
      description: "Le premier site multilingue dédié à l'histoire de la République populaire de Bulgarie.",
      welcomeTitle: "Bienvenue",
      welcomeText: "Bienvenue sur le premier site multilingue entièrement dédié à l'histoire de la République populaire de Bulgarie.",
      tagline: "Bienvenue sur People's Republic of Bulgaria ! Ce site explore la Bulgarie communiste (1944–1990) à travers l'histoire, la militaria, la collection, l'urbex, le montage video et l'ambiance Guerre froide.",
      notice: "Ce site a été créé à des fins culturelles et historiques uniquement.",
      explore: "Explorer",
      latestVideo: "▶ Dernière vidéo",
      watchOnYoutube: "▶ Voir sur YouTube",
      allVideos: "📺 Toutes les vidéos",
      noVideo: "Aucune vidéo récente trouvée.",
      instagramTitle: "Instagram",
      instagramText: "Suivez-nous sur Instagram pour des photos régulières de la collection, des spots urbex et de la vie en Bulgarie.",
      followOnInstagram: "Suivre sur Instagram",
      cards: {
        history: { title: "Histoire", desc: "Chronologie des événements clés de 1944 à 1990.", btn: "Découvrir" },
        collection: { title: "Collection", desc: "Objets, médailles, uniformes et artefacts.", btn: "Découvrir" },
        tourism: { title: "Tourisme", desc: "Sites à visiter en Bulgarie — visites guidées disponibles.", btn: "Découvrir" },
        videos: { title: "Vidéos", desc: "Urbex, vlogs, montages et présentations.", btn: "Découvrir" },
      },
    },
    about: {
      title: "À propos | People's Republic of Bulgaria",
      pageTitle: "À propos",
      whoTitle: "Qui suis-je ?",
      whoText1: "Je vis à Sofia, en Bulgarie, depuis quelques années et je suis passionné d'histoire depuis l'enfance.",
      whoText2: "Grand amateur de brocantes, j'ai commencé à collectionner des objets historiques à l'âge de 12 ans.",
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
      welcomeText: "Bienvenido al primer sitio multilingüe dedicado por completo a la historia de la República Popular de Bulgaria.",
      tagline: "Bienvenido a People's Republic of Bulgaria! Este sitio explora la Bulgaria comunista (1944–1990) a través de la historia, la militaria, la coleccion, el urbex, el montaje video y el ambiente de la Guerra Fría.",
      notice: "Este sitio ha sido creado con fines culturales e históricos únicamente.",
      explore: "Explorar",
      latestVideo: "▶ Último vídeo",
      watchOnYoutube: "▶ Ver en YouTube",
      allVideos: "📺 Todos los vídeos",
      noVideo: "No se encontró ningún vídeo reciente.",
      instagramTitle: "Instagram",
      instagramText: "Síguenos en Instagram para ver fotos regulares de la colección, lugares de urbex y vida en Bulgaria.",
      followOnInstagram: "Seguir en Instagram",
      cards: {
        history: { title: "Historia", desc: "Cronología de eventos clave de 1944 a 1990.", btn: "Descubrir" },
        collection: { title: "Colección", desc: "Objetos, medallas, uniformes y artefactos.", btn: "Descubrir" },
        tourism: { title: "Turismo", desc: "Lugares para visitar en Bulgaria — visitas guiadas disponibles.", btn: "Descubrir" },
        videos: { title: "Vídeos", desc: "Urbex, vlogs, ediciones y presentaciones.", btn: "Descubrir" },
      },
    },
    about: {
      title: "Sobre mí | People's Republic of Bulgaria",
      pageTitle: "Sobre mí",
      whoTitle: "¿Quién soy?",
      whoText1: "Vivo en Sofía, Bulgaria, desde hace algunos años y me apasiona la historia desde niño.",
      whoText2: "Gran aficionado a los mercadillos, empecé a coleccionar objetos históricos a los 12 años.",
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
      welcomeText: "Добре дошли в първия многоезичен сайт, изцяло посветен на историята на Народна република България.",
      tagline: "Добре дошли в People's Republic of Bulgaria! Този сайт изследва комунистическа България (1944–1990) чрез история, милитария, колекция, урбекс, видео монтаж и атмосферата на Студената война.",
      notice: "Този сайт е създаден единствено за културни и исторически цели.",
      explore: "Разгледайте",
      latestVideo: "▶ Последно видео",
      watchOnYoutube: "▶ Гледай в YouTube",
      allVideos: "📺 Всички видеа",
      noVideo: "Няма намерено последно видео.",
      instagramTitle: "Instagram",
      instagramText: "Следвайте ни в Instagram за редовни снимки на колекцията, места за урбекс и живот в България.",
      followOnInstagram: "Последвайте в Instagram",
      cards: {
        history: { title: "История", desc: "Хронология на ключови събития от 1944 до 1990 г.", btn: "Открийте" },
        collection: { title: "Колекция", desc: "Предмети, медали, униформи и артефакти.", btn: "Открийте" },
        tourism: { title: "Туризъм", desc: "Места за посещение в България — налични екскурзии с водач.", btn: "Открийте" },
        videos: { title: "Видеа", desc: "Урбекс, влогове, монтажи и презентации.", btn: "Открийте" },
      },
    },
    about: {
      title: "За мен | People's Republic of Bulgaria",
      pageTitle: "За мен",
      whoTitle: "Кой съм аз?",
      whoText1: "Живея в София, България, от няколко години и се интересувам от история още от дете.",
      whoText2: "Голям фен на битпазарите, започнах да колекционирам исторически предмети на 12 години.",
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
