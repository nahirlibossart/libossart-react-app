import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBarComp/>
      <ItemListContainer greeting="Elegí la remera que más te guste y te la enviamos sin cargo"/>
    </div>
  );
}

export default App;