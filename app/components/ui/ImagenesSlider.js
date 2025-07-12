"use client";
import { useState, useEffect } from "react";

const imagenes = ["/img22.png", "/img23.png", "/img24.png"];

export default function ImagenesSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="w-full overflow-hidden py-6">
      <img
        src={imagenes[index]}
        alt={`Promo ${index + 1}`}
        className="w-full h-48 object-cover rounded-xl transition-all duration-700"
      />
    </div>
  );
}
