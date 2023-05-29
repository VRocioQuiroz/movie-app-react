import React from 'react';
import MultipleSlides from "../multipleSlides/MultipleSlides"
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import CarouselApp from '../carouselApp';
import { Box } from "@mui/material"
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Home() {
  
  const { theme } = useContext(ThemeContext)
  
  return (
    <Box sx={{backgroundColor: theme, pb:4}}>
      
      <CarouselApp />

      <MultipleSlides path="/movie/popular" categoryTitle={"Películas populares"}/>
     
      <MultipleSlides path="/movie/top_rated" categoryTitle={"Películas mejor puntuadas"}/> 
      
    </Box>
  )
}
