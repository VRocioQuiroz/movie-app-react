import MultipleSlides from "../multipleSlides/MultipleSlides"
import Carousel from "../carousel/Carousel"
import { Box } from "@mui/material"

export default function Home() {

  
  return (
    <Box sx={{backgroundColor:"#191919", pb:4}}>
      
      <Carousel />

      <MultipleSlides path="/movie/popular" categoryTitle={"Películas populares"}/>
     
      <MultipleSlides path="/movie/top_rated" categoryTitle={"Películas mejor puntuadas"}/> 
      
    </Box>
  )
}
