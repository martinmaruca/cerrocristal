import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./formulario.css";

export default function ContactForm() {
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const initialValues = {
    name: "",
    email: "",
    checkin: "",
    checkout: "",
    adultos: "",
    niños: "",
    message: "",
  };

  const validate = (values) => {
    let errors = {};

    // Validación Nombre

    if (!values.name) {
      errors.name = <div className="error">Por favor ingrese un nombre. </div>;
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
      errors.name = (
        <div className="error">
          El nombre solo puede contener letras y espacios.
        </div>
      );
    }

    // Validación Email

    if (!values.email) {
      errors.email = <div className="error">Por favor ingrese un Email.</div>;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = (
        <div className="error">
          El email solo puede contener letras, numeros, puntos, guiones y guion
          bajo.
        </div>
      );
    }

    // Validación Adultos

    if (!values.adultos) {
      errors.adultos = (
        <div className="error">Por favor ingrese la cantidad de Adultos.</div>
      );
    } else if (!/^[0-6]]+$/.test(values.adultos)) {
    }

    // Validación Niños

    if (!values.niños) {
      errors.niños = (
        <div className="error">Por favor ingrese la cantidad de Niños.</div>
      );
    } else if (!/^[0-6]]+$/.test(values.niños)) {
    }

    // Validación Checkin

    if (!values.checkin) {
      errors.checkin = (
        <div className="error">Por favor ingrese la fecha de Entrada.</div>
      );
    } else if (values.checkin) {
    }

    // Validación Checkout

    if (!values.checkout) {
      errors.checkout = (
        <div className="error">Por favor ingrese la fecha de Salida.</div>
      );
    } else if (values.checkout) {
    }

    // Validación Mensaje

    if (!values.message) {
      errors.message = (
        <div className="error">Por favor ingrese un mensaje.</div>
      );
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.message)) {
    }

    return errors;
  };

  const onSubmit = (values, submitProps) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        } else if (response.ok) {
          setFormularioEnviado(true);

          submitProps.resetForm();
        } else {
          alert("Something went wrong!");
        }
        setTimeout(() => formularioEnviado(false), 2000);
        return response;
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="formulario">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        <div className="container formulario">
          <Form>
            <h2>Contacto</h2>
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-body">
              <div>
                <Field
                  type="name"
                  id="name"
                  name="name"
                  placeholder="Nombre"
                  className="input"
                />
                <div>
                  <ErrorMessage name="name" />
                </div>
              </div>

              <div>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  className="input"
                />
                <div>
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="pasajeros">
                <label htmlFor="pasajeros" className="label">
                  Pasajeros
                </label>
                <div className="pasajeros-input">
                  <Field
                    name="adultos"
                    as="select"
                    id="pasajeros"
                    placeholder="adultos"
                    className="select-css"
                  >
                    <option value="1">Adultos</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="4">3</option>
                    <option value="5">4</option>
                    <option value="6">5</option>
                    <option value="7">6</option>
                  </Field>
                  <ErrorMessage name="adultos" />
                </div>
                <div>
                  <Field
                    name="niños"
                    as="select"
                    id="pasajeros"
                    className="select-css"
                  >
                    <option value="niños">Niños</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </Field>
                  <ErrorMessage name="niños" />
                </div>
              </div>
              <div className="pasajeros-fechas">
                <div className="pasajeros-fechas-input">
                  <label htmlFor="pasajeros" className="label">
                    Fechas{" "}
                  </label>
                  <div>
                    <Field type="date" placeholder="CheckIn" name="checkin" />
                    <ErrorMessage name="checkin" />
                  </div>
                  <div>
                    <Field type="date" placeholder="Checkout" name="checkout" />
                    <ErrorMessage name="checkout" />
                  </div>
                </div>
              </div>

              <div>
                <Field
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Mensage"
                  className="input textarea"
                />
                <ErrorMessage name="message" />
              </div>
              <div data-netlify-recaptcha="true"></div>
              <button type="submit">Enviar</button>
              {formularioEnviado && (
                <p className="exito">Formulario enviado con exito!</p>
              )}
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
}
