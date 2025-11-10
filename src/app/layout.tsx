import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import ErrorReporter from "./globalError";

export const metadata: Metadata = {
  title: "Ingontel - ¡conectamos colombia con innovación!",
  description:
    "Especialistas en diseño, construcción y despliegue de redes de fibra óptica FTTH para ciudades y edificios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
      </body>
    </html>
  );
}
