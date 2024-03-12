import React from "react";
import {useState, useEffect} from 'react'
import {getProducts} from '../../mock/fakeApi'
import ItemList from '../itemlist/ItemList'
import { useParams } from "react-router-dom";

function ItemListContainer({greeting}) {
    const [productos, setProductos]=useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

    useEffect(()=>{
        getProducts()
        .then((res)=>{
            setLoading(true)
            if(categoryId){
                setProductos(res.filter((prod)=> prod.category === categoryId))

            }else{
                setProductos(res)
            }
        })
        .catch((error)=> console.log(error, 'todo mal'))
        .finally(()=> setLoading(false))
      },[categoryId])
      
      if(loading){
        return <h2> Cargando... </h2>
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