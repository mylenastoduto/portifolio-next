// src/app/sobre/page.tsx
import Image from "next/image";

export default function Sobre() {
  return (
    <section className="relative flex items-center justify-start min-h-screen px-8 sm:px-20 bg-white text-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image1.png"
          alt="Tatuando"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-80"
        />
      </div>
      <div className="relative z-10 max-w-2xl bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-xl">
        <h2 className="text-4xl font-semibold mb-6">Sobre</h2>
        <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
          Tatuando desde 2021, gosto de transformar ideias em arte na pele, sempre inovando e evoluindo no meu trabalho.
          Para mim, tatuagem vai além do traço—é identidade, memória e significado. E o meu compromisso é oferecer uma
          experiência única para cada cliente. <br /><br />
          Especializada em Blackwork, tatuagens geek e fineline, crio cada arte com técnica, sensibilidade e respeito à
          individualidade. Acredito que toda tatuagem conta uma história, e meu papel é dar vida a ela.
          Cada sessão é pensada para que você se sinta à vontade e confiante. <br /><br />
          Seja sua primeira tattoo ou mais uma para a coleção, meu objetivo é tornar essa experiência especial.
          Explore meu trabalho e bora transformar sua ideia em arte comigo!
        </p>
      </div>
    </section>
  );
}
