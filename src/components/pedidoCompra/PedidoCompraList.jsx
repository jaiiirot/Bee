import React from "react";
import { useEffect, useState } from "react";

const PedidoCompraList = ({ opciones }) => {

  const [datosCompra, setDatosCompra]=useState({})




  const opcionesPago = [
    "Efectivo",
    "Transferencia",
    "Tarjeta de débito",
    "Tarjeta de crédito",
  ];

  const metodosEnvio = [
    "Retiro en sucursal",
    "A domicilio (a cargo del comprador)",
  ];

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



  const [tela, setTela] = useState("");
  const [medioPago, setMedioPago] = useState("");
  const [metodoEnvio, setMetodoEnvio] = useState("");

  const seleccionarTela = (e) => {
    console.log(e.target.value);
    setTela(e.target.value);
  };
  const seleccionarMedioPago = (e) => {
    console.log(e.target.value);
    setMedioPago(e.target.value);
  };
  const seleccionarMetodoEnvio = (e) => {
    console.log(e.target.value);
    setMetodoEnvio(e.target.value);
  };

  const [disenio, setDisenio] = useState("");
  const [descripcionDisenio, setDescripcionDisenio] = useState("");
  const [prendas, setPrendas] = useState("");
  const [showDescipcionTela, setShowDescipcionTela] = useState(false);

  const seleccionarDisenio = (e) => {
    console.log(e.target.value);
    setDisenio(e.target.value);
    setShowDescipcionTela(!showDescipcionTela);
  };

  const descripcionDisenioTela = (e) => {
    console.log(e.target.value);
    setDescripcionDisenio(e.target.value);
  };
  const cantidadPrendras = (e) => {
    console.log(e.target.value);
    setPrendas(e.target.value);
  };


  const enviarSolicitud=()=>{
    setDatosCompra ( {
      tela: tela,
      disenioPropio: disenio,
      descripcionDisenio: descripcionDisenio,
      cantidadDePrendas: prendas,
      medioDePago:medioPago,
      metodoDeEnvio:metodoEnvio,
    })
  
    
  }
  console.log(datosCompra)

  return (
    <div className="section-presupuesto">
      <h2>¡Hacé tu pedido!</h2>

      <section className="form">
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
        </form>
      </section>

      <section className="section-tela">
        <div>
          <h3>Tela</h3>
        </div>
        <div className="opciones-menu menu-tela">
          {opciones.map((palabra, index) => (
            <div key={index} className="circulos-menu opcion-tela">
              <input
                type="radio"
                id={palabra}
                name="drone"
                value={palabra}
                onClick={seleccionarTela}
                required
              />
              <label htmlFor={palabra}>{palabra} </label>
            </div>
          ))}
        </div>
      </section>

      <section className="disenio">
        <div>
          <h2>¿Tienes tu propio diseño?</h2>
        </div>
        <div className="opciones-menu menu-disenio" required>
          <div className="circulos-menu opcion-diseño" >
            <input
              type="radio"
              id="conDisenio"
              name="drone"
              value="Sí"
              onClick={seleccionarDisenio}
            />
            <label htmlFor="conDisenio">Sí </label>
          </div>

          <div className="circulos-menu opcion-diseño">
            <input
              type="radio"
              id="sinDisenio"
              name="drone"
              value="No"
              onClick={seleccionarDisenio}
            />
            <label htmlFor="sinDisenio">No </label>
          </div>

          {showDescipcionTela ? (
            <div className="disenio-propio">
              <textarea
                name="mensaje"
                id="mensaje"
                placeholder="Breve descripción: diseño, colores,  etc."
                onChange={descripcionDisenioTela}
                required
              ></textarea>
            </div>
          ) : null}
        </div>
      </section>

      <section className="cantidad-prendas">
        <div>
          <h2>Indica cantidad de prendas por talle</h2>
        </div>
        <div className="cantidad-prendas">
          <textarea
            name="mensaje"
            id="mensaje"
            placeholder="Por ejemplo: 2 talle S y 3 talle M."
            onChange={cantidadPrendras}
            required
          ></textarea>
        </div>
      </section>

      <section className="opciones-menu medios-pago">
        <div>
          <h2>Medio de pago</h2>
        </div>
        <div className="opciones-menu menu-medios-pago">
          {opcionesPago.map((pago, index) => (
            <div key={index} className="circulos-menu">
              <input
                type="radio"
                id={pago}
                name="drone"
                value={pago}
                onClick={seleccionarMedioPago}
                required
              />
              <label htmlFor={pago}>{pago} </label>
            </div>
          ))}
        </div>
      </section>

      <section className="metodos-envio">
        <div>
          <h2>Método de envío</h2>
        </div>
        <div className="opciones-menu menu-medios-pago">
          {metodosEnvio.map((envio, index) => (
            <div key={index} className="circulos-menu opcion-tela">
              <input
                type="radio"
                id={envio}
                name="drone"
                value={envio}
                onClick={seleccionarMetodoEnvio}
                required
              />
              <label htmlFor={envio}>{envio} </label>
            </div>
          ))}
        </div>
      </section>

      <section className="boton-enviar">
        <button onClick={enviarSolicitud}>ENVIAR SOLICITUD</button>
      </section>
    </div>
  );
};

export default PedidoCompraList;
