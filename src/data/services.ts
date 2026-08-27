import antiAging from "@/assets/images/hero-anti-aging.webp";
import clearSkin from "@/assets/images/hero-clear-skin.webp";
import bodyContouring from "@/assets/images/hero-body-contouring.webp";
import laserHair from "@/assets/images/hero-laser-hair-removal.webp";
import massage from "@/assets/images/hero-massage.webp";

export interface Service {
  image: string;
  icon: "sparkles" | "sun" | "flame" | "droplets" | "zap" | "heart-pulse";
  title: string;
  description: string;
  bullets: string[];
}

export const services: Service[] = [
  {
    image: antiAging,
    icon: "sparkles",
    title: "Soins anti-âge",
    description:
      "Fini les rides, même après 50 ans. Nos protocoles relancent la production de collagène pour une peau visiblement plus jeune, plus ferme et plus lumineuse.",
    bullets: ["Réduction des rides & ridules", "Fermeté & tenue du visage", "Résultats visibles dès les premières séances"],
  },
  {
    image: clearSkin,
    icon: "sun",
    title: "Peau nette & uniforme",
    description:
      "Bye bye les taches sur ton visage, même les cicatrices d'acné. On unifie ton teint pour une peau claire, saine et sans complexe.",
    bullets: ["Taches pigmentaires", "Cicatrices d'acné", "Teint unifié & éclatant"],
  },
  {
    image: bodyContouring,
    icon: "flame",
    title: "Sculpting corporel",
    description:
      "Cuisses, bras, ventre... les zones de graisse têtues, on les fait fondre. Tu mérites une peau ferme et uniforme, sans passer par la chirurgie.",
    bullets: ["Réduction des graisses localisées", "Peau raffermie", "Silhouette redessinée"],
  },
  {
    image: laserHair,
    icon: "zap",
    title: "Épilation laser",
    description:
      "Poils partout ? Épilation laser complète, bye bye pour de bon. Une peau lisse et douce, séance après séance, sur toutes les zones du corps.",
    bullets: ["Résultats durables", "Toutes zones, tous phototypes", "Confort & rapidité"],
  },
  {
    image: massage,
    icon: "heart-pulse",
    title: "Massages thérapeutiques",
    description:
      "Douleurs musculaires ou articulaires ? Nos massages relancent ta circulation et détendent tes muscles pour un vrai moment de récupération.",
    bullets: ["Relance de la circulation", "Décontraction musculaire", "Détente profonde"],
  },
  {
    image: clearSkin,
    icon: "droplets",
    title: "Hydra-glow facial",
    description:
      "On te fait glow. Une peau hydratée, rajeunie, qui respire — le soin signature LAVISH pour un teint frais et reposé en toute saison.",
    bullets: ["Hydratation en profondeur", "Effet bonne mine immédiat", "Peau repulpée"],
  },
];
