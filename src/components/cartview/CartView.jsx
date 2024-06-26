import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartView = () => {
    const {cart, removeItem, cartPriceTotal, clear}= useContext(CartContext)
  return (
    <div>
        <h2>Tu carrito</h2>
        <div>
            {cart.map((compra)=>{
                return(
                    <div key={compra.id} style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', padding:'2rem'}}>
                       <img src={compra.image} alt={compra.name} style={{width:'8rem'}}/> 
                       <span>{compra.name}</span>
                       <span>{compra.quantity}</span>
                       <span>${compra.price},00</span>
                       <span>Precio final: ${compra.price * compra.quantity},00</span>
                       <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>X</button>
                    </div>
                )
            })}
        </div>
        <p className='d-flex justify-content-around fw-bold'>Total a pagar:${cartPriceTotal()},00 </p>
        <div className='d-flex justify-content-around'>
        <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
        <Link className='btn btn-success' to='/checkout'>Finalizar Compra</Link>
        </div>
    </div>
  )
}

export default CartView  