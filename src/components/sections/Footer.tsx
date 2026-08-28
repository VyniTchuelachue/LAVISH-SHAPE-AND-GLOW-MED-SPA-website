import logoIcon from "@/assets/images/logo-icon.webp";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink py-10 text-cream/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="flex items-center gap-2.5">
          <img src={logoIcon} alt="Maison Lavish" className="h-8 w-auto opacity-90" />
          <span className="font-display text-sm tracking-[0.1em] text-cream">MAISON LAVISH</span>
        </div>
        <p className="text-xs">
          {site.addressLine} · {site.phoneDisplay}
        </p>
        <p className="text-xs">© {new Date().getFullYear()} MAISON LAVISH. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
