import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route
            path="/Productos/:categoria"
            element={<ItemListContainer />}
          ></Route>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
// import React from 'react';
// import './App.css';
// import Aside from './components/Aside/Aside';
// import Main from './components/Main/Main';

// function App() {
//   return (
//     <div className="App">
//       <Aside />
//       <Main />
//     </div>
//   );
// }

// export default App;


