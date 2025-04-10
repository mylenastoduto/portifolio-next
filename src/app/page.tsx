// src/app/page.tsx
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <section className="relative flex items-center justify-start min-h-screen px-8 sm:px-20 bg-white text-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image1.png" // certifique-se que está em public/
          alt="Tatuando"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-80 static"
          draggable="false"
        />
      </div>
      <div className="relative z-10 max-w-xl bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-xl">
        <h1 className="text-4xl font-semibold mb-4">
          Tatuadora, <br /> Eternizando sonhos sob a pele.
        </h1>
        <p className="text-md text-gray-700 mb-4">
          Expresse o que há de melhor em você através da arte!
        </p>

        <div className="mt-6 flex gap-6 text-2xl text-gray-800">
          <a
            href="https://wa.me/5521980252265"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/myytatua"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}
