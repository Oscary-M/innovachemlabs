import { Activity, Beaker, ShieldCheck, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
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
    <section id="servicios" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-petrol font-bold text-sm uppercase tracking-widest">Lo que hacemos</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4 text-foreground">
            Servicios Especializados
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Soluciones integrales de consultoría química para potenciar tus productos.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {SERVICES.map((srv, i) => {
            const Icon = icons[srv.id];
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-gradient-to-br ${cardColors[i]} rounded-3xl p-8 border border-petrol/10 flex flex-col justify-between hover:shadow-lg hover:shadow-petrol/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer group ${
                  srv.size === "large" ? "md:col-span-2" : ""
                } ${srv.size === "medium" ? "md:row-span-2" : ""}`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-petrol flex items-center justify-center mb-6 text-petrol-foreground group-hover:scale-110 transition-transform">
                    <Icon size={26} />
                  </div>
                  <span className="text-xs font-bold text-petrol uppercase mb-2 block tracking-widest">
                    {srv.verb}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
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
