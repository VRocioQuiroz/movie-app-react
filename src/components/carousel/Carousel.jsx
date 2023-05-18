import { Box } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


function App() {
  return (
    <Box>
      <Carousel 
        autoPlay
        interval={4000}
        transitionTime={2000}
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >

        
        <div>
          <img style={{height:"100%",}} src="https://okdiario.com/img/2022/10/18/los-gatos-pueden-ver-en-color-1-655x368.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://okdiario.com/img/2022/10/18/los-gatos-pueden-ver-en-color-1-655x368.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://okdiario.com/img/2022/10/18/los-gatos-pueden-ver-en-color-1-655x368.jpg" alt="Slide 3" />
        </div>
      </Carousel>
    </Box>
  );
}

export default App;
