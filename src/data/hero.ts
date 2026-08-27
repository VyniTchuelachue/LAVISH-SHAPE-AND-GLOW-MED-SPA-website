import building from "@/assets/images/lavish-building.webp";
import antiAging from "@/assets/images/hero-anti-aging.webp";
import clearSkin from "@/assets/images/hero-clear-skin.webp";
import bodyContouring from "@/assets/images/hero-body-contouring.webp";
import laserHair from "@/assets/images/hero-laser-hair-removal.webp";
import massage from "@/assets/images/hero-massage.webp";

export interface HeroSlide {
  image: string;
  eyebrow: string;
  title: string;
  focal?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    image: building,
    eyebrow: "Bienvenue chez LAVISH",
    title: "On te fait glow. Une peau hydratée, rajeunie, qui respire.",
  },
  {
    image: antiAging,
    eyebrow: "Anti-âge & fermeté",
    title: "Fini les rides — même après 50 ans.",
  },
  {
    image: clearSkin,
    eyebrow: "Peau nette & uniforme",
    title: "Bye bye les taches sur ton visage, même les cicatrices d'acné.",
  },
  {
    image: bodyContouring,
    eyebrow: "Silhouette sculptée",
    title:
      "Cuisses, bras, ventre... les zones de graisse têtues, on les fait fondre. Tu mérites une peau ferme et uniforme.",
  },
  {
    image: laserHair,
    eyebrow: "Épilation laser",
    title: "Poils partout ? Épilation laser complète, bye bye pour de bon.",
  },
  {
    image: massage,
    eyebrow: "Détente & bien-être",
    title:
      "Douleurs musculaires ou articulaires ? Nos massages relancent ta circulation et détendent tes muscles.",
  },
];
