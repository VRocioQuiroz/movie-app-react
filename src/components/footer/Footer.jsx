import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { Typography, Box, Button } from "@mui/material";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';


let themeMui = createTheme()
themeMui = responsiveFontSizes(themeMui);


export default function Footer() {

   
  const handleNetworksClick = (network) => {

    if(network === "ig"){
      window.open('https://www.instagram.com/', '_blank');
    }
    if(network === "tw"){
      window.open('https://twitter.com/?lang=es', '_blank');
    }
    if(network === "ttok"){
      window.open('https://www.tiktok.com/es/', '_blank');
    }

  };
  
 
  return (

    <ThemeProvider theme={themeMui}>
    <Box
      sx={{
        width: "100%",
        height: 150,
        backgroundColor: "#1A120B",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          py: 4,
        }}
      >

        <Typography sx={{ color: "white", fontSize: "25px", pr: 2 }}>
          Seguinos en:
        </Typography>

        <Button>
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#3dd6a8", fontSize: "50px" }}
            onClick={() => handleNetworksClick("ig")}
          />
        </Button>
        <Button>
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: "#3dd6a8", fontSize: "40px" }}
            onClick={() => handleNetworksClick("tw")}
          />
        </Button>

        <Button>
          <FontAwesomeIcon
            icon={faTiktok}
            style={{ color: "#3dd6a8", fontSize: "40px" }}
            onClick={() => handleNetworksClick("ttok")}
          />
        </Button>

      </Box>
        
        <Typography sx={{backgroundColor: "#1A120B", color: "white", fontSize: "15px", textAlign:"right", pr:2 }}>
          © 2023 Hecho para AdaITW por RoQuiroz
        </Typography>
        
    </Box>

    </ThemeProvider>
  );
}
