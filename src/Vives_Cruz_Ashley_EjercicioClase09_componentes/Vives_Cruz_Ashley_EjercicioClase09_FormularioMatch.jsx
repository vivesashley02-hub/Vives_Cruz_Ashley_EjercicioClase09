function Vives_Cruz_Ashley_EjercicioClase09_FormularioMatch({
  formulario,
  actualizarCampo,
  buscarPerfume,
}) {
  return (
    <section className="panel">
      <h2>Descubre tu match</h2>

      <form onSubmit={buscarPerfume} className="formulario">
        <label>
          Tu nombre
          <input
            type="text"
            value={formulario.nombre}
            onChange={(evento) =>
              actualizarCampo("nombre", evento.target.value)
            }
            placeholder="Escribe tu nombre"
          />
        </label>

        <label>
          Aroma favorito
          <select
            value={formulario.aroma}
            onChange={(evento) =>
              actualizarCampo("aroma", evento.target.value)
            }
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
            value={formulario.ocasion}
            onChange={(evento) =>
              actualizarCampo("ocasion", evento.target.value)
            }
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
            value={formulario.intensidad}
            onChange={(evento) =>
              actualizarCampo("intensidad", evento.target.value)
            }
          >
            <option value="">Selecciona una opción</option>
            <option value="suave">Suave</option>
            <option value="media">Media</option>
            <option value="fuerte">Fuerte</option>
          </select>
        </label>

        <button type="submit">Encontrar mi perfume</button>
      </form>
    </section>
  );
}

export default Vives_Cruz_Ashley_EjercicioClase09_FormularioMatch;