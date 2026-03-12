"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// IMPORTAMOS SOLO LOS DATOS
import { tamaños, bizcochos, rellenos, coberturas } from "@/data/tartasConfig";

export default function ConfiguradorTartas() {
    const [pasoActual, setPasoActual] = useState(1);

    const [datosCliente, setDatosCliente] = useState({
        nombre: "",
        fechaEvento: "",
        horaEvento: "",
        lugarEntrega: "",
        alergias: "",
    });

    const [tarta, setTarta] = useState({
        tamaño: "",
        bizcocho: "",
        relleno: "",
        cobertura: "",
    });

    const [extras, setExtras] = useState({
        quiereTopper: false, textoTopper: "", tematica: "",
    });

    // NUEVOS ESTADOS PARA EL PASO 4
    const [metodoEnvio, setMetodoEnvio] = useState("whatsapp");
    const [emailCliente, setEmailCliente] = useState("");

    const seleccionarBizcocho = (sabor) => setTarta({ ...tarta, bizcocho: sabor });
    const seleccionarRelleno = (sabor) => setTarta({ ...tarta, relleno: sabor });
    const seleccionarCobertura = (sabor) => setTarta({ ...tarta, cobertura: sabor });

    const avanzarPaso = () => setPasoActual(pasoActual + 1);
    const retrocederPaso = () => setPasoActual(pasoActual - 1);

    // FUNCIÓN DE ENVÍO
    const enviarPedido = () => {
        alert("¡Aquí conectaremos la lógica de enviar el correo o abrir el WhatsApp!");
        console.log({ datosCliente, tarta, extras, metodoEnvio, emailCliente });
    };

    return (
        // Fondo fijo con bg-fondo
        <div className="min-h-screen bg-fondo py-10 px-4 flex items-center justify-center">
            {/* Contenedor más pequeño (max-w-lg) y márgenes ajustados */}
            <div className="max-w-lg w-full bg-tarjeta p-6 md:p-8 rounded-3xl shadow-xl border border-principal/5">

                <h2 className="text-2xl md:text-3xl font-serif text-principal mb-5 text-center">
                    Diseña tu tarta a medida
                </h2>

                <div className="flex justify-between mb-6 text-[10px] sm:text-xs font-bold text-texto/40 uppercase tracking-widest border-b border-principal/10 pb-3">
                    <span className={pasoActual >= 1 ? "text-principal transition-colors duration-500" : ""}>1. Datos</span>
                    <span className={pasoActual >= 2 ? "text-principal transition-colors duration-500" : ""}>2. Base</span>
                    <span className={pasoActual >= 3 ? "text-principal transition-colors duration-500" : ""}>3. Interior</span>
                    <span className={pasoActual >= 4 ? "text-principal transition-colors duration-500" : ""}>4. Extras</span>
                </div>

                <AnimatePresence mode="wait">

                    {/* --- PASO 1: DATOS --- */}
                    {pasoActual === 1 && (
                        <motion.div key="paso1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.6, ease: "easeInOut" }} className="space-y-4">
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
                    )}

                    {/* --- PASO 2: TAMAÑO Y BIZCOCHO --- */}
                    {pasoActual === 2 && (
                        <motion.div key="paso2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.6, ease: "easeInOut" }} className="space-y-5">

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
                    )}

                    {/* --- PASO 3: RELLENO Y COBERTURA --- */}
                    {pasoActual === 3 && (
                        <motion.div key="paso3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.6, ease: "easeInOut" }} className="space-y-5">

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
                    )}

                    {/* --- PASO 4: EXTRAS Y ENVÍO --- */}
                    {pasoActual === 4 && (
                        <motion.div key="paso4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.6, ease: "easeInOut" }} className="space-y-6">

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
                                            <input type="file" accept="image/*" className="w-full text-xs text-texto/60 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-principal/10 file:text-principal hover:file:bg-principal/20 transition-all cursor-pointer" />
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
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
}