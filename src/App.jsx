import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>

      <ItemListContainer greeting="Soy un mensaje de prueba" />
      
    </>
  );
}

export default App;

