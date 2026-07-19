import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../Vives_Cruz_Ashley_EjercicioClase09_configuracion/Vives_Cruz_Ashley_EjercicioClase09_firebase";

const coleccionFavoritos = collection(db, "favoritosTeroMatch");

export function escucharFavoritos(actualizarFavoritos) {
  return onSnapshot(coleccionFavoritos, (datos) => {
    const favoritos = datos.docs.map((documento) => ({
      id: documento.id,
      ...documento.data(),
    }));

    actualizarFavoritos(favoritos);
  });
}

export async function guardarFavorito(usuario, perfume) {
  await addDoc(coleccionFavoritos, {
    usuario,
    nombre: perfume.nombre,
    marca: perfume.marca,
    aroma: perfume.aroma,
    ocasion: perfume.ocasion,
    intensidad: perfume.intensidad,
    fecha: serverTimestamp(),
  });
}

export async function eliminarFavorito(id) {
  const referenciaDocumento = doc(db, "favoritosTeroMatch", id);
  await deleteDoc(referenciaDocumento);
}