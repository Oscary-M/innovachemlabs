import { NAV_LINKS, HERO_CONTENT } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 px-4 py-4">
      <div className="max-w-7xl mx-auto bg-card/70 backdrop-blur-md border border-border/40 shadow-sm rounded-full px-6 py-3 flex justify-between items-center">
        <div className="font-bold text-petrol text-xl tracking-tight">
          Innova<span className="text-petrol font-black">Chem</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-petrol transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <Button variant="heroOutline" size="sm" className="hidden sm:inline-flex px-6">
          {HERO_CONTENT.cta}
        </Button>
      </div>
    </nav>
  );
}
