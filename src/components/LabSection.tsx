import { motion } from "framer-motion";
import lab1 from "@/assets/lab-1.jpg";
import lab2 from "@/assets/lab-2.jpg";
import lab3 from "@/assets/lab-3.jpg";

const images = [
  { src: lab1, alt: "Laboratorio de formulación con equipamiento moderno" },
  { src: lab2, alt: "Instrumentos de precisión y soluciones químicas" },
  { src: lab3, alt: "Estación de investigación con microscopio y reactivos" },
];

export default function LabSection() {
  return (
    <section id="laboratorio" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-petrol font-bold text-sm uppercase tracking-widest">Donde sucede la magia</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4 text-foreground">
            Nuestro Laboratorio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Equipamiento de última generación en un espacio diseñado para la innovación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={768}
                height={512}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-petrol-foreground text-sm font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { value: "500+", label: "Fórmulas desarrolladas" },
            { value: "98%", label: "Tasa de éxito" },
            { value: "15+", label: "Años de experiencia" },
            { value: "200+", label: "Clientes satisfechos" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card border border-border/50"
            >
              <div className="text-3xl md:text-4xl font-black text-petrol mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
