import { useState, useEffect } from "react";
import axios from "axios";
import CardMovie from "../cards/CardMovie";
import PaginationMovies from "../paginationMovies/PaginationMovies";
import {Box} from'@mui/material'


export default function BoxContain({path}) {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber]= useState(1)

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/${path}?api_key=90a2c5125b226abf0debb357d9f7912d&language=es-ES&page=${pageNumber}`)
    .then((data) => {
      setMovies(data.data.results)
    })
  }, [pageNumber, path]);

  const handleChange = (event,value) => {
    setPageNumber(value)
  }
  
  return (

    <Box> 
        {console.log(movies)} 
        {movies.map((movie) => {
         return(<CardMovie id={movie.id} title={movie.title} poster={movie.poster_path} />)
        })}
         
        <PaginationMovies onNewPage={handleChange} pageNumber={pageNumber} />
        
    </Box>
  
  )
}
