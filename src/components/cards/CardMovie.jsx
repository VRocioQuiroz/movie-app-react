import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function CardMovie({title, poster, id}) {
  return (
    
    <Card sx={{ 
      width:"200px",
      m:2, 
      transition: "transform 0.3s",
      "&:hover": { transform: "scale(1.05)"},
      boxShadow: "0 0 8px rgba(255, 255, 255, 0.5)"
      }}>

      <CardActionArea href={`movie/${id}`}>
        <CardMedia
          component="img"
          width={"100%"}
          height="300"
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={title}
          style={{ objectFit: "cover" }}
        />
      </CardActionArea>
    </Card>
    
  );
}