import { productos } from '../../data/productos';
import ProductCard from '../../components/products/ProductCard';

export default function CategoriaPage({ params }) {
  const { categoria, subcategoria } = params;

  // Formatear para coincidir con los datos originales
  const categoriaFormateada =
    categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase();

  const subcategoriaFormateada = subcategoria
    .replace(/-/g, ' ')
    .toLowerCase();

  const productosFiltrados = productos.filter(
    (prod) =>
      prod.categoria.toLowerCase() === categoriaFormateada.toLowerCase() &&
      prod.subcategoria.toLowerCase() === subcategoriaFormateada
  );

  return (
    <div className="min-h-screen bg-[#F5EFE6] py-10 px-2 sm:px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-[#1C1C1C] capitalize tracking-wide">
          {subcategoriaFormateada}
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

// Acá va el generateStaticParams actualizado
export async function generateStaticParams() {
  const categories = {
    Cordofonos: ["Guitarras Criollas", "Guitarras Electricas", "Violines", "Arpas", "Bajos"],
    Aerofonos: ["Saxofones", "Flautas", "Clarinetes", "Trompetas", "Armonicas"],
    Percusion: ["Baterias", "Tambores", "Cajones"],
    Electrofonos: [
      "Sintetizadores",
      "Teclados",
      "Bajos eléctricos",
      "Pianos Digitales",
      "Theremines",
      "Controladores MIDI",
    ],
  };

  const paths = [];

  for (const categoria in categories) {
    for (const subcat of categories[categoria]) {
      paths.push({
        categoria: categoria.toLowerCase(),
        subcategoria: subcat.toLowerCase().replace(/\s+/g, '-'),
      });
    }
  }

  return paths;
}
