import { Activity, Beaker, ShieldCheck, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const icons: Record<number, LucideIcon> = {
  1: Activity,
  2: Beaker,
  3: ShieldCheck,
  4: FileText,
};

const cardColors = [
  "from-petrol/20 to-petrol/5",
  "from-petrol/15 to-petrol/5",
  "from-petrol/10 to-petrol/5",
  "from-petrol/10 to-petrol/5",
];

export default function BentoServices() {
  return (
    <section id="servicios" className="py-14 px-4 sm:px-6 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-petrol font-bold text-xs sm:text-sm uppercase tracking-widest">Lo que hacemos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-3 md:mb-4 text-foreground">
            Servicios Especializados
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 md:mb-12 max-w-2xl">
            Soluciones integrales de consultoría química para potenciar tus productos.
          </p>
        </motion.div>

        {/* Mobile/tablet: grid simple. Desktop (lg+): bento grid con col/row spans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 lg:auto-rows-[280px]">
          {SERVICES.map((srv, i) => {
            const Icon = icons[srv.id];
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "bg-gradient-to-br rounded-2xl lg:rounded-3xl border border-petrol/10",
                  "p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-between",
                  "hover:shadow-lg hover:shadow-petrol/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer group",
                  cardColors[i],
                  srv.size === "large" && "lg:col-span-2",
                  srv.size === "medium" && "lg:row-span-2",
                )}
              >
                <div>
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-petrol flex items-center justify-center mb-4 lg:mb-6 text-petrol-foreground group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs font-bold text-petrol uppercase mb-2 block tracking-widest">
                    {srv.verb}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3 text-foreground">
                    {srv.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
