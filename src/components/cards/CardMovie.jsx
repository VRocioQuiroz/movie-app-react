import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function CardMovie() {
  return (
    <Card sx={{ maxWidth: 230 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
     
      </CardActionArea>
    </Card>
  );
}