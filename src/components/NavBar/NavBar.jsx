import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaTimes, FaAlignJustify } from "react-icons/fa";
import "./navBar.css";

const NavBar = ({ imageSrc }) => {
  const [menuClicked, setMenuCliked] = useState(false);

  const toggleMenuClick = () => {
    setMenuCliked(!menuClicked);
  };

  return (
    <>
      <div id="inicio"></div>
      <nav className="navbar">
        <Link to="/">
          <img
            src={imageSrc}
            alt="Logo Cabañas Cerro Cristal"
            className="navbar__logo"
          />
        </Link>
        {menuClicked ? (
          <FaTimes
            size={25}
            className="navbar__menu"
            onClick={toggleMenuClick}
          />
        ) : (
          <FaAlignJustify
            size={25}
            className="navbar__menu"
            onClick={toggleMenuClick}
          />
        )}
        <ul
          className={
            menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
          }
        >
          <li className="navbar__item">
            <HashLink className="navbar__link" to="/#inicio" smooth="true">
              Inicio
            </HashLink>
          </li>
          <li className="navbar__item">
            <HashLink className="navbar__link" to="/#galeria" smooth="true">
              Galeria
            </HashLink>
          </li>
          <li className="navbar__item">
            <HashLink className="navbar__link" to="/#cabañas" smooth="true">
              Cabañas
            </HashLink>
          </li>
          <li className="navbar__item">
            <HashLink className="navbar__link" to="/#tarifas" smooth="true">
              Tarifas
            </HashLink>
          </li>
          <li className="navbar__item">
            <HashLink className="navbar__link" to="/#contacto" smooth="true">
              Contacto
            </HashLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
