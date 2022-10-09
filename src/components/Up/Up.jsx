import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { FaArrowAltCircleUp, FaWhatsapp } from "react-icons/fa";

import "./up.css";

const Up = () => {
  const [showbutton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      <div>
        <HashLink to="/#inicio" smooth="true">
          {showbutton && <FaArrowAltCircleUp className="up" />}
        </HashLink>
        <a
          href="https://wa.me/5493546406591?text="
          target="_blank"
          rel="noreferrer"
        >
          {showbutton && <FaWhatsapp className="whatsapp" id="whatsapp" />}
        </a>
      </div>
    </>
  );
};

export default Up;
