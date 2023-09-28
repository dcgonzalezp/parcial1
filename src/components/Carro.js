
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function Carro(props){
   return(
       <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">

           <Card.Body>
               <Card.Title>
               <Link to={"/Carro/" + props.carro.carModel}  > 
                {props.carro.carModel}
                </Link>
                </Card.Title>
               <Card.Text>
                   {props.carro.description}
               </Card.Text>
           </Card.Body>
       </Card>
   );
}

export default Carro;