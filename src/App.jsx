
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import CartContextComponent from './context/CartContext'
function App() {


  return (

    <>
      <BrowserRouter>

        <CartContextComponent>

          <NavBar />
          <AppRouter />

        </CartContextComponent>

      </BrowserRouter>
    </>

  )
}

export default App
