export interface Review {
  name: string;
  role: string;
  text: string;
  initials: string;
}

/**
 * Authentic reviews pulled from the LAVISH SHAPE & GLOW MED SPA Google Maps
 * listing (public, non-authenticated view). Google truncates some preview
 * text for visitors who aren't signed in, which is why a few entries end in
 * "…". Two entries were auto-translated to French by Google (noted in role).
 * Source: https://maps.app.goo.gl/V4t6DYhfcP7UxigW6
 */
export const googleRating = 4.7;
export const googleReviewCount = 31;
export const googleReviewsUrl = "https://maps.app.goo.gl/V4t6DYhfcP7UxigW6";

export const reviews: Review[] = [
  {
    name: "Lynn Mbock",
    role: "Cliente depuis l'ouverture",
    text: "Cliente fidèle depuis l'ouverture, je suis pleinement satisfaite du professionnalisme et de la qualité de service de cet institut. Les résultats de mes séances d'épilation au laser m'ont véritablement impressionnée…",
    initials: "LM",
  },
  {
    name: "Diamant Virginia",
    role: "Épilation laser",
    text: "Je suis ravie de mon expérience d'épilation au laser dans cet institut. L'équipe a été très professionnelle et attentionnée tout au long du processus. Les résultats sont incroyables, ma peau est plus lisse que jamais…",
    initials: "DV",
  },
  {
    name: "Rym Labidi",
    role: "Local Guide · 13 avis",
    text: "Très bel endroit pour prendre soin de soi, accueil chaleureux, institut propre, et service de qualité, je recommande vivement.",
    initials: "RL",
  },
  {
    name: "Myriam Mangoua",
    role: "Peeling",
    text: "J'ai fait ma deuxième séance de peeling ce jour, en plus d'autres prestations. La propriétaire du centre est très professionnelle et d'une grande douceur. Étant très sensible à la douleur, elle me rassure, elle est bienveillante…",
    initials: "MM",
  },
  {
    name: "Erika Wilson",
    role: "Massage",
    text: "Très belle première expérience de massage ! C'était relaxant, paisible et pas du tout douloureux. Je recommande 😊",
    initials: "EW",
  },
  {
    name: "Fadimatou Inna",
    role: "Hydrafacial · Microneedling",
    text: "Cadre agréable, personnel courtois et la proprio perfectissime !!! Pour y avoir fait plusieurs prestations : hydrafacial, microneedling et blanchissement dentaire, j'en reste satisfaite et vous recommande à 1000%.",
    initials: "FI",
  },
  {
    name: "Erika Ngah",
    role: "Cliente Maison Lavish",
    text: "Superbe prestation. Cadre chaleureux. Accueil super agréable ❤️❤️❤️ Service de qualité supérieure !!",
    initials: "EN",
  },
  {
    name: "Serena Tchokomeny",
    role: "Cliente Maison Lavish",
    text: "Un institut professionnel de qualité. Le personnel est très accueillant et à l'écoute.",
    initials: "ST",
  },
  {
    name: "Fanny Jocelyne Fukeu",
    role: "Cliente Maison Lavish",
    text: "Accueil chaleureux, cadre agréable, prise en main professionnelle des soins.",
    initials: "FF",
  },
  {
    name: "Obito Mandara",
    role: "Cliente Maison Lavish",
    text: "L'expérience était juste incroyable, un personnel qualifié, attentif, respectueux, que demander de plus !",
    initials: "OM",
  },
  {
    name: "Jessica Ondoua",
    role: "Cliente Maison Lavish",
    text: "Rapide et efficace, cadre propre et accueillant 👍🏽",
    initials: "JO",
  },
  {
    name: "Pascale Theze",
    role: "Cliente Maison Lavish",
    text: "MED SPA à la pointe de la technologie et très professionnel. Je recommande.",
    initials: "PT",
  },
  {
    name: "Samiyani Grace",
    role: "Épilation laser · avis traduit",
    text: "Spa très agréable, propre et professionnel. Je le recommande vivement, notamment pour les traitements laser. La propriétaire est très accueillante et on s'y sent comme à la maison. 👌🏼👌🏼",
    initials: "SG",
  },
  {
    name: "San",
    role: "Cliente · avis traduit",
    text: "J'ai été extrêmement impressionnée et satisfaite ! Le service est impeccable. Tout est parfait et l'accueil est vraiment chaleureux. C'est devenu mon adresse préférée ! 😁😁😁",
    initials: "SN",
  },
  {
    name: "Tarek Mohd",
    role: "Local Guide · 15 avis · avis traduit",
    text: "Spa exceptionnel ! J'ai été agréablement surpris par la qualité des services et l'accueil chaleureux. C'est le meilleur spa de la région, avec un raffinement remarquable.",
    initials: "TM",
  },
];
