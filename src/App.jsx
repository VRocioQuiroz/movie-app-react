import { BrowserRouter, Routes, Route } from "react-router-dom";
import  ThemeContextProvider from "./context/ThemeContext.jsx"
import NavBar from "./components/navBar/NavBar"
import Home from "./components/home/Home"
import MostPopular from "./components/mostPopular/MostPopular";
import Footer from "./components/footer/Footer";
import Upcoming from "./components/upcoming/Upcoming";
import DetailMovie from "./components/detailMovie/DetailMovie";
import SearchMovies from "./components/searchMovies/SearchMovies";



function App() {

  return (
    <BrowserRouter>
      <ThemeContextProvider>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/most_popular" element={<MostPopular />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/movie/:id" element={<DetailMovie />} />
          <Route path="/search" element={<SearchMovies />} />

        </Routes>

        <Footer />

      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
