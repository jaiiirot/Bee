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
    console.log(
      `mi nombre es ${nombre}, mi correo es ${correo}, mi telefono es ${telefono} y mi mensaje es ${mensaje}`
    );
    location.href = `https://wa.me/5491141430021?text=Mi%20nombre%20es%20${nombre}%0Ami%20correo%20es%20${correo}%0Ami%20telefono%20es%20${telefono}%0Ami%20mensaje%20es%20%0A${mensaje}`;
  };
  useEffect(() => {}, [form]);
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
