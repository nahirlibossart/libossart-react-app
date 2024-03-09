import React from "react";
import {useState, useEffect} from 'react'
import {getProducts} from '../../mock/fakeApi'
import ItemList from '../itemlist/ItemList'
function ItemListContainer({greeting}) {
    const [productos, setProductos]=useState([])

    useEffect(()=>{
        getProducts()
        .then((res)=>setProductos(res))
        .catch((error)=> console.log(error, 'todo mal'))
      },[])
      console.log(productos)

    return (
    <div>
<h1 className="ms-5 fst-italic text-success fs-4"> {greeting} </h1>
<hr/>
<ItemList productos={productos}/>

    </div>
    )
}

export default ItemListContainer