
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Carro(props) {
    return (
        <Container style={{ width: '18rem', margin: 0, padding: 0}}>
            <Link style={{ textDecoration: 'none' }} to={"/Carros/" + props.carro.carModel}>
                <Card style={{ width: '18rem', height: '24rem', border: '5px solid' }} className="mb-3">
                    <Card.Body style={{ textAlign: 'left' }}>
                        <Card.Img variant="top" src={props.carro.image} />
                        <Card.Title style={{ fontSize: '2em' }}>
                            {props.carro.partName}
                        </Card.Title>
                        <Card.Title>
                            {props.carro.carMaker}
                        </Card.Title>
                        <Card.Text>
                            {props.carro.price} - {props.carro.carYear}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Container>
    );

}

export default Carro;