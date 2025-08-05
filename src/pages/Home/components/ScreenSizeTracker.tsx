import { useEffect } from "react";
import { screenStore } from "../store";

export function ScreenSizeTracker() {
  const setIsMobile = screenStore((s) => s.setIsMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1150);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);

  return null;
}
