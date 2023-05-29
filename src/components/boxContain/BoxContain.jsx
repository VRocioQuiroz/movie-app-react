import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CardMovie from "../cards/CardMovie";
import PaginationMovies from "../paginationMovies/PaginationMovies";
import { Box, Typography } from "@mui/material";
import { ThemeContext } from "../../context/ThemeContext";

export default function BoxContain({ path, categoryTitle }) {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { theme } = useContext(ThemeContext);

  const apiKey = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/${path}?api_key=${apiKey}&language=es-ES&page=${pageNumber}`
    ).then((data) => {
      setMovies(data.data.results);
    });
  }, [pageNumber, path]);

  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <Box sx={{ backgroundColor: theme, py: 4 }}>
      <Typography
        variant="h3"
        sx={{
          mb: "20px",
          textAlign: "center",
          color: theme,
          fontFamily: "BlinkMacSystemFont",
          fontWeight: "bold",
        }}
      >
        {categoryTitle}
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {movies.map((movie) => {
          if (movie.poster_path !== null) {
            return (
              <CardMovie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
              />
            );
          }
          return null;
        })}
      </Box>

      <PaginationMovies onNewPage={handleChange} pageNumber={pageNumber} />
    </Box>
  );
}
