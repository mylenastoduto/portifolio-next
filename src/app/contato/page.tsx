// src/app/contato/page.tsx
'use client';

import Link from "next/link";

export default function Contato() {
  return (
    <section className="min-h-screen px-6 sm:px-20 py-12 bg-white text-black">
      <h1 className="text-4xl font-bold mb-6 text-center">Entre em Contato</h1>
      <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
        Está pronto pra marcar sua próxima tatuagem? Me chama no WhatsApp ou nas redes sociais!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-8 items-center text-center">
        {/* WhatsApp */}
        <Link
          href="https://wa.me/5521980252265"
          target="_blank"
          className="bg-green-500 hover:scale-105 transition-transform duration-300 text-white px-6 py-3 rounded-full text-lg"
        >
          WhatsApp
        </Link>

        {/* Instagram */}
        <Link
          href="https://instagram.com/myytatua"
          target="_blank"
          className="bg-gradient-to-r from-pink-500 to-yellow-400 hover:scale-105 transition-transform duration-300 text-white px-6 py-3 rounded-full text-lg"
        >
          Instagram
        </Link>

        {/* Email */}
        <Link
          href="mailto:mylenastoduto@gmail.com"
          className="bg-black hover:scale-105 transition-transform duration-300 text-white px-6 py-3 rounded-full text-lg"
        >
          E-mail
        </Link>
      </div>

      {/* Localização ou outras informações (opcional) */}
      <div className="mt-16 text-center text-gray-600">
        <p>Atendimento com horário marcado</p>
        <p>Estúdio em Nova Iguaçu - RJ</p>
      </div>
    </section>
  );
}
