import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


export default function CardMovie({title, poster}) {
  return (
    
    <Card sx={{ maxWidth: 230}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={title}
        />
     
      </CardActionArea>
    </Card>
    
  );
}