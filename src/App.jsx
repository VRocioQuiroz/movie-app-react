import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/NavBar"
import Home from "./components/home/Home"
import MostPopular from "./components/mostPopular/MostPopular";
import Footer from "./components/mostPopular/footer/footer";
import Upcoming from "./components/upcoming/Upcoming";




function App() {
  return (
    <BrowserRouter>
        <NavBar />
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/most_popular" element={<MostPopular />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>

      <Footer />
      
  
    </BrowserRouter>
  )
}

export default App
