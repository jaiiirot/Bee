import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
// import MensajeWhatsapp from "../EnviarMensajeWhatsApp/MensajeWhatsapp";
import { Link } from "react-router-dom";
const PedidoCompraList = ({ opciones, titulo }) => {
  const [datosCompra, setDatosCompra] = useState({});

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

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const getUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  const [tela, setTela] = useState("");
  const [medioPago, setMedioPago] = useState("");
  const [metodoEnvio, setMetodoEnvio] = useState("");

  const seleccionarTela = (e) => {
    setTela(e.target.value);
  };
  const seleccionarMedioPago = (e) => {
    setMedioPago(e.target.value);
  };
  const seleccionarMetodoEnvio = (e) => {
    setMetodoEnvio(e.target.value);
  };

  const [disenio, setDisenio] = useState("");
  const [descripcionDisenio, setDescripcionDisenio] = useState("");
  const [prendas, setPrendas] = useState("");

  const seleccionarDisenio = (e) => {
    setDisenio(e.target.value);
  };

  const descripcionDisenioTela = (e) => {
    setDescripcionDisenio(e.target.value);
  };
  const cantidadPrendras = (e) => {
    setPrendas(e.target.value);
  };

  const [showIconoExclamacion, setShowIconoExclamacion] = useState(false);
  const handleClick = () => {
    if (
      userData.name == "" &&
      userData.email == "" &&
      userData.phone == "" &&
      disenio == "" &&
      prendas == "" &&
      descripcionDisenio == ""
    ) {
      setShowIconoExclamacion(true);
    } else if (
      userData.name.length > 0 &&
      userData.email.length > 0 &&
      userData.phone.length > 0 &&
      disenio.length > 0 &&
      prendas.length > 0 &&
      descripcionDisenio.length > 0
    ) {
      enviarInformacion();
    } else {
      setShowIconoExclamacion(true);
    }
  };

  //=======================================================

  const enviarWhatsApp = () => {
    const numeroWhatsApp = "51950011434";
    let mensaje =
      "Hola, mi nombre es *" +
      datosCompra.usuario +
      "* quisiera solicitar un presupuesto. Estos son mis datos:";

    if (datosCompra.email) mensaje += "\n*Email:* " + datosCompra.email;
    if (datosCompra.phone) mensaje += "\n*Teléfono:* " + datosCompra.phone;
    if (producto) mensaje += "\n*Producto:* " + producto;
    if (datosCompra.tela) mensaje += "\n*Tela:* " + datosCompra.tela;
    if (datosCompra.disenioPropio)
      mensaje += "\n*Diseño Propio:* " + datosCompra.disenioPropio;
    if (datosCompra.descripcionDisenio)
      mensaje += "\n*Descripción diseño:* " + datosCompra.descripcionDisenio;
    if (datosCompra.cantidadDePrendas)
      mensaje +=
        "\n*Cantidad de prendas por talle:* " + datosCompra.cantidadDePrendas;
    if (datosCompra.cantidadObjetos)
      mensaje += "\n*Cantidad de objetos:* " + datosCompra.cantidadObjetos;
    if (datosCompra.medioDePago)
      mensaje += "\n*Medio de pago:* " + datosCompra.medioDePago;
    if (datosCompra.metodoDeEnvio)
      mensaje += "\n*Método de envío:* " + datosCompra.metodoDeEnvio;

    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(enlaceWhatsApp, "_blank");
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
      prendas !== "" &&
      prendas !== undefined &&
      descripcionDisenio !== "" &&
      descripcionDisenio !== undefined
    ) {
      setAbrirWhatsapp(true);
    } else {
      setAbrirWhatsapp(false);
    }
  }, [
    datosCompra,
    userData,
    tela,
    disenio,
    descripcionDisenio,
    prendas,
    medioPago,
    metodoEnvio,
  ]);

  const [abrirWhatsapp, setAbrirWhatsapp] = useState(false);

  const enviarInformacion = () => {
    setDatosCompra({
      usuario: userData.name,
      email: userData.email,
      phone: userData.phone,
      tela: tela,
      disenioPropio: disenio,
      descripcionDisenio: descripcionDisenio,
      cantidadDePrendas: prendas,
      medioDePago: medioPago,
      metodoDeEnvio: metodoEnvio,
    });
  };

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

      {opciones.length > 0 ? (
        <section className="section-tela">
          <div>
            <h2>Tela</h2>
          </div>

          <div className="opciones-menu menu-tela">
            {showIconoExclamacion && tela == "" ? (
              <div className="icono-exclamacion">
                <FontAwesomeIcon icon={faCircleExclamation} />
              </div>
            ) : null}
            {opciones.map((palabra, index) => (
              <div key={index} className="circulos-menu opcion-tela">
                <input
                  type="radio"
                  id={palabra}
                  name="tela"
                  value={palabra}
                  onClick={seleccionarTela}
                  required
                />
                <label htmlFor={palabra}>{palabra} </label>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="disenio">
        <div>
          <h2>¿Tienes tu propio diseño?</h2>
        </div>
        <div className="menu-disenio">
          <div className="opciones-menu menu-de-diseno-mobile">
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

      <section className="cantidad-prendas-container">
        <div>
          <h2>Indica cantidad de prendas por talle</h2>
        </div>
        <div className="cantidad-prendas">
          {showIconoExclamacion && prendas == "" ? (
            <div className="icono-exclamacion">
              <FontAwesomeIcon icon={faCircleExclamation} />
            </div>
          ) : null}
          <textarea
            name="mensaje"
            id="mensaje"
            placeholder="Por ejemplo: 2 talle S y 3 talle M."
            onChange={cantidadPrendras}
            required
          ></textarea>
        </div>
      </section>

      <section className="medios-pago">
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
          <Link to="/checkout" onClick={enviarWhatsApp}>
            ENVIAR SOLICITUD
          </Link>
        ) : (
          <button type="submit" onClick={handleClick}>
            ENVIAR SOLICITUD
          </button>
        )}
      </section>
      {/* 
      {abrirWhatsapp ? (
        <MensajeWhatsapp datosCompra={datosCompra} producto={titulo} />
      ) : null} */}
    </div>
  );
};

export default PedidoCompraList;
