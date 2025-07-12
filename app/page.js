import AutoSlider from "./components/ui/AutoSlider";
import BeneficiosSection from "./components/ui/BeneficiosSection";
import CategoriaDestacada from "./components/ui/CategoriaDestacada";
import OfertasSection from "./components/ui/OfertasSection";
import PromoLinks from "./components/ui/PromoLinks";
import ImagenesSlider from "./components/ui/ImagenesSlider";
import Newsletter from "./components/ui/Newsletter";
import ProductosDestacados from "./components/ui/ProductosDestacados";

export default function Inicio() {
  return (
    <>
      {/* Slider fuera del contenedor que limita el ancho */}
      <AutoSlider />
      <CategoriaDestacada />

      {/* Contenido con margen, si lo necesitás */}
      <div className="container mx-auto px-4">
        <OfertasSection />
        <PromoLinks />
        <ProductosDestacados />
        <ImagenesSlider />
        <BeneficiosSection />
        <Newsletter/>
      </div>
    </>
  );
}
