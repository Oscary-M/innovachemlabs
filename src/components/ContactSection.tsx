import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_INFO, WHATSAPP_URL } from "@/lib/constants";
import { useState } from "react";
import { toast } from "sonner";
import { sendContactEmail } from "@/server/contact";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendContactEmail({ data: formData });
      toast.success("¡Mensaje enviado! Nos pondremos en contacto pronto.");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch {
      toast.error("No se pudo enviar el mensaje. Intentá de nuevo o escribinos por WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="py-14 px-4 sm:px-6 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-petrol font-bold text-xs sm:text-sm uppercase tracking-widest">Hablemos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-3 md:mb-4 text-foreground">
            Contáctanos
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            ¿Tenés un proyecto en mente? Escribinos y te responderemos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 border border-border/50 shadow-lg space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label htmlFor="contact-name" className="text-sm font-semibold text-foreground mb-2 block">Nombre</label>
                  <Input
                    id="contact-name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl h-11 md:h-12 bg-surface border-border"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-sm font-semibold text-foreground mb-2 block">Email</label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl h-11 md:h-12 bg-surface border-border"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-company" className="text-sm font-semibold text-foreground mb-2 block">Empresa</label>
                <Input
                  id="contact-company"
                  placeholder="Nombre de tu empresa"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="rounded-xl h-11 md:h-12 bg-surface border-border"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-sm font-semibold text-foreground mb-2 block">Mensaje</label>
                <Textarea
                  id="contact-message"
                  placeholder="Contanos sobre tu proyecto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl min-h-[100px] md:min-h-[120px] bg-surface border-border"
                  required
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={sending}>
                <Send size={18} />
                {sending ? "Enviando..." : "Enviar Mensaje"}
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
            <div className="bg-gradient-to-br from-petrol to-petrol/80 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-petrol-foreground flex flex-col justify-between shadow-xl shadow-petrol/20 gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-8">Información de Contacto</h3>
                <div className="space-y-4 md:space-y-6">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 md:gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-petrol-foreground/20 flex items-center justify-center shrink-0">
                      <Phone size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm opacity-70">Teléfono</p>
                      <p className="font-semibold text-sm sm:text-base truncate">{CONTACT_INFO.phone}</p>
                    </div>
                  </a>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 md:gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-petrol-foreground/20 flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm opacity-70">Email</p>
                      <p className="font-semibold text-sm sm:text-base truncate">{CONTACT_INFO.email}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-petrol-foreground/20 flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm opacity-70">Ubicación</p>
                      <p className="font-semibold text-sm sm:text-base">{CONTACT_INFO.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5 md:pt-8 border-t border-petrol-foreground/20">
                <p className="text-xs sm:text-sm opacity-70 mb-3 md:mb-4">Seguinos en redes</p>
                <div className="flex gap-3">
                  <a
                    href={CONTACT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Seguinos en Instagram"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-petrol-foreground/20 flex items-center justify-center hover:bg-petrol-foreground/30 transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={CONTACT_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Seguinos en LinkedIn"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-petrol-foreground/20 flex items-center justify-center hover:bg-petrol-foreground/30 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contactanos por WhatsApp"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-petrol-foreground/20 flex items-center justify-center hover:bg-petrol-foreground/30 transition-colors"
                  >
                    <svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
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
