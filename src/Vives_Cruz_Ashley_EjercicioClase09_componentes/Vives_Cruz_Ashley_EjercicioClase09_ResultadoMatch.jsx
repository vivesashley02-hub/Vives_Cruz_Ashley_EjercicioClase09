import Vives_Cruz_Ashley_EjercicioClase09_TarjetaPerfume from "./Vives_Cruz_Ashley_EjercicioClase09_TarjetaPerfume";

function Vives_Cruz_Ashley_EjercicioClase09_ResultadoMatch({
  resultado,
  guardarResultado,
}) {
  if (!resultado) {
    return null;
  }

  return (
    <section className="panel resultado">
      <p className="etiqueta">Tu perfume ideal es</p>

      <Vives_Cruz_Ashley_EjercicioClase09_TarjetaPerfume
        perfume={resultado}
        botonTexto="Guardar en favoritos"
        onAccion={guardarResultado}
        claseBoton=""
      />
    </section>
  );
}

export default Vives_Cruz_Ashley_EjercicioClase09_ResultadoMatch;