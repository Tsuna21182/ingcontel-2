"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "+7 (495) 123-45-67",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@ingcontel.com",
      gradient: "from-cyan-600 to-cyan-400",
    },
    {
      icon: MapPin,
      title: "Oficina",
      value: "Colombia, Santander, Bucaramanga",
      gradient: "from-blue-700 to-blue-500",
    },
  ];

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-sm font-light text-gray-500 tracking-widest uppercase mb-4 block">
            Contacto
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white max-w-3xl">
            Construyamos juntos tu proyecto
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-sm bg-linear-to-br ${info.gradient} flex items-center justify-center shrink-0`}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-widest">
                    {info.title}
                  </div>
                  <div className="text-lg font-light text-white">
                    {info.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-light text-gray-500 mb-2 uppercase tracking-widest">
                  Nombre
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-sm glass-input transition-all duration-300"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-light text-gray-500 mb-2 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-sm glass-input transition-all duration-300"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-light text-gray-500 mb-2 uppercase tracking-widest">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-sm glass-input transition-all duration-300"
                  placeholder="+34 600 000 000"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-light text-gray-500 mb-2 uppercase tracking-widest">
                  Mensaje
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-sm glass-input transition-all duration-300 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full glass-button-primary py-4 rounded-sm font-medium flex items-center justify-center gap-2 group uppercase tracking-wider"
              >
                Enviar Mensaje
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
