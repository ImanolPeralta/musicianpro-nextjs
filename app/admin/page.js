"use client";

import { useState, useEffect } from "react";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import InlineLoading from "../components/ui/InLineLoading";

export default function AdminPage() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [categoria, setCategoria] = useState("");
  const [subcategoria, setSubcategoria] = useState("");
  const [imagen, setImagen] = useState(null);
  const [preview, setPreview] = useState(null);
  const [productos, setProductos] = useState([]);
  const [productoEditando, setProductoEditando] = useState(null);
  const [notificacion, setNotificacion] = useState("");
  const [subiendo, setSubiendo] = useState(false);
  const categoriasDisponibles = {
    Cordofonos: [
      "Guitarras Criollas",
      "Guitarras Electricas",
      "Violines",
      "Arpas",
      "Bajos",
    ],
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

  const handleEditarProducto = (producto) => {
    setProductoEditando(producto);
  };

  const mostrarNotificacion = (mensaje) => {
    setNotificacion(mensaje);
    setTimeout(() => setNotificacion(""), 3000); // se oculta a los 3 segundos
  };

  const handleActualizarProducto = async () => {
    const productoRef = doc(db, "productos", productoEditando.id);
    await updateDoc(productoRef, {
      ...productoEditando,
      precio: parseFloat(productoEditando.precio),
      stock: parseInt(productoEditando.stock),
    });
    setProductoEditando(null);
    fetchProductos();
  };

  const handleEliminarProducto = (producto) => {
    setProductoAEliminar(producto);
  };

  const handleUpload = async () => {
    if (!imagen) {
      console.log("No hay imagen seleccionada");
      return null;
    }
    try {
      console.log("Subiendo imagen:", imagen.name);
      const imgRef = ref(storage, `productos/${imagen.name}`);
      const snap = await uploadBytes(imgRef, imagen);
      const url = await getDownloadURL(snap.ref);
      console.log("URL de imagen subida:", url);
      return url;
    } catch (error) {
      console.error("Error subiendo imagen:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubiendo(true); // Comienza carga

      // Esperar un frame para mostrar spinner
      await new Promise((res) => requestAnimationFrame(() => res()));

      const imageUrl = imagen; // URL ingresada manualmente

      if (
        !titulo ||
        !descripcion ||
        !precio ||
        !stock ||
        !categoria ||
        !subcategoria ||
        !imageUrl
      ) {
        mostrarNotificacion(
          "❌ Completá todos los campos y pegá una URL de imagen."
        );
        setSubiendo(false);
        return;
      }

      const nuevoProducto = {
        titulo,
        descripcion,
        precio: parseFloat(precio),
        stock: parseInt(stock),
        categoria,
        subcategoria,
        imagen: imageUrl,
        timestamp: new Date(),
      };

      await addDoc(collection(db, "productos"), nuevoProducto);

      // Limpiar inputs
      setTitulo("");
      setDescripcion("");
      setPrecio("");
      setStock("");
      setCategoria("");
      setSubcategoria("");
      setImagen(""); // <- ahora es string, no file
      setPreview(null);

      mostrarNotificacion("✅ Producto agregado con éxito!");
      fetchProductos();
    } catch (error) {
      console.error("Error al guardar producto:", error);
      mostrarNotificacion("❌ Error al guardar el producto");
    } finally {
      setSubiendo(false); // Finaliza carga
    }
  };

  const fetchProductos = async () => {
    const snapshot = await getDocs(collection(db, "productos"));
    const productosData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProductos(productosData);
  };

  const [productoAEliminar, setProductoAEliminar] = useState(null);

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <div className="p-8 bg-[#F5EFE6] min-h-screen">
      {subiendo && (
        <div className="mb-6">
          <InlineLoading />
        </div>
      )}

      {/* ✅ Notificación visible */}
      {notificacion && (
        <div className="fixed top-4 right-4 bg-[#8B2C2C] text-[#F5EFE6] px-4 py-2 rounded-xl shadow-lg z-50 transition-all duration-300">
          {notificacion}
        </div>
      )}
      <h1 className="text-3xl font-bold text-[#1C1C1C] text-center mb-4 border-b-2 border-[#8B2C2C]">
        Panel de administración
      </h1>
      <h2 className="text-2xl font-semibold mb-4 text-[#1C1C1C] text-center">
        Crear un nuevo producto
      </h2>
      <div className="flex items-center justify-center bg-[#F5EFE6] mt-6">
        <form
          onSubmit={handleSubmit}
          className="bg-[#E8DCCB] p-6 rounded-xl max-w-xl space-y-4"
          style={{ boxShadow: `0 4px 8px #B0AFAF` }}
        >
          <input
            type="text"
            placeholder="Título del producto"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#F5EFE6] border border-gray-300"
          />
          <textarea
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#F5EFE6] border border-gray-300"
          />
          <input
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#F5EFE6] border border-gray-300"
          />
          <input
            type="number"
            placeholder="Stock disponible"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#F5EFE6] border border-gray-300"
          />
          <select
            value={categoria}
            onChange={(e) => {
              setCategoria(e.target.value);
              setSubcategoria(""); // reset subcategoría al cambiar categoría
            }}
            required
            className="w-full p-2 rounded bg-[#F5EFE6] border border-gray-300"
          >
            <option value="">Seleccionar categoría</option>
            {Object.keys(categoriasDisponibles).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            value={subcategoria}
            onChange={(e) => setSubcategoria(e.target.value)}
            required
            disabled={!categoria}
            className="w-full p-2 rounded bg-[#F5EFE6] border border-gray-300"
          >
            <option value="">Seleccionar subcategoría</option>
            {categoria &&
              categoriasDisponibles[categoria].map((subcat) => (
                <option key={subcat} value={subcat}>
                  {subcat}
                </option>
              ))}
          </select>
          <div className="space-y-4">
            <label className="text-center transition block font-bold">
              Sube la imagen del producto 👇🏼
            </label>
            <input
              type="text"
              placeholder="Pegá la URL de la imagen"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              className="w-full p-2 rounded bg-[#F5EFE6] border border-gray-300"
            />

            {imagen && (
              <div className="flex justify-center">
                <img
                  src={imagen}
                  alt="Previsualización"
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={subiendo}
            className={`w-full cursor-pointer bg-[#8B2C2C] hover:bg-[#641B1B] text-[#F5EFE6] py-2 px-4 rounded-2xl shadow-md text-center transition duration-300 block ${
              subiendo ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {subiendo ? "Subiendo..." : "Guardar producto"}
          </button>
        </form>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-[#1C1C1C] text-center mb-4">
          Productos existentes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {productos.map((prod) => (
            <div
              key={prod.id}
              className="bg-white p-4 rounded-2xl shadow"
              style={{ boxShadow: `0 4px 8px #B0AFAF` }}
            >
              <img
                src={prod.imagen}
                alt={prod.titulo}
                className="h-40 object-contain w-full mb-2"
              />
              <h3 className="text-lg font-bold">{prod.titulo}</h3>
              <p className="text-sm">{prod.descripcion}</p>
              <p className="text-[#8B2C2C] font-semibold mt-1">
                ${prod.precio}
              </p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleEditarProducto(prod)}
                  className="bg-[#8B2C2C] hover:bg-[#641B1B] text-white px-3 py-1 rounded-lg text-sm cursor-pointer"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleEliminarProducto(prod)}
                  className="bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded-lg text-sm cursor-pointer"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {productoEditando && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#E8DCCB] bg-opacity-50 border border-[#B0AFAF]">
          <div className="bg-[#E8DCCB] p-6 rounded-xl shadow-md w-full max-w-md space-y-4 relative">
            <button
              onClick={() => setProductoEditando(null)}
              className="absolute top-2 right-2 text-[#8B2C2C] font-bold text-xl cursor-pointer"
            >
              ×
            </button>

            <h2 className="text-xl font-bold text-[#1C1C1C] text-center">
              Editar producto
            </h2>

            <input
              value={productoEditando.titulo}
              onChange={(e) =>
                setProductoEditando({
                  ...productoEditando,
                  titulo: e.target.value,
                })
              }
              className="w-full p-2 rounded bg-[#F5EFE6] border border-gray-300"
            />
            <textarea
              value={productoEditando.descripcion}
              onChange={(e) =>
                setProductoEditando({
                  ...productoEditando,
                  descripcion: e.target.value,
                })
              }
              className="w-full p-2 rounded bg-[#F5EFE6] border border-gray-300"
            />
            <input
              type="number"
              value={productoEditando.precio}
              onChange={(e) =>
                setProductoEditando({
                  ...productoEditando,
                  precio: e.target.value,
                })
              }
              className="w-full p-2 rounded bg-[#F5EFE6] border border-gray-300"
            />
            <input
              type="number"
              value={productoEditando.stock}
              onChange={(e) =>
                setProductoEditando({
                  ...productoEditando,
                  stock: e.target.value,
                })
              }
              className="w-full p-2 rounded bg-[#F5EFE6] border border-gray-300"
            />

            <button
              onClick={handleActualizarProducto}
              className="w-full bg-[#8B2C2C] hover:bg-[#641B1B] text-[#F5EFE6] py-2 rounded-2xl transition duration-300 cursor-pointer"
            >
              Guardar cambios
            </button>
          </div>
        </div>
      )}
      {productoAEliminar && (
        <div className="fixed inset-0 bg-[#F5EFE6] flex items-center justify-center z-50">
          <div className="bg-[#F5EFE6] p-6 rounded-xl shadow-md max-w-sm w-full border border-[#8B2C2C]">
            <h2 className="text-xl font-bold text-[#8B2C2C] mb-4 text-center">
              ¿Eliminar producto?
            </h2>
            <p className="text-[#1C1C1C] text-center mb-6">
              Estás por eliminar <strong>{productoAEliminar.titulo}</strong>.
              Esta acción no se puede deshacer.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setProductoAEliminar(null)}
                className="px-4 py-2 rounded-lg bg-gray-300 text-[#1C1C1C] hover:bg-gray-400 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={async () => {
                  await deleteDoc(doc(db, "productos", productoAEliminar.id));
                  fetchProductos();
                  setProductoAEliminar(null);
                  mostrarNotificacion("✅ Producto eliminado con éxito");
                }}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 cursor-pointer"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
