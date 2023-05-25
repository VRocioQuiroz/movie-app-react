import {useState, useEffect} from "react";
import axios from "axios";

import { Box, Typography, Button, CardMedia } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { green } from '@mui/material/colors';

export default function App() {

    const [trendingMovies, setTrendingMovies] = useState([]);

    const apiKey = import.meta.env.VITE_APP_API_KEY;
    
    useEffect(() => {
      axios(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=es-ES`)
      .then((data) => {
        setTrendingMovies(data.data.results)
      })
    }, []);


 
  return (
    <Box style={{heigth:"300px", boxShadow: "0 0 8px rgba(255, 255, 255, 0.5)" }} >
      <Carousel 
        autoPlay
        interval={4000}
        transitionTime={2000}
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        
      >

      {trendingMovies.map((movie)=>{
        return(
              
          <Box key={movie.title} sx={{ maxWidth: 2000, height:500, display:"flex", justifyContent:"center", alignItems:"center", backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} >
            <Box sx={{width:900, heigth:400, p:2, backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
              <Typography variant="h2" sx={{p:4, color:"white", fontWeight:"bold" }} >
                {movie.title}
              </Typography>

              <Typography  sx={{ p:2, color:"white", fontSize:"20px", fontWeight:"bold"}}>
                {movie.overview} 
              </Typography>

              <Button href={`movie/${movie.id}`}  variant="contained" sx={{p:2, backgroundColor:"#28DF99", }}>
                Ver mas
              </Button> 
           
            </Box>
          
              </Box>
            )
          })}
       
      </Carousel>
    </Box>
  );
}


