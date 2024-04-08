import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBarComp/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting="Elegí la remera que más te guste y te la enviamos sin cargo"/>} />
      <Route path='/categories/:categoryId' element={<ItemListContainer greeting='Categoría:'/>} />
      <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes> 
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;