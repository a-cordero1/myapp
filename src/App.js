import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./componentes/Navbar";
import Mascotas from "./componentes/mascotas";
import Detail from "./componentes/Detail";


function App() {
 return (
   <div className="App">
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Mascotas />} />
         <Route path="/mascotas" element={<Mascotas />} />
         <Route path="/mascotas/:mascotaId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;