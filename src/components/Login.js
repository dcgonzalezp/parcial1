import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "./Layout";

function Login(props) {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [validationStates, setValidationStates] = useState({
    emailState: true,
    passwordState: false,
  });
  const [emailLogged, setEmailLogged] = useState(false);

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
    if (e.target.value.length < 6) {
      setValidationStates({ ...validationStates, passwordState: false });
    } else {
      setValidationStates({ ...validationStates, passwordState: true });
    }
  };

  const clickNext = () => {
    if (formValues.email.includes("@")) {
      setValidationStates({ ...validationStates, emailState: true });
      setEmailLogged(true);
    } else {
      setValidationStates({ ...validationStates, emailState: false });
    }
  };

  const clickSubmit = () => {
    if (validationStates.passwordState) {
      alert(JSON.stringify(formValues));
      navigate("/Carros");
    }
  };



  const exampleJSON = {
    email: formValues.email,
    password: formValues.password,
    role: formValues.role,
  };

  return (
      <Container
        className="shadow-lg"
        style={{
          width: "40%",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "20px",
        }}
      >
        <Row>
          <Col>
            <h1>{t("LogIn.acceder")}</h1>
            <Form>
              {emailLogged == false && (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-4">
                  {t("LogIn.uniandes")}
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={t("LogIn.labelCorreo")}
                    onChange={handleEmailChange}
                    value={formValues.email}
                    className={!validationStates.emailState ? "is-invalid" : ""}
                  />
                  {!validationStates.emailState && (
                    <Form.Text className="text-muted">
                      {t("LogIn.correoInvalido")}
                    </Form.Text>
                  )}
                  {validationStates.emailState && (
                    <Form.Text className="text-muted">
                      {t("LogIn.noCompartir")}
                    </Form.Text>
                  )}
                  <Row>
                    <p
                      className="text-start fw-bold mt-3"
                      style={{ color: "#0d6efd" }}
                    >
                      {t("LogIn.olvidar")}
                    </p>
                  </Row>
                  <Row>
                    <Col>
                      <p
                        className="text-start align-bottom"
                        style={{ color: "#0d6efd" }}
                      >
                        {t("LogIn.crear")}
                      </p>
                    </Col>
                    <Col>
                      <Button variant="primary" onClick={clickNext}>
                      {t("LogIn.siguiente")}
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              )}

              {emailLogged == true && (
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={formValues.email}
                    style={{ textAlign: "center" }}
                  />
                  <Form.Control
                    type="password"
                    placeholder={t("LogIn.labelContra")}
                    onChange={handlePasswordChange}
                    value={formValues.password}
                    className={
                      !validationStates.passwordState ? "is-invalid" : ""
                    }
                  />
                  {!validationStates.passwordState && (
                    <Form.Text className="text-muted">
                      {t("LogIn.contraInvalida")}
                    </Form.Text>
                  )}
                  <Row>
                    <Col>
                      <Button
                        variant="primary"
                        onClick={clickSubmit}
                        style={{ width: "10em", marginTop: "20px" }}
                      >
                        {t("LogIn.enviar")}
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
  );
}

export default Login;
