import { motion } from "framer-motion";
import { tamaños, bizcochos } from "@/data/tartasConfig";

export default function Paso2Base({ tarta, setTarta, seleccionarBizcocho, avanzarPaso, retrocederPaso }) {
    return (
        <motion.div
            key="paso2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="space-y-5"
        >
            <div>
                <h3 className="font-serif text-lg text-principal mb-2 border-b border-principal/10 pb-1">1. Tamaño</h3>
                <div className="grid grid-cols-1 gap-2">
                    {tamaños.map((tam) => (
                        <button
                            key={tam.id}
                            onClick={() => setTarta({ ...tarta, tamaño: tam.nombre })}
                            className={`p-3 rounded-xl border text-left transition-all text-sm ${tarta.tamaño === tam.nombre ? 'border-principal bg-principal/10 font-bold text-principal shadow-sm' : 'border-principal/20 bg-fondo text-texto hover:border-principal/50'}`}
                        >
                            {tam.nombre}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-serif text-lg text-principal mb-2 border-b border-principal/10 pb-1">2. Sabor del Bizcocho</h3>
                <div className="grid grid-cols-2 gap-2">
                    {bizcochos.map((bizcocho) => (
                        <button
                            key={bizcocho}
                            onClick={() => seleccionarBizcocho(bizcocho)}
                            className={`p-2.5 rounded-xl border text-center transition-all text-sm ${tarta.bizcocho === bizcocho ? 'border-principal bg-principal/10 font-bold text-principal shadow-sm' : 'border-principal/20 bg-fondo text-texto hover:border-principal/50'}`}
                        >
                            {bizcocho}
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
                    disabled={!tarta.tamaño || !tarta.bizcocho}
                    className={`flex-1 py-3 rounded-xl font-bold transition-all shadow-sm text-sm ${(!tarta.tamaño || !tarta.bizcocho) ? 'bg-principal/30 text-fondo cursor-not-allowed' : 'bg-principal text-fondo hover:bg-oscuro'}`}
                >
                    Siguiente: Relleno y Cobertura
                </button>
            </div>
        </motion.div>
    );
}
