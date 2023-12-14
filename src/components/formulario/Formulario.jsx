import { useEffect, useState } from "react";

export default function Formulario() {
  const [form, setForm] = useState({});
  const onSumitForm = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const pushform = () => {
    const { nombre, correo, telefono, mensaje } = form;
    const mensajeUrl = `https://wa.me/5491141430021?text=nombre%3A%20${nombre}%0Acorreo%3A%20${correo}%0Atelefono%3A%20${telefono}%0Amensaje%3A%20%22${mensaje}%22`;
    const OtraPestaña = window.open(mensajeUrl, "_blank");
    OtraPestaña.focus();
    location.reload();
  };
  return (
    <section className="form">
      <div className="form-info">
        <h1>ENVIANOS TU CONSULTA</h1>
      </div>
      <form className="form-cont" onSubmit={onSubmit}>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="NOMBRE"
          onChange={onSumitForm}
        />
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="CORREO"
          onChange={onSumitForm}
        />
        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="TELEFONO"
          onChange={onSumitForm}
        />
        <textarea
          name="mensaje"
          id="mensaje"
          placeholder="MENSAJE"
          onChange={onSumitForm}
        ></textarea>
        <button type="submit" onClick={pushform}>
          ENVIAR
        </button>
      </form>
    </section>
  );
}
