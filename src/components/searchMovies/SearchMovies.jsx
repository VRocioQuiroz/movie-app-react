import { useState, useEffect } from "react";
import axios from "axios";
import { Box, InputLabel } from "@mui/material";
import CardMovie from "../cards/CardMovie";
import OutlinedInput from '@mui/material/Input';

export default function SearchMovies() {


    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('')
 
    const apiKey = import.meta.env.VITE_APP_API_KEY;
   
    useEffect(() => {
      axios(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&languaje=es-ES&query=${searchValue}&page=1`)
      .then((data) => {
        console.log(data)
        setMovies(data.data.results)
        
      })
    }, [searchValue]);

    const handleInputSearch = (e)=> {
      setSearchValue(encodeURIComponent(e.target.value))

    }

  return (
    <>
    <Box>
        <OutlinedInput onChange={handleInputSearch} />
        
    </Box>


    <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"flex-start", ml:10}}>
    
        {movies.map((movie) => {
           if (movie.poster_path !== null) {
          return <CardMovie id={movie.id} title={movie.title} poster={movie.poster_path} />;
          }
          return null;
        })}
      </Box> 

      </>
  )
}
