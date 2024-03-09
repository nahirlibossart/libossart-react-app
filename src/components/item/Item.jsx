import {Link} from 'react-router-dom'
const Item = ({producto}) => {
    return(
        <div className="card" style={{width: '18rem'}}>
        <img src={producto.image} className="card-img-top" alt={producto.name}/>
        <div className="card-body">
          <h5 className="card-title">{producto.name}</h5>
          <p>${producto.price}</p>
          <Link to={`/item/${producto.id}`} className="btn btn-primary">Ver mas</Link>
        </div>
      </div>
    )
}
export default Item