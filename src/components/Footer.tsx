import { FlaskConical } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 px-4 sm:px-6 md:py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        <div className="text-2xl font-bold shrink-0">
          Innova<span className="text-petrol font-black">Chem</span>
        </div>
        <div className="bg-background/5 border border-background/10 rounded-2xl md:rounded-3xl p-4 sm:p-6 w-full md:max-w-md flex items-start gap-3 md:gap-4">
          <div className="bg-petrol p-2.5 md:p-3 rounded-full shrink-0 text-petrol-foreground">
            <FlaskConical size={18} />
          </div>
          <div>
            <h5 className="font-bold text-petrol mb-1 text-sm md:text-base">¿Sale Aprender?</h5>
            <p className="text-xs text-background/50">
              Dato: La reformulación química es la clave para la economía
              circular en la industria actual.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
