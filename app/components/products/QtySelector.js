"use client";
import { useState } from "react";
import Counter from "../ui/Counter";
import Boton from "../ui/Boton";
import { useCart } from "../../context/CartContext";

const QtySelector = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(item, quantity);
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