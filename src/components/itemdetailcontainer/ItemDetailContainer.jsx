import { useEffect, useState } from "react"
import { getProducts } from "../../mock/fakeApi"
import ItemDetail from "../itemdetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{
    const [detalle, setDetalle] = useState({})
    const {itemId} = (useParams)
    console.log(itemId)

    useEffect(()=>{
        getProducts()
        .then((res)=> setDetalle(res.find((item)=> item.id === itemId)))
        .catch((error)=> console.log(error))
    },[itemId])
    return(
        <div>
          <ItemDetail detalle={detalle}/>

        </div>
    )
}

export default ItemDetailContainer