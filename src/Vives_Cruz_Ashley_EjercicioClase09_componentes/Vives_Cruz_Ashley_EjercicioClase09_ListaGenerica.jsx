function Vives_Cruz_Ashley_EjercicioClase09_ListaGenerica({
  elementos,
  renderizarElemento,
  mensajeVacio = "No hay elementos para mostrar.",
}) {
  if (!elementos || elementos.length === 0) {
    return <p>{mensajeVacio}</p>;
  }

  return (
    <div className="lista">
      {elementos.map((elemento, indice) =>
        renderizarElemento(elemento, indice),
      )}
    </div>
  );
}

export default Vives_Cruz_Ashley_EjercicioClase09_ListaGenerica;