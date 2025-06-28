// app/producto/[id]/page.js
import ProductDetail from "../../components/products/ProductDetail";

const fetchProductoPorId = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/productos/${id}`);
  if (!res.ok) return null;
  return res.json();
};

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/productos`);
  const productos = await res.json();

  return productos.map((producto) => ({
    id: producto.id.toString(),
  }));
}

export default async function ProductoPage({ params }) {
  const { id } = params;
  const item = await fetchProductoPorId(id);

  if (!item) {
    return <p className="text-center mt-10 text-red-500">Producto no encontrado.</p>;
  }

  return <ProductDetail item={item} />;
}