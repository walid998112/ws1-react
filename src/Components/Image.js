import { Card } from "react-bootstrap"
import product from "../product"

const Image=()=>{
    return(
   
            <Card.Img variant="top" src={product.pathURL}  />
      
    )
}

export default Image