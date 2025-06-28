// app/components/ProductList.js
import ProductCard from "../products/ProductCard";

const fetchProductos = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/productos`, {
    next: { revalidate: 60 }, // o { next: { revalidate: 60 } }
  });
  if (!res.ok) throw new Error("Error al obtener productos");
  return res.json();
};

const ProductList = async ({ category }) => {
  console.log("Categoría recibida en ProductList:", category);

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