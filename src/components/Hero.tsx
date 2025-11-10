"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Dark background with overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black" />

      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black" />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-sm font-light text-gray-400 tracking-widest uppercase">
              Infraestructura de Telecomunicaciones
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight max-w-5xl"
          >
            <span className="text-white">Ingcontel</span>

            <span className="text-blue-500 text-xl mt-3">
              ¡conectamos colombia con innovación!
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed"
          >
            Especialistas en diseño, construcción y despliegue de
            infraestructura de fibra óptica para ciudades y edificios.
            Conectando el futuro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-button-primary px-8 py-4 rounded-sm font-medium text-base flex items-center justify-center gap-2 group"
            >
              Ver Servicios
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-button px-8 py-4 rounded-sm font-medium text-base"
            >
              Solicitar Cotización
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl border-t border-gray-800 pt-12"
          >
            {[
              { value: "7", label: "Años en el Mercado" },
              { value: "185", label: "Proyectos Completados" },
              { value: "110", label: "Edificios Conectados" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                className="text-left"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wide font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
