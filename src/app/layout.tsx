// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyyTatua",
  description: "Tatuadora, eternizando sonhos sob a pele.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <link
        rel="icon"
        href="/big-ico.png"
        type="image/png"
        sizes="64x64"
      />
      <body
        cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-10">
          {/* Logo à esquerda */}
          <Link href="/" className="text-black text-xl font-bold">
            <Image
              src="/myy1.png"
              alt="Logo do estúdio MyyTatua"
              width={548}
              height={106}
              priority
              className="h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Navegação centralizada */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-6 text-black text-sm">
            <Link
              href="/"
              className="hover:scale-105 transition-transform duration-300"
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="hover:scale-105 transition-transform duration-300"
            >
              Sobre
            </Link>
            <Link
              href="/galeria"
              className="hover:scale-105 transition-transform duration-300"
            >
              Galeria
            </Link>
            <Link
              href="/contato"
              className="hover:scale-105 transition-transform duration-300"
            >
              Contato
            </Link>
          </nav>

          {/* Botão à direita */}
          <a
            href="https://wa.me/5521980252265"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300"
          >
            Agende sua sessão
          </a>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
