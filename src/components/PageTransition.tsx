import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { LogoLoader } from "@/components/LogoLoader";

const LOADER_DURATION = 1100;

function LoaderController() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), LOADER_DURATION);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return <AnimatePresence>{loading && <LogoLoader />}</AnimatePresence>;
}

export function PageTransition() {
  const { pathname } = useLocation();
  return <LoaderController key={pathname} />;
}
