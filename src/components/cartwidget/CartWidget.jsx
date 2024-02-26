import { PiShoppingCartFill } from "react-icons/pi";
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
    return(
        <>
        <PiShoppingCartFill fontSize={'2rem'} />
        <Badge bg="warning">1</Badge>
         </>
    )
}
export default CartWidget