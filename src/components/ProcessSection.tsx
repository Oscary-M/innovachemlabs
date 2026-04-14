import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessSection() {
  return (
    <section id="proceso" className="py-14 px-4 sm:px-6 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-petrol font-bold text-xs sm:text-sm uppercase tracking-widest">Cómo trabajamos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-3 md:mb-4 text-foreground">
            Nuestro Proceso
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Un enfoque estructurado y transparente para cada proyecto de consultoría.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-petrol to-petrol/80 text-petrol-foreground w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-xl md:text-2xl font-black mb-4 md:mb-6 shadow-lg shadow-petrol/30">
                {step.step}
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-petrol/40 to-transparent" />
              )}
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
