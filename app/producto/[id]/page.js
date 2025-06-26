import { getProductById } from "@/lib/products";
import ProductDetail from "../../components/products/ProductDetail";

export default async function ProductoPage({ params }) {
  const { id } = params;
  const item = await getProductById(id);

  if (!item) {
    return (
      <p className="text-center mt-10 text-red-500">Producto no encontrado.</p>
    );
  }

  return <ProductDetail item={item} />;
}
