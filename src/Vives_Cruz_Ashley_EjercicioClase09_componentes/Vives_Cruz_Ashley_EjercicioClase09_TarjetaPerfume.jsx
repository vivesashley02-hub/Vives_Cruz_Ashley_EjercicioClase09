function Vives_Cruz_Ashley_EjercicioClase09_TarjetaPerfume({
  perfume,
  botonTexto,
  onAccion,
  claseBoton = "",
}) {
  return (
    <article className="tarjeta">
      <h3>{perfume.nombre}</h3>

      <p>{perfume.marca}</p>

      {perfume.usuario && (
        <p>
          <strong>Guardado por:</strong> {perfume.usuario}
        </p>
      )}

      <p>
        <strong>Aroma:</strong> {perfume.aroma}
      </p>

      <p>
        <strong>Ocasión:</strong> {perfume.ocasion}
      </p>

      <p>
        <strong>Intensidad:</strong> {perfume.intensidad}
      </p>

      {onAccion && (
        <button
          type="button"
          className={claseBoton}
          onClick={() => onAccion(perfume.id)}
        >
          {botonTexto}
        </button>
      )}
    </article>
  );
}

export default Vives_Cruz_Ashley_EjercicioClase09_TarjetaPerfume;