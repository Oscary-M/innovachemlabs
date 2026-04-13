import { FlaskConical } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-bold">
          Innova<span className="text-petrol font-black">Chem</span>
        </div>
        <div className="bg-background/5 border border-background/10 rounded-3xl p-6 max-w-md flex items-start gap-4">
          <div className="bg-petrol p-3 rounded-full shrink-0 text-petrol-foreground">
            <FlaskConical size={20} />
          </div>
          <div>
            <h5 className="font-bold text-petrol mb-1">¿Sale Aprender?</h5>
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
