import { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { useTranslation } from "react-i18next";
export default function CarroDetail() {
  const { t } = useTranslation();

  
  const params = useParams();
  const [carro, setCarro] = useState();

  useEffect(() => {
    const URL =
      "https://raw.githubusercontent.com/dcgonzalezp/parcial1/master/datos.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        const carroToSet = data.find((item) => {
          return item.carModel === params.carModel;
        });
        setCarro(carroToSet);
      });
  }, []);

  return (
      <Container
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          paddingTop: 12,
          paddingBottom: 12,
          border: "5px solid",
        }}
      >
        <Row>
          <Col>
            <Image className="w-100" src={carro?.image} rounded />
          </Col>
          <Col style={{ textAlign: "left" }}>
            <h2>{carro?.partName}</h2>
            <hr style={{ border: "2px solid", opacity: 0.8 }}></hr>
            <Row>
              <Col>
                <p
                  style={{
                    color: "red",
                    fontWeight: "bolder",
                    margin: "5px auto",
                  }}
                >
                  {t("detalleCarro.fabricante")}
                </p>
              </Col>
              <Col>
                <p style={{ margin: "5px auto" }}>{carro?.carMaker}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p
                  style={{
                    color: "red",
                    fontWeight: "bolder",
                    margin: "5px auto",
                  }}
                >
                  {t("detalleCarro.modelo")}
                </p>
              </Col>
              <Col>
                <p style={{ margin: "5px auto" }}>{carro?.carModel}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p
                  style={{
                    color: "red",
                    fontWeight: "bolder",
                    margin: "5px auto",
                  }}
                >
                  {t("detalleCarro.año")}
                </p>
              </Col>
              <Col>
                <p style={{ margin: "5px auto" }}>{carro?.carYear}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p
                  style={{
                    color: "red",
                    fontWeight: "bolder",
                    margin: "5px auto",
                  }}
                >
                  {t("detalleCarro.dispo")}
                </p>
              </Col>
              <Col>
                <p style={{ margin: "5px auto" }}>
                 {carro?.available ? t("detalleCarro.dispoSi") : "No"}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p
                  style={{
                    color: "red",
                    fontWeight: "bolder",
                    margin: "5px auto",
                  }}
                >
                  {t("detalleCarro.precio")}
                </p>
              </Col>
              <Col>
                <p style={{ margin: "5px auto" }}>{carro?.price}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p
                  style={{
                    color: "red",
                    fontWeight: "bolder",
                    margin: "5px auto",
                  }}
                >
                  {t("detalleCarro.descripcion")}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{carro?.description}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  );
}
