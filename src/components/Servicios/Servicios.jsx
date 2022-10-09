import React from "react";
import "./servicios.css";
import {
  FaTv,
  FaWifi,
  FaFire,
  FaUtensils,
  FaCar,
  FaBed,
  FaUmbrella,
  FaMapMarkerAlt,
  FaBaby,
  FaDumpsterFire,
  FaShoePrints,
  FaRegHandPointer,
  FaSpinner,
  FaRavelry,
  FaMaxcdn,
  FaMugHot,
  FaWineGlass,
} from "react-icons/fa";

const Servicios = () => {
  return (
    <>
      <div className="servicios">
        <div className="container">
          <div className="row">
            <div className="servicios_titulo">
              <h2>SERVICIOS</h2>
              <p>
                Servicios que brinda el complejo Cabañas Cerro Cristal, <br />
                atendido por sus dueños durante los 365 días del año.
              </p>
            </div>
            <ul className="col-12 col-md-6 servicios_lista izquierda">
              <li>
                <FaTv /> Televisión satelital (Direct tv).
              </li>
              <li>
                <FaWifi /> Wi Fi dentro del complejo.
              </li>
              <li>
                <FaFire /> Calefacción por tiro balanceado.
              </li>
              <li>
                <FaMaxcdn /> Servicio de mucama.
              </li>
              <li>
                <FaRavelry /> Recambio de toallas y toallón diario.
              </li>
              <li>
                <FaSpinner /> Secador de pelo.
              </li>
              <li>
                <FaWineGlass /> Cocinas completamente equipadas. Vajilla
                completa.
              </li>
              <li>
                <FaRegHandPointer /> Microondas, Cafetera, Tostadora electrica
                en todas las unidades.
              </li>
              <li>
                <FaBed /> Todas las unidades cuentan con una cama matrimonial.
              </li>
            </ul>
            <ul className="col-12 col-md-6 servicios_lista">
              <li>
                <FaCar /> Cochera techada.
              </li>
              <li>
                <FaBaby /> Cunas sin cargo adicional (consultar disponibilidad).
              </li>
              <li>
                <FaMugHot /> Servico de Desayuno (consultar).
              </li>
              <li>
                <FaUtensils /> Servico de Rotiseria (Solo en temporada Alta).
              </li>
              <li>
                <FaShoePrints /> Frente al río.
              </li>
              <li>
                <FaUmbrella /> Reposeras y sombrillas y parrillas.
              </li>
              <li>
                <FaMapMarkerAlt /> Ubicadas a 200 metros del casco historico
                cerca de negocios, restaurantes, proveeduría etc.
              </li>
              <li>
                <FaDumpsterFire /> Asadores individuales fuera de las unidades.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicios;
