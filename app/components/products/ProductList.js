import { productos } from '../../data/productos';
import ProductCard from '../products/ProductCard';

const ProductList = ({ category }) => {
  console.log("Categoría recibida en ProductList:", category);

  const items = category === 'todos' ? productos : productos.filter(item => item.categoria === category);

  console.log("Productos filtrados:", items);

  return (
    <section className='container m-auto flex justify-center items-center gap-12 flex-wrap'>
      {
        items.map((item, index) => {
          console.log(`Producto ${index}:`, item);
          return <ProductCard key={item?.id ?? index} item={item} />
        })
      }
    </section>
  );
}

export default ProductList;
