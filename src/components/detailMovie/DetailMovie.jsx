import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, CardMedia, Button, Typography, Stack } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import ReactPlayer from "react-player";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { useMediaQuery } from "react-responsive";


export default function DetailMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState({ genres: [] });
  const [trailer, setTrailer] = useState({});
  const [showTrailer, setShowTrailer] = useState(false);

  const apiKey = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`
    ).then((data) => {
      setMovie(data.data);
    });

    axios(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&languaje=es-ES`
    ).then((data) => {
      setTrailer(data.data.results[0]);
    });
  }, [id]);

  const stringToYear = (string) => {
    const date = new Date(string);

    return date.getFullYear();
  };

  const handleToggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Box
      sx={{
        maxWidth: 2000,
        height: isMobile ? 900 : 600,
        py: isMobile ? 2 : 12,
        px: isMobile ? 0 : 6,
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      {
        !isMobile && 
      <CardMedia
        sx={{ width: 300, height: 400, border: 1 }}
        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        title={movie.title}
      />
      }

      <Box
        sx={{
          width: 900,
          height: isMobile ? 900 : 600,
          m: 4,
          p: 2,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          
        }}
      >
        <Typography variant="h3" sx={{ my: 2, color: "white" }}>
          {movie.title}
        </Typography>

        <Typography
          sx={{ mb: 2, color: "white", fontSize: "24px", fontWeight: "bold" }}
        >
          {stringToYear(movie.release_date)}
        </Typography>

        {!showTrailer && (
          <Typography
            
            sx={{ color: "white", fontWeight: "bold" }}
          >
            {movie.overview}
          </Typography>
        )}

        {!showTrailer && (
          <Stack spacing={2} direction="row" sx={{ m: 4 }}>
            {movie.genres.map((genre) => {
              return (
                <Button
                  key={genre.id}
                  variant="contained"
                  size="small"
                  sx={{
                    color: "black",
                    fontSize: "12px",
                    fontWeight: "bold",
                    backgroundColor: "#28DF99",
                    borderRadius: "25px",
                    pointerEvents: "none",
                  }}
                >
                  
                  # {genre.name}
                </Button>
              );
            })}
          </Stack>
        )}

        {!showTrailer && (
          <Stack direction="row" spacing={2}>
            <Button
              startIcon={<PlayArrow />}
              variant="elevated"
              size="large"
              sx={{ color: "white", fontWeight: "bold" }}
              onClick={handleToggleTrailer}
            >
              Trailer
            </Button>
          </Stack>
        )}

        {showTrailer && (
          <Box>
            <HighlightOffOutlinedIcon
              fontSize="large"
              sx={{ ml: 75, color: "white" }}
              onClick={handleToggleTrailer}
            />
            {trailer && trailer.key ? (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer.key}`}
              />
            ) : (
              <p style={{ fontSize: "25px" }}>Ø Trailer no disponible</p>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}
