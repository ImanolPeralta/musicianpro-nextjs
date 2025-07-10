// app/components/ProductList.js
import ProductCard from "../products/ProductCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

const fetchProductos = async () => {
  const querySnapshot = await getDocs(collection(db, "productos"));
  const productos = [];
  querySnapshot.forEach((doc) => {
    productos.push({ id: doc.id, ...doc.data() });
  });
  return productos;
};

const ProductList = async ({ category }) => {
  const productos = await fetchProductos();

  const items =
    category === "todos"
      ? productos
      : productos.filter((item) => item.categoria === category);

  return (
    <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
      {items.map((item, index) => (
        <ProductCard key={item.id ?? index} item={item} />
      ))}
    </section>
  );
};

export default ProductList;
