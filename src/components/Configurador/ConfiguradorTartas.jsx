"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Paso1Datos from "./Paso1Datos";
import Paso2Base from "./Paso2Base";
import Paso3Interior from "./Paso3Interior";
import Paso4Extras from "./Paso4Extras";
import { enviarPorWhatsApp } from "@/utils/whatsapp";
import { enviarPorEmail } from "@/utils/email";

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

    const [metodoEnvio, setMetodoEnvio] = useState("whatsapp");
    const [emailCliente, setEmailCliente] = useState("");
    const [fotoAdjunta, setFotoAdjunta] = useState(null);

    const seleccionarBizcocho = (sabor) => setTarta({ ...tarta, bizcocho: sabor });
    const seleccionarRelleno = (sabor) => setTarta({ ...tarta, relleno: sabor });
    const seleccionarCobertura = (sabor) => setTarta({ ...tarta, cobertura: sabor });

    const avanzarPaso = () => setPasoActual(pasoActual + 1);
    const retrocederPaso = () => setPasoActual(pasoActual - 1);

    const enviarPedido = async () => {
        if (metodoEnvio === "whatsapp") {
            // Si eligió WhatsApp, llamamos a nuestra nueva función pasándole los datos
            enviarPorWhatsApp(datosCliente, tarta, extras);
        } else {
            try {

                await enviarPorEmail(datosCliente, tarta, extras, emailCliente, fotoAdjunta);

                // Si la línea de arriba termina sin errores, mostramos el éxito
                alert("¡Pedido enviado por email con éxito! 🎉 Revisa tu bandeja de entrada.");

            } catch (error) {
                // Si el backend da algún fallo, avisamos para que no se queden esperando
                console.error("Falló el envío:", error);
                alert("Uy, hubo un problemilla enviando el correo. ¿Podrías intentarlo por WhatsApp?");
            }
        }
    };

    return (
        <div className="min-h-screen bg-fondo py-10 px-4 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="max-w-lg w-full bg-tarjeta p-6 md:p-8 rounded-3xl shadow-xl border border-principal/5"
            >

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
                    {pasoActual === 1 && (
                        <Paso1Datos
                            datosCliente={datosCliente}
                            setDatosCliente={setDatosCliente}
                            avanzarPaso={avanzarPaso}
                        />
                    )}

                    {pasoActual === 2 && (
                        <Paso2Base
                            tarta={tarta}
                            setTarta={setTarta}
                            seleccionarBizcocho={seleccionarBizcocho}
                            avanzarPaso={avanzarPaso}
                            retrocederPaso={retrocederPaso}
                        />
                    )}

                    {pasoActual === 3 && (
                        <Paso3Interior
                            tarta={tarta}
                            seleccionarRelleno={seleccionarRelleno}
                            seleccionarCobertura={seleccionarCobertura}
                            avanzarPaso={avanzarPaso}
                            retrocederPaso={retrocederPaso}
                        />
                    )}

                    {pasoActual === 4 && (
                        <Paso4Extras
                            extras={extras}
                            setExtras={setExtras}
                            metodoEnvio={metodoEnvio}
                            setMetodoEnvio={setMetodoEnvio}
                            emailCliente={emailCliente}
                            setEmailCliente={setEmailCliente}
                            retrocederPaso={retrocederPaso}
                            enviarPedido={enviarPedido}
                            fotoAdjunta={fotoAdjunta}
                            setFotoAdjunta={setFotoAdjunta}
                        />
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
