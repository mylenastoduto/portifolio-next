import React from "react";
import Image from "next/image";

type FullscreenImageModalProps = {
  imageUrl: string;
  alt?: string;
  onClose: () => void;
  show: boolean;
};

const FullscreenImageModal: React.FC<FullscreenImageModalProps> = ({
  imageUrl,
  alt = "Imagem",
  onClose,
  show,
}) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
      className="relative "
       onClick={(e) => e.stopPropagation()}
       >
        <Image
          src={imageUrl}
          alt={`Photo of ${alt}`}
          width={600}
          height={800}
          className="object-cover w-full h-auto transition-transform blur-none"
        />

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default FullscreenImageModal;
