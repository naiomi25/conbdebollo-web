import { motion, AnimatePresence } from "framer-motion";

export default function Paso4Extras({ extras, setExtras, metodoEnvio, setMetodoEnvio, emailCliente, setEmailCliente, retrocederPaso, enviarPedido ,fotoAdjunta, setFotoAdjunta}) {
    return (
        <motion.div
            key="paso4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="space-y-6"
        >
            <div>
                <label className="block text-sm font-bold text-principal mb-2">¿Quieres añadir un Topper personalizado?</label>
                <div className="flex gap-3 mb-3">
                    <button onClick={() => setExtras({ ...extras, quiereTopper: true })} className={`flex-1 py-2 rounded-xl border text-sm transition-all ${extras.quiereTopper ? 'border-principal bg-principal/10 font-bold text-principal shadow-sm' : 'border-principal/20 bg-fondo text-texto hover:border-principal/50'}`}>Sí, añadir</button>
                    <button onClick={() => setExtras({ ...extras, quiereTopper: false })} className={`flex-1 py-2 rounded-xl border text-sm transition-all ${!extras.quiereTopper ? 'border-principal bg-principal/10 font-bold text-principal shadow-sm' : 'border-principal/20 bg-fondo text-texto hover:border-principal/50'}`}>No, gracias</button>
                </div>

                <AnimatePresence>
                    {extras.quiereTopper && (
                        <motion.textarea
                            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                            placeholder="Cuéntanos qué idea tienes para el topper..."
                            className="w-full p-3 border border-principal/20 rounded-xl bg-fondo placeholder:text-texto/40 focus:outline-none focus:border-principal/60 text-sm h-20 resize-none mt-1"
                            value={extras.textoTopper} onChange={(e) => setExtras({ ...extras, textoTopper: e.target.value })}
                        />
                    )}
                </AnimatePresence>
            </div>

            <div>
                <label className="block text-sm font-bold text-principal mb-2">Temática de la tarta</label>
                <textarea
                    placeholder="Cuéntanos tu temática (si la tienes) y nos pondremos en contacto contigo para ultimar los detalles."
                    className="w-full p-3 border border-principal/20 rounded-xl bg-fondo placeholder:text-texto/40 focus:outline-none focus:border-principal/60 text-sm h-24 resize-none"
                    value={extras.tematica} onChange={(e) => setExtras({ ...extras, tematica: e.target.value })}
                />

                <div className="mt-3 p-3 bg-principal/5 border border-principal/10 rounded-xl flex gap-3 items-start">
                    <span className="text-principal text-lg">💡</span>
                    <p className="text-xs text-principal/90 leading-relaxed italic">
                        Recuerda que si tu tarta es tematizada, la elección de la cobertura puede condicionar el efecto visual final.
                    </p>
                </div>
            </div>

            <div className="pt-4 border-t border-principal/10">
                <label className="block text-sm font-bold text-principal mb-3 text-center">¿Cómo prefieres enviar tu diseño?</label>
                <div className="flex gap-3 mb-4">
                    <button onClick={() => setMetodoEnvio('whatsapp')} className={`flex-1 py-2.5 rounded-xl border text-sm transition-all ${metodoEnvio === 'whatsapp' ? 'border-principal bg-principal/10 font-bold text-principal' : 'border-principal/20 bg-fondo text-texto hover:border-principal/50'}`}>WhatsApp</button>
                    <button onClick={() => setMetodoEnvio('email')} className={`flex-1 py-2.5 rounded-xl border text-sm transition-all ${metodoEnvio === 'email' ? 'border-principal bg-principal/10 font-bold text-principal' : 'border-principal/20 bg-fondo text-texto hover:border-principal/50'}`}>Email</button>
                </div>

                {metodoEnvio === 'whatsapp' ? (
                    <p className="text-xs text-texto/60 text-center italic mb-4">
                        * Se abrirá tu WhatsApp con los datos listos para enviar. Si tienes fotos de inspiración, añádelas manualmente en el chat.
                    </p>
                ) : (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 mb-4">
                        <div>
                            <label className="block text-xs font-bold text-principal mb-1">Tu Email (Para poder responderte) *</label>
                            <input type="email" placeholder="ejemplo@correo.com" className="w-full p-3 border border-principal/20 rounded-xl bg-fondo text-sm focus:outline-none focus:border-principal/60" value={emailCliente} onChange={(e) => setEmailCliente(e.target.value)} />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-principal mb-1">Foto de inspiración (Opcional)</label>
                            <input type="file" accept="image/*" 
                            onChange={(e) => setFotoAdjunta(e.target.files[0])}
                            className="w-full text-xs text-texto/60 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-principal/10 file:text-principal hover:file:bg-principal/20 transition-all cursor-pointer" />
                        </div>
                    </motion.div>
                )}
            </div>

            <div className="flex gap-2 pt-2">
                <button onClick={retrocederPaso} className="px-4 py-3 rounded-xl font-bold text-principal border border-principal/20 bg-fondo hover:bg-principal/5 transition-colors text-sm">Atrás</button>
                <button
                    onClick={enviarPedido}
                    disabled={metodoEnvio === 'email' && !emailCliente}
                    className={`flex-1 py-3 rounded-xl font-bold transition-all shadow-sm text-sm ${metodoEnvio === 'email' && !emailCliente ? 'bg-principal/30 text-fondo cursor-not-allowed' : 'bg-principal text-fondo hover:bg-oscuro'}`}
                >
                    {metodoEnvio === 'whatsapp' ? 'Enviar por WhatsApp 💬' : 'Enviar por Email ✉️'}
                </button>
            </div>
        </motion.div>
    );
}
