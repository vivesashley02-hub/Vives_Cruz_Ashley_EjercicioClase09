import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../Vives_Cruz_Ashley_EjercicioClase09_configuracion/Vives_Cruz_Ashley_EjercicioClase09_firebase";

function Vives_Cruz_Ashley_EjercicioClase09_Monolitico() {
  const [nombre, setNombre] = useState("");
  const [aroma, setAroma] = useState("");
  const [ocasion, setOcasion] = useState("");
  const [intensidad, setIntensidad] = useState("");
  const [resultado, setResultado] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [mensaje, setMensaje] = useState("");

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

  useEffect(() => {
    const referencia = collection(db, "favoritosTeroMatch");

    const cancelarEscucha = onSnapshot(referencia, (datos) => {
      const lista = datos.docs.map((documento) => ({
        id: documento.id,
        ...documento.data(),
      }));

      setFavoritos(lista);
    });

    return () => cancelarEscucha();
  }, []);

  const buscarPerfume = (evento) => {
    evento.preventDefault();
    setMensaje("");

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
    setMensaje("");
  };

  const guardarFavorito = async () => {
    if (!resultado) {
      return;
    }

    try {
      await addDoc(collection(db, "favoritosTeroMatch"), {
        usuario: nombre,
        nombre: resultado.nombre,
        marca: resultado.marca,
        aroma: resultado.aroma,
        ocasion: resultado.ocasion,
        intensidad: resultado.intensidad,
        fecha: serverTimestamp(),
      });

      setMensaje("Perfume guardado en favoritos.");
    } catch (error) {
      console.error(error);
      setMensaje("No se pudo guardar el perfume.");
    }
  };

  const eliminarFavorito = async (id) => {
    try {
      await deleteDoc(doc(db, "favoritosTeroMatch", id));
      setMensaje("Perfume eliminado de favoritos.");
    } catch (error) {
      console.error(error);
      setMensaje("No se pudo eliminar el perfume.");
    }
  };

  return (
    <main className="contenedor">
      <header className="encabezado">
        <p className="marca">TERO.CR</p>
        <h1>Tero Match</h1>
        <p>Encuentra el perfume ideal para ti</p>
      </header>

      <section className="panel">
        <h2>Descubre tu match</h2>

        <form onSubmit={buscarPerfume} className="formulario">
          <label>
            Tu nombre
            <input
              type="text"
              value={nombre}
              onChange={(evento) => setNombre(evento.target.value)}
              placeholder="Escribe tu nombre"
            />
          </label>

          <label>
            Aroma favorito
            <select
              value={aroma}
              onChange={(evento) => setAroma(evento.target.value)}
            >
              <option value="">Selecciona una opción</option>
              <option value="dulce">Dulce</option>
              <option value="citrico">Cítrico</option>
              <option value="amaderado">Amaderado</option>
              <option value="floral">Floral</option>
              <option value="fresco">Fresco</option>
            </select>
          </label>

          <label>
            Ocasión
            <select
              value={ocasion}
              onChange={(evento) => setOcasion(evento.target.value)}
            >
              <option value="">Selecciona una opción</option>
              <option value="diario">Uso diario</option>
              <option value="trabajo">Trabajo</option>
              <option value="cita">Cita</option>
              <option value="fiesta">Fiesta</option>
            </select>
          </label>

          <label>
            Intensidad
            <select
              value={intensidad}
              onChange={(evento) => setIntensidad(evento.target.value)}
            >
              <option value="">Selecciona una opción</option>
              <option value="suave">Suave</option>
              <option value="media">Media</option>
              <option value="fuerte">Fuerte</option>
            </select>
          </label>

          <button type="submit">Encontrar mi perfume</button>
        </form>

        {mensaje && <p className="mensaje">{mensaje}</p>}
      </section>

      {resultado && (
        <section className="panel resultado">
          <p className="etiqueta">Tu perfume ideal es</p>
          <h2>{resultado.nombre}</h2>
          <p>{resultado.marca}</p>

          <p>
            Aroma: {resultado.aroma} | Ocasión: {resultado.ocasion} |
            Intensidad: {resultado.intensidad}
          </p>

          <button type="button" onClick={guardarFavorito}>
            Guardar en favoritos
          </button>
        </section>
      )}

      <section className="panel">
        <h2>Perfumes favoritos</h2>

        {favoritos.length === 0 ? (
          <p>Todavía no tienes perfumes favoritos.</p>
        ) : (
          <div className="lista">
            {favoritos.map((perfume) => (
              <article className="tarjeta" key={perfume.id}>
                <h3>{perfume.nombre}</h3>
                <p>{perfume.marca}</p>
                <p>Guardado por: {perfume.usuario}</p>

                <p>
                  {perfume.aroma} · {perfume.ocasion} · {perfume.intensidad}
                </p>

                <button
                  type="button"
                  className="eliminar"
                  onClick={() => eliminarFavorito(perfume.id)}
                >
                  Eliminar
                </button>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="explicacion">
        <h2>Versión monolítica</h2>

        <p>
          Este componente viola SRP porque contiene presentación, lógica de
          negocio y acceso a Firebase dentro de un solo archivo.
        </p>
      </section>
    </main>
  );
}

export default Vives_Cruz_Ashley_EjercicioClase09_Monolitico;
