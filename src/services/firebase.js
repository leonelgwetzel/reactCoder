import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvIswnGpSzuZD_h-BaUjXhSU-2NRkWSK0",
  authDomain: "reactcoder-ecommerce-cfa28.firebaseapp.com",
  projectId: "reactcoder-ecommerce-cfa28",
  storageBucket: "reactcoder-ecommerce-cfa28.appspot.com",
  messagingSenderId: "790220166657",
  appId: "1:790220166657:web:579237fdb487afda7e9200",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Obtener todos los documentos de firestore
export async function obtenerProductos() {
  const productsRef = collection(db, "products");
  const snapshot = await getDocs(productsRef);

  const productos = snapshot.docs.map((item) => ({
    ...item.data(),
    id: item.id,
  }));

  return productos;
}

//Obtener documento firestore
export async function obtenerProducto(idUrl) {
  const productsRef = collection(db, "products");
  const docRef = doc(productsRef, idUrl);
  const snapshot = await getDoc(docRef);

  return { ...snapshot.data(), id: snapshot.id };
}

//Obtener documento por categoria firestore
export async function obtenerProductoPorCategoria(categoryUrl) {
  const productRef = collection(db, "products");
  const q = query(productRef, where("cat", "==", categoryUrl));

  const snapshot = await getDocs(q);
  const productos = snapshot.docs.map((item) => ({
    ...item.data(),
    id: item.id,
  }));
  return productos;
}

export async function createOrder(order){
  const orderRef = collection(db,"order")

  let respuesta = await addDoc(orderRef, order);
  return respuesta.id;
}

export default db;
