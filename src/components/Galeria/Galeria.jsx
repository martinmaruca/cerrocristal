import React, { useState, useCallback } from "react";
import Wave from "react-wavify";
import ImageViewer from "react-simple-image-viewer";

import "./galeria.css";

const images = [
  "../images/image1.jpg",
  "../images/image2.jpg",
  "../images/image3.jpg",
  "../images/image4.jpg",
  "../images/image5.jpg",
  "../images/image6.jpg",
  "../images/image7.jpg",
  "../images/image8.jpg",
  "../images/image9.jpg",
  "../images/image10.jpg",
  "../images/image11.jpg",
  "../images/image12.jpg",
  "../images/image13.jpg",
  "../images/image14.jpg",
  "../images/image15.jpg",
  "../images/image16.jpg",
  "../images/image17.jpg",
  "../images/image18.jpg",
  "../images/image19.jpg",
  "../images/image20.jpg",
];

const Galeria = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <div className="wave-galeria">
        <Wave
          fill="#FFFF"
          paused={false}
          options={{
            height: 20,
            amplitude: 45,
            speed: 0.1,
            points: 5,
          }}
        />
      </div>
      <div className="container" id="galeria">
        <div className="titulo">
          <h2>Galeria de fotos</h2>
        </div>
        <div className="galeria">
          {images.map((src, index) => (
            <div className="imagen" key={index}>
              <img
                src={src}
                onClick={() => openImageViewer(index)}
                alt="Imagen Paisaje"
              />
            </div>
          ))}
        </div>
        {isViewerOpen && (
          <div className="ImageViewer">
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              onClose={closeImageViewer}
              disableScroll={true}
              closeOnClickOutside={true}
              className="ImageViewer"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Galeria;
