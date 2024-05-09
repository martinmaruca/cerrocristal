import React from "react";
import Wave from "react-wavify";
import "./tarifas.css";

const Tarifas = () => {
  return (
    <>
      <div>
        <Wave
          className="wave"
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
      <div className="tarifas-body" id="tarifas">
        <div className="container">
          <div className="tarifas">
            <h1>Tarifas Mayo y Junio 2024</h1>
            <h3 className="tarifas__fecha">Reservando 3 días o más pagando en efectivo 10% de descuento</h3>
            <p>Con servicio de mucama.</p>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="columna" scope="col">
                    Cabaña
                  </th>
                  /*
                  <th className="columna" scope="col">
                    Precio x Noche
                  </th>
                  */
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">2 pax monoambiente estandar</th>
                 /* <td>$ 17800</td>*/
                </tr>
                <tr>
                  <th scope="row">2 pax 2 ambientes</th>
                  /* <td>$ 19800</td> */
                </tr>
                <tr>
                  <th scope="row">2 pax monoambiente c/ jacuzzi doble</th>
                  /* <td>$ 21800</td> */
                </tr>
                <tr>
                  <th scope="row">Cabaña 4 pax chica estandar</th>
                  /* <td>$ 26900</td> */
                </tr>
                <tr>
                  <th scope="row">Cabaña 4 pax grande estandar</th>
                  /* <td>$ 33500</td> */
                </tr>
                <tr>
                  <th scope="row">Cabaña 4 pax con jacuzzi</th>
                  /* <td>$ 35800</td> */
                </tr>
                <tr>
                  <th scope="row">Cabaña 5/6 pax estandar</th>
                  /* <td>$ 39500</td> */
                </tr>
              </tbody>
            </table>
            <div>
              <p className="aviso">
                {" "}
                las tarifas pueden variar sin aviso previo.
              </p>
            </div>
          </div>

          /*
          <div className="tarifas">
            <h1>Tarifas Marzo y Abril 2023</h1>
            <h3 className="tarifas__fecha">6 de Marzo al 6 de Abril</h3>
            <p>Paquete minimo 4 noches con servicio de mucama y desayuno.</p>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="columna" scope="col">
                    Cabaña
                  </th>
                  <th className="columna" scope="col">
                    Precio x Noche
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">2 pax monoambiente estandar</th>
                  <td>$ 14500</td>
                </tr>
                <tr>
                  <th scope="row">2 pax 2 ambientes</th>
                  <td>$ 15800</td>
                </tr>
                <tr>
                  <th scope="row">2 pax monoambiente c/ jacuzzi doble</th>
                  <td>$ 17500</td>
                </tr>
                <tr>
                  <th scope="row">Cabaña 4 pax chica estandar</th>
                  <td>$ 21500</td>
                </tr>
                <tr>
                  <th scope="row">Cabaña 4 pax grande estandar</th>
                  <td>$ 26800</td>
                </tr>
                <tr>
                  <th scope="row">Cabaña 4 pax con jacuzzi</th>
                  <td>$ 28600</td>
                </tr>
                <tr>
                  <th scope="row">Cabaña 5/6 pax estandar</th>
                  <td>$ 31600</td>
                </tr>
              </tbody>
            </table>
            <div>
              <p className="aviso">
                {" "}
                las tarifas pueden variar sin aviso previo.
              </p>
            </div>
          </div>
          */
          <div className="condiciones">
            <h2>Condiciones de contratación:</h2>
            <p>
              <span>•</span> Los importes de las reservas seran tomados como
              cancelacion de dia/s de alojamiento congelando su valor (no el del
              total de la estadia)
            </p>
            <p className="destacado">
              <span>•</span> No se aceptan mascotas de ningun tipo.
            </p>
            <p className="destacado">
              <span>•</span> No se podrán alojar más pasajeros que los
              contratados primariamente a excepción de consulta previa.
            </p>
            <p>
              <span>•</span> La utilización de las instalaciones comunes serán
              de uso exclusivo de los pasajeros alojados.
            </p>
            <p>
              <span>•</span> No se aceptarán visitas que hagan uso de los
              lugares comunes destinados a los pasajeros alojados en el
              complejo, salvo autorización (asadores, reposeras, etc.).
            </p>
            <p>
              <span>•</span> Está expresamente prohibido el llevar vajilla y/o
              enseres existentes de una a otra cabaña.
            </p>
            <p className="destacado">
              <span>•</span> Usted encontrará un listado de todos los
              implementos que contiene la cabaña, los que serán revisados al
              retirarse de la misma.
            </p>
            <p className="destacado">
              <span>•</span> Las reparaciones ó reposición (de desperfectos o
              roturas ocasionadas por los inquilinos) serán abonadas antes de
              retirarse del complejo.
            </p>
          </div>
          <div className="importante">
            <h3>importante</h3>
            <div className="row">
              <div className="col-6">
                <p>
                  Las <strong>TARIFAS</strong> son por{" "}
                  <strong>
                    NOCHE y por <br />
                    CABAÑA.
                  </strong>
                </p>
              </div>
              <div className="col-6">
                <p>
                  Formas de Pago: <strong>EFECTIVO / TRANSFERENCIAS</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tarifas;
