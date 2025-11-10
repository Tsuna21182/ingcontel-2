"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { services } from "../data/Db";
import { X } from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);

  return (
    <section
      id="servicios"
      className="py-24 relative overflow-hidden bg-linear-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-sm font-light text-gray-500 tracking-widest uppercase mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white max-w-3xl">
            Soluciones integrales en infraestructura FTTH
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="glass-card p-8 rounded-sm group cursor-pointer relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-12 h-12 rounded-sm bg-linear-to-br ${service.gradient} flex items-center justify-center`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-5xl font-bold text-gray-800">
                  {service.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-4 font-light text-sm">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-blue-400 font-medium text-xs uppercase tracking-wider">
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
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-10 rounded-sm max-w-4xl w-full max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-6">
                  <div
                    className={`w-16 h-16 rounded-sm bg-linear-to-br ${selectedService.gradient} flex items-center justify-center`}
                  >
                    <selectedService.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 uppercase tracking-widest block mb-2">
                      {selectedService.number}
                    </span>
                    <h3 className="text-3xl font-bold text-white uppercase tracking-wide">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div
                className="w-full h-64 rounded-sm mb-8 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${selectedService.image}')` }}
              />

              <p className="text-gray-300 leading-relaxed text-lg font-light mb-8">
                {selectedService.details}
              </p>

              <div className="border-t border-gray-800 pt-6">
                <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">
                  Beneficios:
                </h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span className="font-light">
                      Equipos y herramientas especializadas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span className="font-light">
                      Personal técnico certificado
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span className="font-light">Garantía de instalación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span className="font-light">
                      Documentación técnica completa
                    </span>
                  </li>
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 glass-button-primary py-4 rounded-sm font-medium uppercase tracking-wider"
              >
                Solicitar Cotización
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
