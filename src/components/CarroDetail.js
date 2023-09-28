import { useParams } from "react-router-dom";
export default function CarroDetail() {
 const params = useParams();
 return (
   <div>
     <h1>I am {params.carModel}</h1>
   </div>
 );
}