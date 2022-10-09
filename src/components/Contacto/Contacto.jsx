import React from "react";
import Formulario from "../Formulario/Formulario";
import Wave from "react-wavify";

import "./contacto.css";

const Contacto = () => {
  return (
    <>
      <div className="wave">
        <Wave
          fill="#ebeaeb"
          paused={false}
          options={{
            height: 20,
            amplitude: 45,
            speed: 0.1,
            points: 5,
          }}
        />
      </div>
      <div id="contacto">
        <Formulario className="contacto" />
      </div>
    </>
  );
};

export default Contacto;
