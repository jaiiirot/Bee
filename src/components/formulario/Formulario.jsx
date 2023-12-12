export default function Formulario() {
  return (
    <section className="form">
      <div className="form-info">
        <h1>ENVIANOS TU CONSULTA</h1>
      </div>
      <form className="form-cont">
        <input type="text" id="nombre" name="nombre" placeholder="NOMBRE" />
        <input type="email" id="correo" name="correo" placeholder="CORREO" />
        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="TELEFONO"
        />
        <textarea name="mensaje" id="mensaje" placeholder="MENSAJE"></textarea>
        <button type="submit">ENVIAR</button>
      </form>
    </section>
  );
}
