import { motion } from "framer-motion";
import { rellenos, coberturas } from "@/data/tartasConfig";

export default function Paso3Interior({ tarta, seleccionarRelleno, seleccionarCobertura, avanzarPaso, retrocederPaso }) {
    return (
        <motion.div
            key="paso3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="space-y-5"
        >
            <div>
                <h3 className="font-serif text-lg text-principal mb-2 border-b border-principal/10 pb-1">1. Elige tu Relleno</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {rellenos.map((relleno) => (
                        <button
                            key={relleno}
                            onClick={() => seleccionarRelleno(relleno)}
                            className={`p-2 rounded-xl border text-center transition-all text-xs ${tarta.relleno === relleno ? 'border-principal bg-principal/10 font-bold text-principal shadow-sm' : 'border-principal/20 bg-fondo text-texto hover:border-principal/50'}`}
                        >
                            {relleno}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <div className="mb-2 border-b border-principal/10 pb-1">
                    <h3 className="font-serif text-lg text-principal">2. Elige tu Cobertura</h3>
                    <p className="text-[10px] text-texto/60 italic mt-0.5">*Algunos sabores no están disponibles por su textura.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {coberturas.map((cobertura) => (
                        <button
                            key={cobertura}
                            onClick={() => seleccionarCobertura(cobertura)}
                            className={`p-2 rounded-xl border text-center transition-all text-xs ${tarta.cobertura === cobertura ? 'border-principal bg-principal/10 font-bold text-principal shadow-sm' : 'border-principal/20 bg-fondo text-texto hover:border-principal/50'}`}
                        >
                            {cobertura}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex gap-2 pt-2">
                <button onClick={retrocederPaso} className="px-4 py-3 rounded-xl font-bold text-principal border border-principal/20 bg-fondo hover:bg-principal/5 transition-colors text-sm">
                    Atrás
                </button>
                <button
                    onClick={avanzarPaso}
                    disabled={!tarta.relleno || !tarta.cobertura}
                    className={`flex-1 py-3 rounded-xl font-bold transition-all shadow-sm text-sm ${(!tarta.relleno || !tarta.cobertura) ? 'bg-principal/30 text-fondo cursor-not-allowed' : 'bg-principal text-fondo hover:bg-oscuro'}`}
                >
                    Siguiente: Extras
                </button>
            </div>
        </motion.div>
    );
}
