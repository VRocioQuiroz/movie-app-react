import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home"
import NavBar from "./components/navBar/NavBar"
import MostPopular from "./components/mostPopular/MostPopular";



function App() {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/most_popular" element={<MostPopular />} />
        
      </Routes>


      
  
    </BrowserRouter>
  )
}

export default App
