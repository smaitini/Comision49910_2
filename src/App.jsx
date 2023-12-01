
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer mensaje="Aca va el catálogo de productos"/>
    </>
  )
}

export default App
