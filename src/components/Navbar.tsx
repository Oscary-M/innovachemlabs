import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, HERO_CONTENT, WHATSAPP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";

function scrollToSection(id: string, duration = 900) {
  const el = document.getElementById(id);
  if (!el) return;

  const start = window.scrollY;
  const target = el.getBoundingClientRect().top + start;
  const startTime = performance.now();

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + (target - start) * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky w-full z-50 top-0 px-4 py-4">
      <div className="max-w-7xl mx-auto bg-card/70 backdrop-blur-md border border-border/40 shadow-sm rounded-full px-6 py-3 flex justify-between items-center">
        <div className="font-bold text-petrol text-xl tracking-tight">
          Innova<span className="text-petrol font-black">Chem</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase())}
              className="hover:text-petrol transition-colors cursor-pointer bg-transparent border-0 p-0"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="heroOutline" size="sm" className="hidden sm:inline-flex px-6">
              {HERO_CONTENT.cta}
            </Button>
          </a>

          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl bg-card/95 backdrop-blur-md border border-border/40 shadow-lg rounded-3xl px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => {
                scrollToSection(link.toLowerCase());
                setOpen(false);
              }}
              className="text-sm font-medium text-muted-foreground hover:text-petrol transition-colors py-3 border-b border-border/30 last:border-0 text-left bg-transparent border-x-0 border-t-0 cursor-pointer"
            >
              {link}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2"
          >
            <Button variant="hero" size="sm" className="w-full">
              {HERO_CONTENT.cta}
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
