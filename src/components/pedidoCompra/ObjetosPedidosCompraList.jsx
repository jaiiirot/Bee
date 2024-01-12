import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import MensajeWhatsapp from "../EnviarMensajeWhatsApp/MensajeWhatsapp";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ObjetosPedidosCompraList = ({ titulo }) => {
  const [datosCompra, setDatosCompra] = useState({});
  const [count, setCount] = useState(1);
  const [showIconoExclamacion, setShowIconoExclamacion] = useState(false);
  const [abrirWhatsapp, setAbrirWhatsapp] = useState(false);
  const [medioPago, setMedioPago] = useState("");
  const [metodoEnvio, setMetodoEnvio] = useState("");
  const [disenio, setDisenio] = useState("");
  const [descripcionDisenio, setDescripcionDisenio] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

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

  const incrementar = () => {
    if (count < 100) {
      setCount(count + 1);
    } else {
      setCount(count);
    }
  };
  const disminuir = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const actualizarContador = (nuevoValor) => {
    if (!isNaN(nuevoValor) && nuevoValor >= 1 && nuevoValor <= 100) {
      setCount(nuevoValor);
    }
  };

  const getUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  const seleccionarMedioPago = (e) => {
    setMedioPago(e.target.value);
  };
  const seleccionarMetodoEnvio = (e) => {
    setMetodoEnvio(e.target.value);
  };

  const seleccionarDisenio = (e) => {
    setDisenio(e.target.value);
  };

  const descripcionDisenioTela = (e) => {
    setDescripcionDisenio(e.target.value);
  };

  const handleClick = () => {
    if (
      userData.name !== "" &&
      userData.name !== undefined &&
      userData.email !== "" &&
      userData.email !== undefined &&
      userData.phone !== "" &&
      userData.phone !== undefined &&
      disenio !== "" &&
      disenio !== undefined &&
      count !== "" &&
      count !== undefined &&
      descripcionDisenio !== "" &&
      descripcionDisenio !== undefined
    ) {
      setShowIconoExclamacion(false);
    } else {
      setShowIconoExclamacion(true);
    }
  };
  useEffect(() => {
    if (
      userData.name !== "" &&
      userData.name !== undefined &&
      userData.email !== "" &&
      userData.email !== undefined &&
      userData.phone !== "" &&
      userData.phone !== undefined &&
      disenio !== "" &&
      disenio !== undefined &&
      count !== "" &&
      count !== undefined &&
      descripcionDisenio !== "" &&
      descripcionDisenio !== undefined
    ) {
      setDatosCompra({
        usuario: userData.name,
        email: userData.email,
        phone: userData.phone,
        disenioPropio: disenio,
        descripcionDisenio: descripcionDisenio,
        cantidadObjetos: count,
        medioDePago: medioPago,
        metodoDeEnvio: metodoEnvio,
      });
      setAbrirWhatsapp(true);
    } else {
      setAbrirWhatsapp(false);
    }
  }, [userData, disenio, count, descripcionDisenio, medioPago, metodoEnvio]);

  return (
    <div className="section-presupuesto">
      <h1>¡Pide tu presupuesto!</h1>

      <section className="form">
        <form className="form-cont" onSubmit={onSubmit}>
          <div className="contenedor-input">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              onChange={getUserData}
            />

            {showIconoExclamacion && userData.name == "" ? (
              <div className="icono-exclamacion">
                <FontAwesomeIcon icon={faCircleExclamation} />
              </div>
            ) : null}
          </div>

          <div className="contenedor-input">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              onChange={getUserData}
            />

            {showIconoExclamacion && userData.email == "" ? (
              <div className="icono-exclamacion">
                <FontAwesomeIcon icon={faCircleExclamation} />
              </div>
            ) : null}
          </div>

          <div className="contenedor-input">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Teléfono"
              onChange={getUserData}
            />

            {showIconoExclamacion && userData.phone == "" ? (
              <div className="icono-exclamacion">
                <FontAwesomeIcon icon={faCircleExclamation} />
              </div>
            ) : null}
          </div>
        </form>
      </section>

      <section className="seccion-contador">
        {/* <CounterListContainer /> */}
        <>
          <div className="contador-titulo">
            <p>Cantidad</p>
          </div>

          <div className="contador-container">
            <div className="contador-container-numero">
              <input
                type="text"
                value={count}
                onChange={(e) =>
                  actualizarContador(parseInt(e.target.value, 10))
                }
              />
            </div>

            <div className="contador-flechas-container">
              <button onClick={incrementar}>
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
              <button onClick={disminuir}>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </div>
          </div>
        </>
      </section>

      <section className="disenio">
        <div>
          <h2>¿Tienes tu propio diseño?</h2>
        </div>
        <div className="menu-disenio">
          <div className="opciones-menu">
            <div className="circulos-menu opcion-diseño">
              <input
                type="radio"
                id="conDisenio"
                name="grupoDisenio"
                value="Sí"
                onClick={seleccionarDisenio}
              />
              <label htmlFor="conDisenio">Sí </label>
            </div>
            <div className="circulos-menu opcion-diseño">
              <input
                type="radio"
                id="sinDisenio"
                name="grupoDisenio"
                value="No"
                onClick={seleccionarDisenio}
              />
              <label htmlFor="sinDisenio">No </label>
            </div>
            {showIconoExclamacion && disenio == "" ? (
              <div className="icono-exclamacion">
                <FontAwesomeIcon icon={faCircleExclamation} />
              </div>
            ) : null}
          </div>

          <div className="disenio-propio">
            {showIconoExclamacion && descripcionDisenio == "" ? (
              <div className="icono-exclamacion">
                <FontAwesomeIcon icon={faCircleExclamation} />
              </div>
            ) : null}

            <textarea
              name="mensaje"
              id="mensaje2"
              placeholder="Breve descripción: diseño, colores,  etc."
              onChange={descripcionDisenioTela}
              required
            ></textarea>
          </div>
        </div>
      </section>

      <section style={{paddingTop:"0"}} className="medios-pago">
        <div>
          <h2>Medio de pago</h2>
        </div>
        <div className="opciones-menu menu-medios-pago">
          {opcionesPago.map((pago, index) => (
            <div key={index} className="circulos-menu">
              <input
                type="radio"
                id={pago}
                name="metodoPago"
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
        <div className="menu-metodos-envio opciones-menu ">
          {metodosEnvio.map((envio, index) => (
            <div key={index} className="circulos-menu opcion-tela">
              <input
                type="radio"
                id={envio}
                name="metodoEnvio"
                value={envio}
                onClick={seleccionarMetodoEnvio}
                required
              />
              <label htmlFor={envio}>{envio} </label>
            </div>
          ))}
        </div>
      </section>

      <section className="campos-obligatorios">
        {showIconoExclamacion ? (
          <div className="icono-exclamacion">
            <FontAwesomeIcon icon={faCircleExclamation} />
            <p>Campos Obligatorios</p>
          </div>
        ) : null}
      </section>

      <section className="boton-enviar">
        {abrirWhatsapp ? (
          <>
            <MensajeWhatsapp datosCompra={datosCompra} producto={titulo} />
          </>
        ) : (
          <button type="submit" onClick={handleClick}>
            ENVIAR SOLICITUD
          </button>
        )}
      </section>
    </div>
  );
};

export default ObjetosPedidosCompraList;
