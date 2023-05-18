import MultipleSlides from "../multipleSlides/MultipleSlides"
import Carousel from "../carousel/Carousel"

export default function Home() {

  
  return (
    <>
      <Carousel />

      <MultipleSlides path="/movie/popular" categoryTitle={"Películas populares"}/>
     
      <MultipleSlides path="/movie/top_rated" categoryTitle={"Películas mejor puntuadas"}/> 
      
    </>
  )
}
