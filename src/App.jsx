import React from "react";
import Home from "./Components/Home";
import Galeria from "./Components/Galeria"
import Contato from "./Components/Contato"
import Naoencontrada from "./Components/Naoencontrada";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

function App() {
  return(
    <>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/galeria">Galeria</Link>
          </li>
          <li>
          <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/galeria" element={<Galeria/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="*" element={<Naoencontrada/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App