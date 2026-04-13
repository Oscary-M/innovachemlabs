import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <header className="pt-40 pb-24 px-6 relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-petrol/5 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-petrol/5 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-foreground"
        >
          {HERO_CONTENT.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          {HERO_CONTENT.subheadline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <Button variant="hero" size="lg">
            {HERO_CONTENT.cta}
          </Button>
        </motion.div>
      </div>
    </header>
  );
}
