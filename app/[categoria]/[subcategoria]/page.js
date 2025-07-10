import ProductCard from "../../components/products/ProductCard";
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

export async function generateStaticParams() {
  const productos = await fetchProductos();

  const paths = productos.map((prod) => ({
    categoria: prod.categoria.toLowerCase(),
    subcategoria: prod.subcategoria.toLowerCase().replace(/ /g, "-"),
  }));

  // eliminar paths duplicados
  const uniquePaths = Array.from(
    new Map(paths.map((p) => [`${p.categoria}/${p.subcategoria}`, p])).values()
  );

  return uniquePaths;
}

export default async function CategoriaPage({ params }) {
  const { categoria, subcategoria } = params;

  const catFormateada =
    categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase();
  const subcatFormateada = subcategoria.replace(/-/g, " ");

  const productos = await fetchProductos();

  const productosFiltrados = productos.filter(
    (prod) =>
      prod.categoria === catFormateada &&
      prod.subcategoria.toLowerCase() === subcatFormateada.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-[#F5EFE6] py-10 px-2 sm:px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-[#1C1C1C] capitalize tracking-wide">
          {subcatFormateada}
        </h1>

        {productosFiltrados.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No se encontraron productos en esta subcategoría.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
            {productosFiltrados.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
