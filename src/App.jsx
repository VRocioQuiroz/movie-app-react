import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/NavBar"
import Home from "./components/home/Home"
import MostPopular from "./components/mostPopular/MostPopular";
import Footer from "./components/mostPopular/footer/Footer";
import Upcoming from "./components/upcoming/Upcoming";
import DetailMovie from "./components/detailMovie/DetailMovie";




function App() {
  return (
    <BrowserRouter>
        <NavBar />
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/most_popular" element={<MostPopular />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/movie/:id" element={<DetailMovie />} />
      </Routes>

      <Footer />
      
  
    </BrowserRouter>
  )
}

export default App
