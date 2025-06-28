// lib/products.js
import { db } from './firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

export async function getAllProducts() {
  const productosCol = collection(db, 'productos');
  const snapshot = await getDocs(productosCol);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getProductById(id) {
  const ref = doc(db, 'productos', id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
}