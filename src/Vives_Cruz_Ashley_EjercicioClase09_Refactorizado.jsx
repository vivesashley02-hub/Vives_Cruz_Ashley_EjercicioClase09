import Vives_Cruz_Ashley_EjercicioClase09_FormularioMatch from "./Vives_Cruz_Ashley_EjercicioClase09_componentes/Vives_Cruz_Ashley_EjercicioClase09_FormularioMatch";
import Vives_Cruz_Ashley_EjercicioClase09_ListaGenerica from "./Vives_Cruz_Ashley_EjercicioClase09_componentes/Vives_Cruz_Ashley_EjercicioClase09_ListaGenerica";
import Vives_Cruz_Ashley_EjercicioClase09_ResultadoMatch from "./Vives_Cruz_Ashley_EjercicioClase09_componentes/Vives_Cruz_Ashley_EjercicioClase09_ResultadoMatch";
import Vives_Cruz_Ashley_EjercicioClase09_TarjetaPerfume from "./Vives_Cruz_Ashley_EjercicioClase09_componentes/Vives_Cruz_Ashley_EjercicioClase09_TarjetaPerfume";

import { useTeroMatch } from "./Vives_Cruz_Ashley_EjercicioClase09_hooks/Vives_Cruz_Ashley_EjercicioClase09_useTeroMatch";

function Vives_Cruz_Ashley_EjercicioClase09_Refactorizado() {
  const {
    formulario,
    resultado,
    favoritos,
    mensaje,
    actualizarCampo,
    buscarPerfume,
    guardarResultado,
    eliminarGuardado,
  } = useTeroMatch();

  return (
    <main className="contenedor">
      <header className="encabezado">
        <p className="marca">TERO.CR</p>
        <h1>Tero Match</h1>
        <p>Encuentra el perfume ideal para ti</p>
      </header>

      <Vives_Cruz_Ashley_EjercicioClase09_FormularioMatch
        formulario={formulario}
        actualizarCampo={actualizarCampo}
        buscarPerfume={buscarPerfume}
      />

      {mensaje && <p className="mensaje">{mensaje}</p>}

      <Vives_Cruz_Ashley_EjercicioClase09_ResultadoMatch
        resultado={resultado}
        guardarResultado={guardarResultado}
      />

      <section className="panel">
        <h2>Perfumes favoritos</h2>

        <Vives_Cruz_Ashley_EjercicioClase09_ListaGenerica
          elementos={favoritos}
          mensajeVacio="Todavía no tienes perfumes favoritos."
          renderizarElemento={(perfume) => (
            <Vives_Cruz_Ashley_EjercicioClase09_TarjetaPerfume
              key={perfume.id}
              perfume={perfume}
              botonTexto="Eliminar"
              onAccion={eliminarGuardado}
              claseBoton="eliminar"
            />
          )}
        />
      </section>

      <section className="explicacion">
        <h2>Versión refactorizada con SRP y OCP</h2>

        <p>
          Se aplicó SRP separando la presentación en componentes, la lógica de
          negocio en un hook personalizado y el acceso a Firestore en un
          servicio.
        </p>

        <p>
          Se aplicó OCP utilizando componentes configurables mediante props.
          La tarjeta y la lista pueden extenderse sin modificar su código
          original.
        </p>
      </section>
    </main>
  );
}

export default Vives_Cruz_Ashley_EjercicioClase09_Refactorizado;