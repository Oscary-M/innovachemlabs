import { motion } from "framer-motion";
import { HERO_CONTENT, WHATSAPP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <header className="pt-24 pb-14 px-4 sm:px-6 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-petrol/10 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-petrol/10 blur-3xl -z-10" />
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-petrol/5 blur-2xl -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 mb-5 px-3 py-1.5 sm:px-5 sm:py-2 rounded-full bg-petrol/10 border border-petrol/20 max-w-full"
        >
          <span className="text-petrol font-bold text-xs sm:text-sm tracking-wide sm:tracking-wider uppercase text-center leading-snug">
            🔬 Consultoría Química de Alta Precisión
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-5 md:mb-6 leading-tight text-foreground"
        >
          {HERO_CONTENT.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto"
        >
          {HERO_CONTENT.subheadline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="shadow-2xl shadow-petrol/30 w-full sm:w-auto">
              {HERO_CONTENT.cta}
            </Button>
          </a>
        </motion.div>
      </div>
    </header>
  );
}
