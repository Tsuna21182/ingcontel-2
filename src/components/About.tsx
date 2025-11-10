"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { values } from "../data/Db";

export default function About() {
  const [selectedValue, setSelectedValue] = useState<(typeof values)[0] | null>(
    null
  );

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-sm font-light text-gray-500 tracking-widest uppercase mb-4 block">
            Sobre Nosotros
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white max-w-3xl">
            Construimos el futuro de las telecomunicaciones
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl font-light leading-relaxed">
            Somos líderes en la construcción de infraestructura de fibra óptica
            FTTH, comprometidos con conectar ciudades y edificios con tecnología
            de vanguardia. Con más de 15 años de experiencia, transformamos la
            conectividad de comunidades enteras.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedValue(value)}
              className="glass-card p-8 rounded-sm cursor-pointer group relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-14 h-14 rounded-sm bg-linear-to-br ${value.gradient} flex items-center justify-center`}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-6xl font-bold text-gray-800">
                  {value.number}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">
                {value.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-4 font-light">
                {value.description}
              </p>

              <div className="flex items-center gap-2 text-blue-400 font-medium text-sm uppercase tracking-wider">
                <span>Ver más</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-12"
        >
          {[
            { value: "185+", label: "Proyectos Completados" },
            { value: "700km", label: "Red Desplegada" },
            { value: "50+", label: "Edificios Conectados" },
            { value: "7", label: "Años de Experiencia" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-left"
            >
              <div className="text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedValue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedValue(null)}
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-10 rounded-sm max-w-3xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-6">
                  <div
                    className={`w-16 h-16 rounded-sm bg-linear-to-br ${selectedValue.gradient} flex items-center justify-center`}
                  >
                    <selectedValue.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 uppercase tracking-widest block mb-2">
                      {selectedValue.number}
                    </span>
                    <h3 className="text-4xl font-bold text-white uppercase tracking-wide">
                      {selectedValue.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedValue(null)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg font-light mb-8">
                {selectedValue.fullContent}
              </p>

              <div className="border-t border-gray-800 pt-6">
                <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">
                  Aspectos Clave:
                </h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span className="font-light">
                      Compromiso con la excelencia técnica y calidad
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span className="font-light">
                      Innovación constante en tecnologías FTTH
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span className="font-light">
                      Equipo certificado y altamente capacitado
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span className="font-light">
                      Cumplimiento de estándares internacionales
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
