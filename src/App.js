import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBarComp/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting="Elegí la remera que más te guste y te la enviamos sin cargo"/>} />
      <Route path='/categories/:categoryId' element={<ItemListContainer greeting='Categoría:'/>} />
      <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
    </Routes>
       
    </BrowserRouter>
    </>
  );
}

export default App;