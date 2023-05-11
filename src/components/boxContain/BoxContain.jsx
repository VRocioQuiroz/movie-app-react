import { useState, useEffect } from "react";
import axios from "axios";
import CardMovie from "../cards/CardMovie";
import PaginationMovies from "../paginationMovies/PaginationMovies";


export default function BoxContain({path, hasPagination=true}) {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber]= useState(1)

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/${path}?api_key=90a2c5125b226abf0debb357d9f7912d&language=en-US&page=${pageNumber}`)
    .then((data) => {
      setMovies(data.data.results)
    })
  }, [pageNumber]);

  const handleChange = (event, value) => {
    setPageNumber(value)
  }
   

  return (
    <div>
     
      {console.log(movies)} 
      {movies.map((movie) => {
         return(<CardMovie id={movie.id} title={movie.title} poster={movie.poster_path} />)
      })}
       
       {
        hasPagination && <PaginationMovies onNewPage={handleChange} pageNumber={pageNumber} />
       }

    </div>
  )
}
