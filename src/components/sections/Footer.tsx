import logo from "@/assets/images/logo.webp";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink py-10 text-cream/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="Lavish Shape & Glow" className="h-8 w-auto opacity-90" />
          <span className="font-display text-sm text-cream">LAVISH SHAPE &amp; GLOW MED SPA</span>
        </div>
        <p className="text-xs">
          {site.addressLine} · {site.phoneDisplay}
        </p>
        <p className="text-xs">
          © {new Date().getFullYear()} LAVISH SHAPE &amp; GLOW MED SPA. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
