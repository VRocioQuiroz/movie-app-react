import { useState, useEffect } from "react";
import axios from "axios";
import { Box, InputLabel } from "@mui/material";
import CardMovie from "../cards/CardMovie";
import OutlinedInput from "@mui/material/Input";
import lupa from "../../assets/lupa.png";
import carrete from "../../assets/carrete.png";

export default function SearchMovies() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const apiKey = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&languaje=es-ES&query=${searchValue}&page=1`
    ).then((data) => {
      console.log(data);
      setMovies(data.data.results);
    })
    
  }, [searchValue]);

  const handleInputSearch = (e) => {
    setSearchValue(encodeURIComponent(e.target.value));
  };

  return (
    <Box
      sx={{
        backgroundColor: "#191919",
        display: "flex",
        flexDirection: "column",
        minHeight: "600px",
        heigth: "100%",
      }}
    >
      <Box
        sx={{
          my: 5,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <InputLabel sx={{ color: "white", fontSize: "30px", mb: 4 }}>
          ¿Qué quieres ver?
        </InputLabel>
        <OutlinedInput
          onChange={handleInputSearch}
          placeholder="Ingresa tu película"
          color="success"
          sx={{ color: "white", width: "400px", fontSize: "25px" }}
        />
        {!searchValue && (
          <img src={carrete} style={{ width: 250, marginTop: 50 }} />
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          ml: 10,
          my: 10,
        }}
      >
        {searchValue && movies.length === 0 ? (
          <div
            style={{
              margin: "10px 0 100px 200px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img src={lupa} width={350} />
            <p style={{ margin: "50px", fontSize: "30px", color: "white" }}>
              No hay resultados...
            </p>
          </div>
        ) : (
          movies.map((movie) => {
            if (movie.poster_path !== null) {
              return (
                <CardMovie
                  id={movie.id}
                  title={movie.title}
                  poster={movie.poster_path}
                />
              );
            }
            return null;
          })
        )}
      </Box>
    </Box>
  );
}
