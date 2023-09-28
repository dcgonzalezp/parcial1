import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carro from "./Carro";
import CarroDetail from "./CarroDetail";

function Carros(props) {
    const location = useLocation();
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        const URL = "https://raw.githubusercontent.com/dcgonzalezp/parcial1/master/datos.json";
        fetch(URL).then(data => data.json()).then(data => {
            setCarros(data);
        });
    }, []);

    return (
        <div className="container">
            <Row>
                <h1>Carros</h1>
                
            </Row>

            <Row>
                <Col>
                    <h2 className="mt-2">Listado de carros</h2>
                    <hr></hr>
                    <Row>
                        {carros.map(carro => (
                            <Col>
                                <Carro carro={carro}/>
                            </Col>))
                        }

                    </Row>
                </Col>


            </Row>
        </div>

    )


}

export default Carros;