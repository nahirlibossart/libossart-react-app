const productos = [
    {
        id:'1',
        name:'Remera Baby Yoda',
        stock:50,
        price:20000,
        description:'Remera de algodón peinado con estampado',
        image:'https://i.postimg.cc/Y2P0FN3w/baby-yoda.webp',
        category:'Cine y Series'
    },
    {
        id:'2',
        name:'Remera Don Ramón',
        stock:40,
        price:20000,
        description:'Remera de algodón peinado con estampado',
        image:'https://i.postimg.cc/MHXR5hD1/don-ramon.webp',
        category:'Cine y Series'
    },
    {
        id:'3',
        name:'Remera Among US',
        stock:30,
        price:20000,
        description:'Remera de algodón peinado con estampado',
        image:'https://i.postimg.cc/LsBz8k5g/among.webp',
        category:'Videojuegos'
    },
    {
        id:'4',
        name:'Remera Tentacle',
        stock:20,
        price:20000,
        description:'Remera de algodón peinado con estampado',
        image:'https://i.postimg.cc/L57PbNCw/tentacle.webp',
        category:'Videojuegos'
    },
    {
        id:'5',
        name:'Remera ATC',
        stock:15,
        price:20000,
        description:'Remera de algodón peinado con estampado',
        image:'https://i.postimg.cc/cHxfgKt9/atc.webp',
        category:'Retro'
    },
    {
        id:'6',
        name:'Remera Pumper Nic',
        stock:15,
        price:20000,
        description:'Remera de algodón peinado con estampado',
        image:'https://i.postimg.cc/J7dj0zrx/pumper.webp',
        category:'Retro'
    }
]

export const getProducts =() => {
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema intente más tarde')
            }else{
                resolve(productos)
            }
        },2000)
    })
}