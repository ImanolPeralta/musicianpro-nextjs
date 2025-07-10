import ProductDetail from "../../components/products/ProductDetail";
import { notFound } from "next/navigation";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

const fetchProductoPorId = async (id) => {
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return null;
  return { id: docSnap.id, ...docSnap.data() };
};

export async function generateStaticParams() {
  const querySnapshot = await getDocs(collection(db, "productos"));
  const productos = [];
  querySnapshot.forEach((doc) => {
    productos.push({ id: doc.id });
  });

  return productos.map((producto) => ({
    id: producto.id.toString(),
  }));
}

export default async function ProductoPage({ params }) {
  const { id } = params;
  const item = await fetchProductoPorId(id);

  if (!item) {
    notFound();
  }

  return <ProductDetail item={item} />;
}
