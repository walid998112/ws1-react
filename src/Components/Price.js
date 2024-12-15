import { Button } from "react-bootstrap"
import product from "../product"

const Price=()=>{
    return(
          <Button variant="primary">Buy now {product.price} DT</Button>
    )
}

export default Price