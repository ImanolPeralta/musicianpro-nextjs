import { productos } from '../../../app/data/productos';
import ProductDetail from '../../components/products/ProductDetail';

export default function ProductoPage({ params }) {
  const { id } = params;

  return <ProductDetail id={id} />;
}

export async function generateStaticParams() {
  return productos.map((prod) => ({
    id: prod.id.toString(),
  }));
}
