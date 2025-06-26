// app/components/ProductList.js
import { getAllProducts } from "@/lib/products";
import ProductCard from "../products/ProductCard";

const ProductList = async ({ category }) => {
  console.log("Categoría recibida en ProductList:", category);

  const productos = await getAllProducts();
  const items = category === "todos"
    ? productos
    : productos.filter(item => item.categoria === category);

  return (
    <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
      {items.map((item, index) => (
        <ProductCard key={item.id ?? index} item={item} />
      ))}
    </section>
  );
};

export default ProductList;
