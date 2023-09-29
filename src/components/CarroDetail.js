import { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
export default function CarroDetail() {

  const params = useParams();
  const [carro, setCarro] = useState();

  useEffect(() => {
    const URL = "https://raw.githubusercontent.com/dcgonzalezp/parcial1/master/datos.json";
    fetch(URL).then(data => data.json()).then(data => {
      const carroToSet = data.find((item) => {
        return item.carModel === params.carModel
      })
      setCarro(carroToSet)
    });
  }, []);

  return (
    <Container style={{backgroundColor: 'white', borderRadius: '10px', paddingTop: 12, paddingBottom: 12, border: '5px solid'}}>

        <Row>
          <Col>
            <Image className="w-100" src={carro?.image} rounded/>
          </Col>
          <Col style={{textAlign: 'left'}}>
            <h2 >{carro?.partName}</h2>
            <hr style={{border: '2px solid', opacity: .8}}></hr>
            <Row >
              <Col><p style={{color: 'red', fontWeight: 'bolder', margin: '5px auto'}}>Fabricante</p></Col>
              <Col><p style={{margin:'5px auto'}}>{carro?.carMaker}</p></Col>
            </Row>
            <Row>
              <Col><p style={{color: 'red', fontWeight: 'bolder', margin: '5px auto'}}>Modelo</p></Col>
              <Col><p style={{margin:'5px auto'}}>{carro?.carModel}</p></Col>
            </Row>
            <Row>
              <Col><p style={{color: 'red', fontWeight: 'bolder', margin: '5px auto'}}>Año</p></Col>
              <Col><p style={{margin:'5px auto'}}>{carro?.carYear}</p></Col>
            </Row>
            <Row>
              <Col><p style={{color: 'red', fontWeight: 'bolder', margin: '5px auto'}}>Disponibilidad en línea</p></Col>
              <Col><p style={{margin:'5px auto'}}>{carro?.available? 'Si':'No'}</p></Col>
            </Row>
            <Row>
              <Col><p style={{color: 'red', fontWeight: 'bolder', margin: '5px auto'}}>Precio</p></Col>
              <Col><p style={{margin:'5px auto'}}>{carro?.price}</p></Col>
            </Row>
            <Row>
              <Col><p style={{color: 'red', fontWeight: 'bolder', margin: '5px auto'}}>Descripción:</p></Col>
            </Row>
            <Row>
              <Col><p >{carro?.description}</p></Col>
            </Row>
          </Col>
        </Row>

    </Container>
  );
}