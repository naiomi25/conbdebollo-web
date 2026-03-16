import { motion } from "framer-motion";

export default function Paso1Datos({ datosCliente, setDatosCliente, avanzarPaso }) {
    return (
        <motion.div
            key="paso1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="space-y-4"
        >
            <div>
                <label className="block text-xs font-bold text-principal mb-1.5">¿Quieres decirnos tu nombre? <span className="text-texto/50 font-normal italic">(Opcional)</span></label>
                <input
                    type="text" placeholder="Si no te apetece, te llamaremos 'Tarta Invitada' ✨"
                    className="w-full p-3 border border-principal/20 rounded-xl bg-fondo placeholder:text-texto/40 focus:outline-none focus:border-principal/60 transition-colors text-sm"
                    value={datosCliente.nombre} onChange={(e) => setDatosCliente({ ...datosCliente, nombre: e.target.value })}
                />
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block text-xs font-bold text-principal mb-1.5">Fecha aprox.</label>
                    <input type="date" className="w-full p-3 border border-principal/20 rounded-xl bg-fondo text-texto/80 focus:outline-none focus:border-principal/60 text-sm" value={datosCliente.fechaEvento} onChange={(e) => setDatosCliente({ ...datosCliente, fechaEvento: e.target.value })} />
                </div>
                <div>
                    <label className="block text-xs font-bold text-principal mb-1.5">Hora aprox.</label>
                    <input type="time" className="w-full p-3 border border-principal/20 rounded-xl bg-fondo text-texto/80 focus:outline-none focus:border-principal/60 text-sm" value={datosCliente.horaEvento} onChange={(e) => setDatosCliente({ ...datosCliente, horaEvento: e.target.value })} />
                </div>
            </div>

            <div>
                <label className="block text-xs font-bold text-principal mb-1.5">Lugar de entrega (Población)</label>
                <input type="text" placeholder="Ej: Rivas Vaciamadrid" className="w-full p-3 border border-principal/20 rounded-xl bg-fondo placeholder:text-texto/40 focus:outline-none focus:border-principal/60 text-sm" value={datosCliente.lugarEntrega} onChange={(e) => setDatosCliente({ ...datosCliente, lugarEntrega: e.target.value })} />
            </div>

            <div>
                <label className="block text-xs font-bold text-principal mb-1.5">¿Alguna alergia o intolerancia?</label>
                <input type="text" placeholder="Ej: Sin gluten, alergia a las nueces..." className="w-full p-3 border border-principal/20 rounded-xl bg-fondo placeholder:text-texto/40 focus:outline-none focus:border-principal/60 text-sm" value={datosCliente.alergias} onChange={(e) => setDatosCliente({ ...datosCliente, alergias: e.target.value })} />
            </div>

            <button onClick={avanzarPaso} className="w-full bg-principal text-fondo py-3 rounded-xl font-bold mt-2 hover:bg-oscuro transition-colors shadow-sm text-sm">
                Siguiente: Elige el tamaño y sabor
            </button>
        </motion.div>
    );
}
