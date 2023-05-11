import BoxContain from "../boxContain/BoxContain"

export default function Home() {

  return (
    <div>
      <h2>Películas populares</h2>
      <BoxContain path="/movie/popular" hasPagination={false}  />
      <h2>Películas mejor puntuadas</h2>
      <BoxContain path="/movie/top_rated" hasPagination={false} />
    </div>
  )
}
