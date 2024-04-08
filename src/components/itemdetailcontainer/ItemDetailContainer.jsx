import { useEffect, useState } from "react"
import ItemDetail from "../itemdetail/ItemDetail"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = () =>{
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando] = useState(false)
    const [validateItem, setValidateItem] = useState(false)
    const {itemId} = useParams()

    useEffect(()=>{
        setCargando(true)
        const collectionProd = collection(db, "productos")
        const referenciaDoc = doc(collectionProd, itemId)
        getDoc(referenciaDoc)
        .then((res)=> { 

 if(res.data()){

          setDetalle({id: res.id, ...res.data()})
        }else{
          setValidateItem(true)
        }
       
      })
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[itemId])

    if(cargando){
        return<h1>Cargando detalle...</h1>
    }

    return(
     <div>
         {validateItem ? <p className="fw-bold text-body-tertiary" >El producto no existe</p> : <ItemDetail detalle={detalle} />}
    </div>
    )
}

export default ItemDetailContainer