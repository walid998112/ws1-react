import { Card } from "react-bootstrap"
import product from "../product"

const Description=()=>{
    return(
        <Card.Text>
               {product.description}
        </Card.Text>
    )
}

export default Description