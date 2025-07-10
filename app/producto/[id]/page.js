import ProductDetail from "../../components/products/ProductDetail";
import { notFound } from "next/navigation";

const fetchProductoPorId = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/productos/${id}`
  );
  if (!res.ok) return null;
  return res.json();
};

export async function generateStaticParams() {
  const res = await fetch("/api/productos");
  const productos = await res.json();

  return productos.map((producto) => ({
    id: producto.id.toString(),
  }));
}

export default async function ProductoPage({ params }) {
  const { id } = params;
  const item = await fetchProductoPorId(id);

  if (!item) {
    notFound();
  }

  return <ProductDetail item={item} />;
}
