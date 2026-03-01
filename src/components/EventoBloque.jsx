// "use client";
// import { motion } from "framer-motion";
// // import { urlFor } from "@/lib/sanity"; 

// export default function EventoBloque({ evento, index }) {
//   // Si el índice es impar, invertimos el orden (Zig-Zag automático)
//   const esPar = index % 2 === 0;

//   return (
//     <section className={`py-24 ${esPar ? 'bg-fondo' : 'bg-principal/5'} overflow-hidden relative`}>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className={`flex flex-col lg:flex-row items-center gap-16 ${!esPar ? 'lg:flex-row-reverse' : ''}`}>
          
//           {/* LADO IMAGEN */}
//           <motion.div 
//             initial={{ opacity: 0, x: esPar ? -50 : 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="w-full lg:w-1/2"
//           >
//             <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border border-principal/10">
//              <img 
//   src={evento.imagen} 
//   alt={evento.titulo} 
//   className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
// />
//             </div>
//           </motion.div>

//           {/* LADO TEXTO */}
//           <motion.div 
//             initial={{ opacity: 0, x: esPar ? 50 : -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="w-full lg:w-1/2 flex flex-col space-y-8"
//           >
//             <div>
//               <span className="font-bold tracking-[0.3em] uppercase text-[10px] text-principal/60 mb-4 block">
//                 {evento.subtitulo}
//               </span>
//               <h2 className="font-serif text-4xl md:text-5xl text-principal mb-6">
//                 {evento.titulo}
//               </h2>
//               <div className="w-20 h-px bg-principal/20 mb-8" />
//               <p className="text-texto/80 text-lg leading-relaxed italic font-light">
//                 {evento.descripcion}
//               </p>
//             </div>

//             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {evento.puntos?.map((punto, i) => (
//                 <li key={i} className="flex items-center gap-3 text-texto/90">
//                   <span className="w-1.5 h-1.5 rounded-full bg-principal/30 shrink-0" />
//                   <span className="text-xs uppercase tracking-[0.15em]">{punto}</span>
//                 </li>
//               ))}
//             </ul>

//             <button className="inline-block self-start border border-principal text-principal px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-principal hover:text-fondo transition-all duration-300">
//               Consultar disponibilidad
//             </button>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }