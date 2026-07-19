import { useEffect, useState } from "react";

import {
  eliminarFavorito,
  escucharFavoritos,
  guardarFavorito,
} from "../Vives_Cruz_Ashley_EjercicioClase09_servicios/Vives_Cruz_Ashley_EjercicioClase09_perfumeServicio";

const perfumes = [
  {
    nombre: "Afnan 9PM",
    marca: "Afnan",
    aroma: "dulce",
    ocasion: "fiesta",
    intensidad: "fuerte",
  },
  {
    nombre: "Turathi Electric",
    marca: "Afnan",
    aroma: "citrico",
    ocasion: "diario",
    intensidad: "media",
  },
  {
    nombre: "Club de Nuit Intense",
    marca: "Armaf",
    aroma: "amaderado",
    ocasion: "trabajo",
    intensidad: "fuerte",
  },
  {
    nombre: "Odyssey Mandarin Sky",
    marca: "Armaf",
    aroma: "dulce",
    ocasion: "cita",
    intensidad: "media",
  },
  {
    nombre: "Lattafa Yara",
    marca: "Lattafa",
    aroma: "floral",
    ocasion: "diario",
    intensidad: "suave",
  },
  {
    nombre: "Afnan Supremacy",
    marca: "Afnan",
    aroma: "fresco",
    ocasion: "trabajo",
    intensidad: "media",
  },
];

export function useTeroMatch() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    aroma: "",
    ocasion: "",
    intensidad: "",
  });

  const [resultado, setResultado] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const cancelarEscucha = escucharFavoritos(setFavoritos);

    return () => cancelarEscucha();
  }, []);

  const actualizarCampo = (campo, valor) => {
    setFormulario((datosAnteriores) => ({
      ...datosAnteriores,
      [campo]: valor,
    }));
  };

  const buscarPerfume = (evento) => {
    evento.preventDefault();
    setMensaje("");

    const { nombre, aroma, ocasion, intensidad } = formulario;

    if (!nombre || !aroma || !ocasion || !intensidad) {
      setMensaje("Debes completar todos los campos.");
      return;
    }

    let perfumeEncontrado = perfumes.find(
      (perfume) =>
        perfume.aroma === aroma &&
        perfume.ocasion === ocasion &&
        perfume.intensidad === intensidad,
    );

    if (!perfumeEncontrado) {
      perfumeEncontrado = perfumes.find(
        (perfume) => perfume.aroma === aroma,
      );
    }

    if (!perfumeEncontrado) {
      perfumeEncontrado = perfumes[0];
    }

    setResultado(perfumeEncontrado);
  };

  const guardarResultado = async () => {
    if (!resultado) {
      return;
    }

    try {
      await guardarFavorito(formulario.nombre, resultado);
      setMensaje("Perfume guardado en favoritos.");
    } catch (error) {
      console.error(error);
      setMensaje("No se pudo guardar el perfume.");
    }
  };

  const eliminarGuardado = async (id) => {
    try {
      await eliminarFavorito(id);
      setMensaje("Perfume eliminado de favoritos.");
    } catch (error) {
      console.error(error);
      setMensaje("No se pudo eliminar el perfume.");
    }
  };

  return {
    formulario,
    resultado,
    favoritos,
    mensaje,
    actualizarCampo,
    buscarPerfume,
    guardarResultado,
    eliminarGuardado,
  };
}