import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carro from "./Carro";
import CarroDetail from "./CarroDetail";
import { useTranslation } from "react-i18next";
import Layout from "./Layout";

function Carros(props) {
  const { t } = useTranslation();

  const location = useLocation();
  const [carros, setCarros] = useState([]);
  const [carroSelected, setCarroSelected] = useState();

  useEffect(() => {
    const URL =
      "https://raw.githubusercontent.com/dcgonzalezp/parcial1/master/datos.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setCarros(data);
      });
  }, []);

  return (
      <div className="container">
        <Row
          style={{
            display: "block",
          }}
        >
          <h1 style={{ color: "white" }}>{t("listadoCarros.carros")}</h1>
        </Row>

        <Row>
          <Col
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <h2 className="mt-2" style={{ color: "white" }}>
            {t("listadoCarros.listado")}
            </h2>
            <hr style={{ border: "2px dashed", opacity: 0.8 }}></hr>
            <Row>
              {carros.map((carro) => (
                <Col
                  style={{
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Carro carro={carro} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
  );
}

export default Carros;
