import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import DetailMovie from '../detailMovie/DetailMovie';


export default function CardMovie({title, poster, id}) {
  return (
    
    <Card sx={{ maxWidth: 230}}>
      <CardActionArea href={`movie/${id}`}>
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