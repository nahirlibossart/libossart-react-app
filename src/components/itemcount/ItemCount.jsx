import React from "react"
import { useState } from "react"
const ItemCount = ({stock}) =>{
    const [count, setCount] = useState(1)
    const onAdd = () =>{
        console.log('Compraste un ítem')

    }
    const sumar = () =>{
        if (count < stock) {
        setCount(count + 1)
    }
    }
    const restar = () =>{
        if (count > 0) {
        setCount(count - 1)
    }
    }
    return(
        <>
        <div>
            <button className="btn btn-secondary" onClick={restar}> - </button>
            <button className="btn btn-dark" onClick={sumar}> + </button>
        </div>
        <span className="btn"> {count} </span>
        <button className="btn btn-warning" disabled={stock===0 || count===0} onClick={onAdd}> Comprar </button>
         </>
    )
}

export default ItemCount