import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { db } from '../../services/firebase'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const {cart, clear, cartPriceTotal}= useContext(CartContext)
    const [ordenId, setOrdenId] = useState('')
    const [loading, setLoading] = useState(false)
const {
    register,
    handleSubmit,
    formState:{errors},
    getValues
}= useForm()

const handleOrder =(data)=>{
  setLoading(true)
    let orden = {
        user:{
            nombre: data.nombre,
            correo: data.email
        },
        items: cart,
        total: cartPriceTotal(),
        date: serverTimestamp()
    }
    const ventas = collection(db, "orders")
    addDoc(ventas, orden)
    .then((res)=>{
        setOrdenId(res.id)
        clear()
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
}

if(loading){
    return <p>Cargando...</p>
}
  return (
    <div>
      { ordenId ? <div className='d-flex justify-content-evenly fw-bold fs-5'> <p> Generaste con éxito tu solicitud, su numero de seguimiento es:{ordenId}</p> 
      <Link style={{textDecoration:'none', color:'green'}} to ='/'>Volver a Home</Link> </div> 
      :<div>
            <h2>Completa tus datos para finalizar la compra</h2>
            <form className='d-flex flex-column'  onSubmit={handleSubmit(handleOrder)}>
                <label className="fs-5">Nombre</label>
                <input className='form-control' type='text' name='nombre' {...register("nombre",{required:true, minLength:2})}/>
                {errors?.nombre?.type === 'required' && <p className="text-danger">El nombre es obligatorio</p>}
                {errors?.nombre?.type === 'minLength' && <p className="text-danger">El nombre debe superar los 2 caracteres</p> }
                <label className="fs-5">Email</label>
                <input className='form-control' type='email' name='email' {...register("email", {minLength:8, required:true})}/>
                {errors?.email?.type === 'required' && <p className="text-danger">El email es requerido</p>}
                {errors?.email?.type === 'minLength' && <p className="text-danger">El email es demasiado corto</p> }
                <label className="fs-5">Confirmar Email</label>
                <input className='form-control' type='email' name='email2' {...register("email2", {minLength:8, required:true, validate:{equalsMails: mails2 => mails2 === getValues().email}})}/>
                {errors?.email2?.type === 'required' && <p className="text-danger">El email es requerido</p>}
                {errors?.email2?.type === 'minLength' && <p className="text-danger">El email es demasiado corto</p> }
                {errors?.email2?.type ==='equalsMails' && <p className="text-danger">Los emails deben ser iguales</p>}
                <button className='btn btn-warning fs-5'>Confirmar compra</button>
            </form>
        </div>}
    </div>
  )
}

export default Checkout