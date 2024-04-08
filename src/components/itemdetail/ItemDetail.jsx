import React, { useContext, useState } from "react"
import ItemCount from '../itemcount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({detalle}) =>{
const [compra, setCompra] = useState(false)   
const {addItem, itemQuantity} = useContext(CartContext)

    const onAdd = (cantidad) =>{
        addItem(detalle, cantidad)
        setCompra(true)
    }
    const stockInCart = itemQuantity(detalle.id)
    return (
        <div>
<h3> Detalle de: {detalle.name} </h3>
<img alt={detalle.name} src={detalle.image}/>
<p className="fs-5"> {detalle.description} </p>
<p className="fs-5">$ {detalle.price} </p>
{ compra && <p className='fw-bold'> Ya agragaste {detalle.name} en el carrito! </p> }
{ detalle.stock < 5 && <p style={{color: 'red'}}> Apurate! Quedan pocas unidades en el stock </p> }
{ compra ? <Link className="btn btn-success" to='/cart'>Ir al carrito</Link> : <ItemCount stock={detalle.stock - stockInCart} onAdd={onAdd}/> }
        </div>
    )
}

export default ItemDetail