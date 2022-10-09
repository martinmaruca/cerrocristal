import React from "react";
import Wave from "react-wavify";
import "./nosotros.css";

const Nosotros = () => {
  return (
    <>
      <div className="wave-nosotros">
        <Wave
          fill="#fff"
          paused={false}
          options={{
            height: 20,
            amplitude: 45,
            speed: 0.1,
            points: 5,
          }}
        />
      </div>
      <div className="container nosotros">
        <h2 className="nosotros__titulo">Así comenzó nuestra historia</h2>
        <div className="video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/Z2d4Avt2Obk"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Nosotros;

/*   width="560"
  height="315" */
