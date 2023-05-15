import MultipleSlides from "../multipleSlides/MultipleSlides"

export default function Home() {
  return (
    <div>
      <h2>Películas populares</h2> 
      <MultipleSlides path="/movie/popular" />
      <h2>Películas mejor puntuadas</h2>
      <MultipleSlides path="/movie/top_rated" /> 
    </div>
  )
}
