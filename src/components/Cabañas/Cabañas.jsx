import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wave from "react-wavify";
import Data from "../data/data";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

import "./cabañas.css";

const Cabañas = () => {
  const [modal, setModal] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const changeModal = (item) => {
    setModal([item]);
    setShow(true);
  };

  return (
    <>
      <div className="wave-cabañas">
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
      <div className="cabañas-body">
        <div className="container" id="cabañas">
          <div className="title">
            <h2>Nuestras cabañas</h2>
          </div>
          <div className="row">
            {Data.map((item) => {
              const { id, imageName, title, strong } = item;
              return (
                <div key={id} className="col-md-6 col-lg-4 mb-5">
                  <div className="text-center card_cabaña">
                    <Link onClick={() => changeModal(item)}>
                      <img src={`/images/${imageName}`} alt="imagen cabaña" />
                    </Link>
                  </div>
                  <div className="card_footer">
                    <h3 className="heading mb-0">{title}</h3>
                    <strong>{strong}</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="show-grid">
            {modal.map((modal) => {
              const {
                id,
                title,
                Aloja,
                camas,
                tamaño,
                entrada,
                salida,
                imageName,
                imageName1,
                imageName2,
                imageName3,
                imageName4,
              } = modal;
              return (
                <Container key={id}>
                  <Row>
                    <Col xs={12} md={12}>
                      <Carousel variant="light" className="Carousel">
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={`../images/${imageName}`}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={`../images/${imageName1}`}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={`../images/${imageName2}`}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={`../images/${imageName3}`}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={`../images/${imageName4}`}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={12}>
                      <div className="informacion">
                        <h2 className="cab__titulo">{title}</h2>
                        <div className="datos">
                          <p>
                            <strong> Aloja:</strong> {Aloja}
                          </p>
                          <p>
                            <strong>Camas:</strong>
                            {camas}
                          </p>
                          <p>
                            <strong>Tamaño:</strong> {tamaño}
                          </p>
                        </div>
                        <div className="entrada">
                          <p>
                            {" "}
                            <strong>Entrada:</strong> {entrada}
                          </p>
                          <p>
                            <strong>Salida:</strong>
                            {salida}
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              );
            })}
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Cabañas;
