"use client";
import { useState } from "react";
import Counter from "../ui/Counter";
import Boton from "../ui/Boton";

const QtySelector = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    // Aquí podrías enviar al carrito o lo que necesites
    console.log({
      ...item,
      quantity,
    });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
      <Counter max={item.stock} counter={quantity} setCounter={setQuantity} />
      <Boton className="w-full sm:w-auto" onClick={handleAdd}>
        Agregar al carrito
      </Boton>
    </div>
  );
};

export default QtySelector;
