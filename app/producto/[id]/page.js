import ProductDetail from '../../components/products/ProductDetail';

export default function ProductoPage({ params }) {
  const { id } = params;
  console.log('ID recibido en ProductoPage:', id);
  return <ProductDetail id={id} />;
}
