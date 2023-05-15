import MultipleSlides from "../multipleSlides/MultipleSlides"


export default function Home() {

  
  return (
    <>
      
      <MultipleSlides path="/movie/popular" categoryTitle={"Películas populares"}/>
     
      <MultipleSlides path="/movie/top_rated" categoryTitle={"Películas mejor puntuadas"}/> 
      
    </>
  )
}
