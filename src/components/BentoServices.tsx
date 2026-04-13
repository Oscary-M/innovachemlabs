import { Activity, Beaker, ShieldCheck, Zap } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const icons: Record<number, LucideIcon> = {
  1: Activity,
  2: Beaker,
  3: ShieldCheck,
  4: Zap,
};

export default function BentoServices() {
  return (
    <section id="servicios" className="py-20 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 italic text-foreground">
          <span className="underline decoration-petrol decoration-4 underline-offset-8">
            Servicios Especializados
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {SERVICES.map((srv) => {
            const Icon = icons[srv.id];
            return (
              <div
                key={srv.id}
                className={`bg-card rounded-3xl p-8 shadow-sm border border-border/50 flex flex-col justify-between hover:shadow-md transition-shadow ${
                  srv.size === "large" ? "md:col-span-2" : ""
                } ${srv.size === "medium" ? "md:row-span-2" : ""}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-petrol/10 flex items-center justify-center mb-6 text-petrol">
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-bold text-petrol uppercase mb-2 block tracking-wider">
                    {srv.verb}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {srv.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
