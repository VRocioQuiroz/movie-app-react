import { useState, useEffect } from "react";
import axios from "axios";
import CardMovie from "../cards/CardMovie";

export default function BoxContain({path}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/${path}?api_key=90a2c5125b226abf0debb357d9f7912d&language=en-US&page=1`)
    .then((data) => {
      setMovies(data.data.results)
    })
  }, []);

  return (
    <div>
     
      {console.log(movies)} 
      {movies.map((movie) => {
         return(<CardMovie id={movie.id} title={movie.title} poster={movie.poster_path} />)
      })}
    </div>
  )
}
