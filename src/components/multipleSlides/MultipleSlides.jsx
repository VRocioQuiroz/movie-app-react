import { Box, Typography } from '@mui/material';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import CardMovie from '../cards/CardMovie';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MultipleSlides ({searchCategory, categoryTitle, path }) {

  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber]= useState(1)
 
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/${path}?api_key=90a2c5125b226abf0debb357d9f7912d&language=en-US&page=${pageNumber}`)
    .then((data) => {
      setMovies(data.data.results)
    })
  }, [pageNumber, path]);

  
  const handleChange = (event,value) => {
    setPageNumber(value)
  }

  const options = {
    type: 'slide',
    perPage: 5,
    perMove: 5,
    gap: '1rem',
    breakpoints: {
      1024: {
        perPage: 4,
        perMove: 4,
        gap: "0.5rem",
      },
      600: {
        perPage: 3,
        perMove: 3,
        gap: "0.5rem",
      },
      480: {
        perPage: 2,
        perMove: 2,
        gap: "0.5rem",
      },
    },
  };

  return (
    <Box sx={{ width: '90%', margin: '0 auto', marginTop: '50px'}}>

<Typography
  style={{
    display: 'flex',
    justifyContent: 'center',
    fontSize: '2xl',
    fontWeight: 'bold',
    //color: context.clearTheme ? 'black' : 'white',
  }}
>
  {/* {categoryTitle} */}
</Typography>

      <Splide options={options} >
      {movies.map((movie) => {
         return(
         <SplideSlide key={movie.id} style={{ padding: 0, margin: 0 }} > 
         <CardMovie title={movie.title} poster={movie.poster_path} />
         </SplideSlide>)
        })}
      </Splide>
    </Box>

  );
};



