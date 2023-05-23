import { Box, Typography } from '@mui/material';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import CardMovie from '../cards/CardMovie';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme()
theme = responsiveFontSizes(theme);


export default function MultipleSlides ({categoryTitle, path }) {

  const [movies, setMovies] = useState([]);
 
  const apiKey = import.meta.env.VITE_APP_API_KEY;
 
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/${path}?api_key=${apiKey}&language=es-ES`)
    .then((data) => {
      setMovies(data.data.results)
    })
  }, [path]);

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
    <ThemeProvider theme={theme}>
      <Box sx={{width: '90%', margin: '0 auto', marginTop: '50px'}}>

        <Typography variant="h3" sx={{mb:'20px', display: 'flex', justifyContent: 'center', color:"white", fontFamily:"BlinkMacSystemFont", fontWeight: 'bold'}}>
          {categoryTitle}
        </Typography>

        <Splide options={options} >
          {movies.map((movie) => {
            return(
            <SplideSlide key={movie.id} style={{ padding: 0, margin: 0 }} > 
            <CardMovie title={movie.title} poster={movie.poster_path} id={movie.id} />
            </SplideSlide>)
            })}
        </Splide>
      </Box>
  </ThemeProvider>
  );
};




