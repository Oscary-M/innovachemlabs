import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_INFO, WHATSAPP_URL } from "@/lib/constants";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Nos pondremos en contacto pronto.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-petrol font-bold text-sm uppercase tracking-widest">Hablemos</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4 text-foreground">
            Contáctanos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ¿Tenés un proyecto en mente? Escribinos y te responderemos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Nombre</label>
                  <Input
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl h-12 bg-surface border-border"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl h-12 bg-surface border-border"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Empresa</label>
                <Input
                  placeholder="Nombre de tu empresa"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="rounded-xl h-12 bg-surface border-border"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Mensaje</label>
                <Textarea
                  placeholder="Contanos sobre tu proyecto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl min-h-[120px] bg-surface border-border"
                  required
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send size={18} />
                Enviar Mensaje
              </Button>
            </form>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-petrol to-petrol/80 rounded-3xl p-8 text-petrol-foreground h-full flex flex-col justify-between shadow-xl shadow-petrol/20">
              <div>
                <h3 className="text-2xl font-bold mb-8">Información de Contacto</h3>
                <div className="space-y-6">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 rounded-xl bg-petrol-foreground/20 flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm opacity-70">Teléfono</p>
                      <p className="font-semibold">{CONTACT_INFO.phone}</p>
                    </div>
                  </a>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 rounded-xl bg-petrol-foreground/20 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm opacity-70">Email</p>
                      <p className="font-semibold">{CONTACT_INFO.email}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-petrol-foreground/20 flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm opacity-70">Ubicación</p>
                      <p className="font-semibold">{CONTACT_INFO.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-petrol-foreground/20">
                <p className="text-sm opacity-70 mb-4">Seguinos en redes</p>
                <div className="flex gap-4">
                  <a href="https://instagram.com/innovachem" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-petrol-foreground/20 flex items-center justify-center hover:bg-petrol-foreground/30 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://linkedin.com/company/innovachem" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-petrol-foreground/20 flex items-center justify-center hover:bg-petrol-foreground/30 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
