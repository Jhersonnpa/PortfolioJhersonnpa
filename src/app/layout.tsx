import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";

import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "🚀 Jhersonnpa | Desarrollador Web - NextJs, Astro & Tailwind",
  description: "Desarrollador web especializado en tecnologías modernas como NextJs, Astro y TailwindCSS. Descubre mis proyectos y contáctame.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${roboto.className} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


