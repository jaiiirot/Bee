import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContextCheckoutInformacion } from "../context/ContextCheckout";
export default function Formulario() {
  const [form, setForm] = useState({});
  const [condition, setCondition] = useState(false);
  const { setInformacion } = useContext(ContextCheckoutInformacion);
  const onSumitForm = ({ target }) => {
    console.log(target);
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
    const mensajeUrl = `https://wa.me/5492634328998?text=nombre%3A%20${nombre}%0Acorreo%3A%20${correo}%0Atelefono%3A%20${telefono}%0Amensaje%3A%20%22${mensaje}%22`;
    setInformacion(mensajeUrl);
    window.open(mensajeUrl, "_blank");
  };
  useEffect(() => {
    const { nombre, correo, telefono, mensaje } = form;
    if (
      nombre !== undefined &&
      nombre !== "" &&
      correo !== undefined &&
      correo !== "" &&
      telefono !== undefined &&
      telefono !== "" &&
      mensaje !== undefined &&
      mensaje !== ""
    ) {
      setCondition(true);
    } else {
      setCondition(false);
    }
  }, [onSumitForm, pushform]);
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
          required
        />
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="CORREO"
          onChange={onSumitForm}
          required
        />
        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="TELEFONO"
          onChange={onSumitForm}
          required
        />
        <textarea
          name="mensaje"
          id="mensaje"
          placeholder="MENSAJE"
          onChange={onSumitForm}
          required
        ></textarea>
        {condition ? (
          <Link to="/checkout" onClick={pushform} className="button-form">
            ENVIAR
          </Link>
        ) : (
          <button className="button-form">ENVIAR</button>
        )}
      </form>
    </section>
  );
}
