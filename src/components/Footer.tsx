"use client";

import { motion } from "framer-motion";
import { Network, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    Servicios: [
      "Fibra Óptica Aérea",
      "Canalización",
      "ODF",
      "Zonas WiFi",
      "Cableado Estructurado",
      "Redes Eléctricas",
    ],
    Empresa: ["Sobre Nosotros", "Proyectos", "Certificaciones"],
    Contacto: ["Cotizaciones", "Soporte Técnico", "Oficinas"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-black border-t border-gray-900">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-10 h-10 rounded-sm bg-linear-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                <Network className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Ingcontel</span>
            </motion.div>
            <p className="text-gray-500 mb-6 max-w-sm font-light leading-relaxed">
              Líderes en construcción de infraestructura de fibra óptica FTTH.
              Conectando ciudades y edificios con tecnología de vanguardia.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-sm glass-card flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-blue-400 transition-colors duration-300 text-sm font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p className="font-light">
              © 2025 Ingcontel. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-blue-400 transition-colors font-light"
              >
                Términos
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors font-light"
              >
                Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
