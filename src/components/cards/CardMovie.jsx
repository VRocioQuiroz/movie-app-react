import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useMediaQuery } from 'react-responsive';


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

      <CardActionArea href={`movie/${id}`}>
        <CardMedia
          component="img"
          width={"100%"}
          height= {isMobile ? "400" : "300"}
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={title}
          style={{ objectFit: "cover" }}
        />
      </CardActionArea>
    </Card>
    
  );
}