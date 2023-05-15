import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailMovie() {
    
    const {id} = useParams()

    const [movie, setMovie] = useState({genres:[]});
  
    useEffect(() => {
      axios(`https://api.themoviedb.org/3/movie/${id}?api_key=90a2c5125b226abf0debb357d9f7912d&language=en-US`)
      .then((data) => {
          console.log(data.data)
        setMovie(data.data)
      })
    }, [id]);
  
    const stringToYear = (string) => {
       const date = new Date(string)

       return date.getFullYear()
    }
    
    return (
    <div>
       
        <h2>titulo: {movie.title}</h2>
        <p>{stringToYear(movie.release_date)}</p>
        <p>{movie.release_date}</p>
        <p>titulo: {movie.overview}</p>
        <ul>
           { movie.genres.map((genre)=>{ 
            return <li key={genre.id}>{genre.name}</li>

            })}
        </ul>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
    </div>
  )
}
