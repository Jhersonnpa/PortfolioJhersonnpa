import type { Metadata } from "next";
import { Roboto, Silkscreen } from 'next/font/google'
import "./globals.css";

import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";


const roboto = Roboto({
  weight: ['100','300','400','500','700','900'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
});

export const metadata: Metadata = {
  title: 'Jhersonnpa | Desarrollador Web - NextJs, Astro & Tailwind',
  description: `Desarrollador web especializado en tecnologías modernas como NextJs, Astro y TailwindCSS. Descubre mis proyectos y contáctame.`,
  creator: 'Jherson Pabon',
  applicationName: 'My website',
  keywords: [
    'Jherson',
    'Pabon',
    'Portfolio',
    'Next.js',
    'Desarrollador web',
  ],
  icons: {
    icon: './favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
  },
  openGraph: {
    type: 'website',
    url: 'https://www.jhersonnpa.com',
    title: 'Jherson Pabon | Desarrollador Web - NextJs, Astro & Tailwind',
    description: `Desarrollador web especializado en tecnologías modernas como NextJs, Astro y TailwindCSS. Descubre mis proyectos y contáctame.`,
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 628,
        alt: 'Jherson Pabon',
      },
    ],
  },
  twitter: {
    title: 'Jherson Pabon - Software Engineer',
    description: `Jhersonnpa | Desarrollador Web - NextJs, Astro & Tailwind`,
    card: 'summary_large_image',
    site: '@Jhersonnpa',
    images: '/opengraph-image.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${roboto.variable} ${silkscreen.variable} antialiased relative`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <div className="main-mask pointer-events-none absolute inset-0 -z-50" />
      </body>
    </html>
  );
}


