import React from "react"
import ItemCount from '../itemcount/ItemCount'

const ItemDetail = ({detalle}) =>{
    return (
        <div>
<h3> Detalle de: {detalle.name} </h3>
<img alt={detalle.name} src={detalle.image}/>
<p> {detalle.description} </p>
<p>$ {detalle.price} </p>
<ItemCount stock={detalle.stock}/>
        </div>
    )
}

export default ItemDetail