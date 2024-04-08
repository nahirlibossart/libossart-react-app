import React from "react";
import {useState, useEffect} from 'react'
import ItemList from '../itemlist/ItemList'
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../services/firebase'

function ItemListContainer({greeting}) {
    const [productos, setProductos]=useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

      useEffect(()=>{
        setLoading(true)
        const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos")
        getDocs(productsCollection)
        .then((res)=>{
          const list = res.docs.map((product)=>{
            return{
              id:product.id,
              ...product.data()
            }
          })
          setProductos(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
      },[categoryId])
      
      if(loading){
        return(
            <div style={{width:'100vh', height:'100vh', display:'flex', alignItems:'center', flexDirection: 'column'}}>
        <Loader/>
        </div>
        )   
        }
    return (
        <div> 
        {
               
       categoryId 
       ?<h1 className='ms-5 fst-italic text-success fs-4'>{greeting} <span style={{color:'green'}}>{categoryId}</span></h1>
       :<h1 className='text-center ms-5 fst-italic text-success fs-4'>{greeting}</h1>
       }

<hr/>
<ItemList productos={productos}/>

    </div>
    )
}

export default ItemListContainer