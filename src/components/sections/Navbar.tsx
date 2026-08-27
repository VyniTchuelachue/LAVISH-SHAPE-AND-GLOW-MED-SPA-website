import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import logo from "@/assets/images/logo.webp";
import { site } from "@/data/site";

const links = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#services", label: "Soins" },
  { href: "/#avis", label: "Avis" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-cream/95 shadow-sm shadow-ink/5 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-12">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Lavish Shape & Glow Med Spa" className="h-10 w-auto sm:h-11" />
          <span
            className={`font-display text-sm tracking-wide sm:text-base ${
              scrolled || open ? "text-ink" : "text-cream drop-shadow"
            }`}
          >
            LAVISH SHAPE &amp; GLOW
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition hover:text-gold ${
                scrolled ? "text-ink-soft" : "text-cream/90 drop-shadow"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            className={`flex items-center gap-2 text-sm font-medium ${
              scrolled ? "text-ink-soft" : "text-cream drop-shadow"
            }`}
          >
            <PhoneCall size={15} /> {site.phoneDisplay}
          </a>
          <Link
            to="/reservation"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-gold-light"
          >
            Réserver
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden ${scrolled || open ? "text-ink" : "text-cream"}`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold/10 bg-cream px-6 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-soft"
              >
                {l.label}
              </a>
            ))}
            <a href={site.phoneHref} className="flex items-center gap-2 text-base font-medium text-ink-soft">
              <PhoneCall size={16} /> {site.phoneDisplay}
            </a>
            <Link
              to="/reservation"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gold px-5 py-3 text-center font-medium text-ink"
            >
              Réserver
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
