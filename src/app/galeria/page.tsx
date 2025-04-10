"use client";
import Image from "next/image";
import FullscreenImageModal from "../components/FullscreenImageModal";
import { useState } from "react";



const albuns = [
  {
    titulo: "Blackwork / Fineline",
    imagens: [
      "/galeria/black1.jpg",
      "/galeria/black2.jpg",
      "/galeria/black3.jpg",
    ],
  },
  {
    titulo: "Coloridas / Geek",
    imagens: [
      "/galeria/color1.jpg",
      "/galeria/color2.jpg",
      "/galeria/color3.jpg",
    ],
  },
];

export default function Galeria() {

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <section className="min-h-screen px-6 sm:px-20 py-12 bg-white text-black">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Galeria de Estilos
      </h1>

      <FullscreenImageModal
        imageUrl={selectedImage}
        alt="Imagem de exemplo"
        onClose={() => {
          setShowModal(false);
          setSelectedImage("");
        }}
        show={showModal}
      />

      {albuns.map((album, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">{album.titulo}</h2>
          <div className="grid grid-cols-3 gap-6">
            {album.imagens.map((src, i) => (
              <div
              key={i}
              className="overflow-hidden rounded-lg shadow-2xl h-160"
              onClick={() => {
                setSelectedImage(src);
                setShowModal(true);
              }}
              >
                <Image
                  src={src}
                  alt={`Imagem ${i + 1} de ${album.titulo}`}
                  width={600}
                  height={800}
                  className="object-cover w-full h-auto hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
