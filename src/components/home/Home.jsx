import MultipleSlides from "../multipleSlides/MultipleSlides"
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import Carousel from "../carousel/Carousel"
import { Box } from "@mui/material"



export default function Home() {
  
  const { theme } = useContext(ThemeContext)
  
  return (
    <Box sx={{backgroundColor: theme, pb:4}}>
      
      <Carousel />

      <MultipleSlides path="/movie/popular" categoryTitle={"Películas populares"}/>
     
      <MultipleSlides path="/movie/top_rated" categoryTitle={"Películas mejor puntuadas"}/> 
      
    </Box>
  )
}
