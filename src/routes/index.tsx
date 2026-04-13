import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoServices from "@/components/BentoServices";
import ProcessSection from "@/components/ProcessSection";
import LabSection from "@/components/LabSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Innova Chem — Consultoría Química de Alta Precisión" },
      {
        name: "description",
        content:
          "Rediseñamos la esencia de tus productos. Consultoría química: optimización de costos, estabilidad y rediseño de fórmulas industriales.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-petrol/20">
      <Navbar />
      <HeroSection />
      <BentoServices />
      <ProcessSection />
      <LabSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
}
