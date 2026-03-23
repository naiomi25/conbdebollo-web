"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
    const [mostrar, setMostrar] = useState(false);

    useEffect(() => {
        // Al cargar la web, miramos si el usuario ya tomó una decisión antes
        const decision = localStorage.getItem("cookiesAceptadas");
        if (!decision) {
            // Si no hay nada guardado, le mostramos el cartel
            setMostrar(true);
        }
    }, []);

    const aceptarCookies = () => {
        localStorage.setItem("cookiesAceptadas", "true");
        setMostrar(false);
        // Nota Fullstack: Si en el futuro te piden poner Google Analytics, el código de rastreo se activaría aquí.
    };

    const rechazarCookies = () => {
        localStorage.setItem("cookiesAceptadas", "false");
        setMostrar(false);
        // Al rechazar, solo cargan las cookies técnicas (que son obligatorias y no requieren permiso)
    };

    return (
        <AnimatePresence>
            {mostrar && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-3 pb-24 sm:pb-4 sm:pr-28 md:p-6 pointer-events-none"
                >
                    <div className="max-w-5xl mx-auto bg-tarjeta border border-principal/10 shadow-2xl rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 pointer-events-auto">
                        <div className="text-sm text-texto/80 flex-1">
                            <p className="mb-2">
                                🍪 <strong>Usamos cookies</strong> para mejorar tu experiencia.
                                Algunas son estrictamente necesarias para que la página funcione
                                y otras nos ayudan a analizar el tráfico si nos das tu permiso.
                            </p>
                            <p className="text-xs">
                                Puedes leer más en nuestra <Link href="/politica-cookies" className="text-principal font-bold underline">Política de Cookies</Link>.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                            <button
                                onClick={rechazarCookies}
                                className="px-5 py-2.5 rounded-xl font-bold text-principal border border-principal/20 bg-fondo hover:bg-principal/5 transition-colors text-sm text-center"
                            >
                                Rechazar no necesarias
                            </button>
                            <button
                                onClick={aceptarCookies}
                                className="px-5 py-2.5 rounded-xl font-bold bg-principal text-fondo hover:bg-principal/90 transition-colors text-sm text-center"
                            >
                                Aceptar todas
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}