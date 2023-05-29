import * as React from 'react';
import {Card, CardMedia, CardActionArea} from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

export default function CardMovie({title, poster, id}) {

  const isMobile = useMediaQuery({ maxWidth: 580 });

  return (
    
    <Card sx={{ 
      width: isMobile ? "300px" : "200px",
      m:2, 
      transition: "transform 0.3s",
      "&:hover": { transform: "scale(1.05)"},
      boxShadow: "0 0 8px rgba(255, 255, 255, 0.5)"
      }}>
      
      <Link to={`/movie/${id}`}>
      <CardActionArea>
        <CardMedia
          component="img"
          width={"100%"}
          height= {isMobile ? "400" : "300"}
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={title}
          style={{ objectFit: "cover" }}
        />
      </CardActionArea>
      </Link>


    </Card>
    
  );
}