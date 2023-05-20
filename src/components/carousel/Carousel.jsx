import {useState, useEffect} from "react";
import axios from "axios";

import { Box, Typography, Button, CardMedia } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { green } from "@mui/material/colors";


export default function App() {

    const [trendingMovies, setTrendingMovies] = useState([]);
    
    useEffect(() => {
      axios('https://api.themoviedb.org/3/trending/movie/week?api_key=90a2c5125b226abf0debb357d9f7912d&language=es-ES')
      .then((data) => {
        setTrendingMovies(data.data.results)
      })
    }, []);


 
  return (
    <Box style={{heigth:"300px"}} >
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
              
          <Box sx={{ maxWidth: 2000, height:500, display:"flex", justifyContent:"center", alignItems:"center", backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} >
            <Box sx={{width:900, heigth:400, p:2, backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
              <Typography variant="h2" sx={{p:4, color:"white", fontWeight:"bold" }} >
                {movie.title}
              </Typography>

              <Typography  sx={{ p:2, color:"white", fontSize:"20px", fontWeight:"bold"}}>
                {movie.overview} 
              </Typography>

              <Button variant="contained" color="success" sx={{p:2}}>
                Ver mas
              </Button> 
           
            </Box>
          
              </Box>
            )
          })}
       



        {/* <div>
          <img style={{height:"100%",}} src="https://okdiario.com/img/2022/10/18/los-gatos-pueden-ver-en-color-1-655x368.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://okdiario.com/img/2022/10/18/los-gatos-pueden-ver-en-color-1-655x368.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://okdiario.com/img/2022/10/18/los-gatos-pueden-ver-en-color-1-655x368.jpg" alt="Slide 3" />
        </div> */}
      </Carousel>
    </Box>
  );
}


