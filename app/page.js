import ProductList from "./components/products/ProductList";
import AutoSlider from "./components/ui/AutoSlider";
import CategoriaDestacada from "./components/ui/CategoriaDestacada";

export default function Inicio() {
  return (
    <>
      {/* Slider fuera del contenedor que limita el ancho */}
      <AutoSlider />
      <CategoriaDestacada/>

      {/* Contenido con margen, si lo necesitás */}
      <div className="container mx-auto px-4">
        <ProductList category="todos" />
      </div>
    </>
  );
}