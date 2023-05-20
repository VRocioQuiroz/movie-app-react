import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, CardMedia, Button, Typography, Stack} from '@mui/material';
import { PlayArrow } from "@mui/icons-material";


export default function DetailMovie() {
    
    const {id} = useParams()
    
    const [movie, setMovie] = useState({genres:[]});
  
    useEffect(() => {
      axios(`https://api.themoviedb.org/3/movie/${id}?api_key=90a2c5125b226abf0debb357d9f7912d&language=es-ES`)
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
  
      <Box sx={{ maxWidth: 2000, height:500, py:12, px:6, backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', display: "flex", flexDirection:"row" }} >
        
        <CardMedia
          sx={{width:300, height: 400, border: 1}}
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          title={movie.title}
        />
          
        <Box sx={{width:900, heigth:400, m:4, p:3, backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
          <Typography variant="h2" sx={{mt:2, color:"white"}} >
            {movie.title}
          </Typography>

          <Typography sx={{mb:2, color:"white", fontSize:"24px", fontWeight:"bold"}}>
            {stringToYear(movie.release_date)} 
          </Typography>

          <Typography variant="subtitle1" sx={{color:"white", fontWeight:"bold"}}>
            {movie.overview} 
          </Typography>

          <Stack spacing={2} direction="row" sx={{m:3}} >
            {movie.genres.map((genre)=>{ 
              return <Button key={genre.id} variant="contained" size="small" sx={{color:"white", fontSize:"12px", borderRadius:"25px", pointerEvents: 'none'}}> # {genre.name} </Button>})}
          </Stack>
           
          <Stack direction="row" spacing={2}>
            <Button startIcon={<PlayArrow />} variant="elevated" size="large" sx={{color:"white", fontWeight:"bold"}}>
              Trailer
            </Button> 
          </Stack>


        </Box>
          
    
      </Box>
    
    
    
  );
}
    







