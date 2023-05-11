import BoxContain from "../boxContain/BoxContain"

export default function Home() {
  return (
    <div>
      <h2>Películas populares</h2>
      <BoxContain path="/movie/popular"/>
      <h2>Películas mejor puntuadas</h2>
      <BoxContain path="/movie/top_rated"/>
    </div>
  )
}
