import React from "react";
import { FaPhoneAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contacto">
        <div>
          <FaPhoneAlt className="circulo" />
        </div>
        <h3>+549 - 03546 406591</h3>
        <p className="consultas">consultas y/o reservas</p>

        <div className="redes">
          <div>
            <p>Seguinos</p>
          </div>
          <div className="redes_iconos">
            <span>
              <a
                href="https://www.facebook.com/cerrocristal2019/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/cerrocristal2019/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="derechos">
        <p>Cabañas Cerro Cristal - la cumbrecita</p>
      </div>
    </div>
  );
};

export default Footer;
