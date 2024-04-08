import { PiShoppingCartFill } from "react-icons/pi";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = ({counter}) => {
    const {cartQuantity} = useContext(CartContext)
    
    return(
        <>
        <PiShoppingCartFill color='black' fontSize={'2rem'} />
        {cartQuantity() > 0 && <Badge bg="warning">{cartQuantity()}</Badge>}
         </>
    )
}
export default CartWidget