"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ModalInfo({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fondo oscuro - Entrada más suave (0.4s) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 bg-oscuro/40 z-50 backdrop-blur-sm"
          />

          {/* Modal - Animación más larga y fluida */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-fondo rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden pointer-events-auto border border-principal/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-tarjeta px-6 py-4 border-b border-principal/20 flex items-center justify-between">
                <h3 className="font-serif text-xl text-principal font-bold">{title}</h3>
                <button
                  onClick={onClose}
                  className="text-texto hover:text-oscuro transition-colors p-1 hover:bg-principal/10 rounded-full"
                  aria-label="Cerrar"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="px-6 py-6 overflow-y-auto max-h-[calc(80vh-80px)] text-texto text-sm">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}