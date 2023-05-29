import React from 'react';
import {AppBar, Box, IconButton, Typography, Menu, Container, Button, MenuItem, Switch} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Search from '@mui/icons-material/Search';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';
import { Link } from 'react-router-dom';
import SwitchButton from '../switchButton/SwitchButton';
import { useMediaQuery } from 'react-responsive';


const pages = [{title: 'Home', path: '/'}, {title: 'Populares', path: '/most_popular'}, {title:'Próximos lanzamientos', path: '/upcoming'}];


function NavBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });
  
 
  return (
    <AppBar position="static" sx={{backgroundColor:'#1A120B'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={pages[0].path} style={{display:"flex", flexDirection:"row", textDecoration:"none"}} >
          <SlowMotionVideoOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color:"#28DF99", fontSize: 40, pt:6 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              mt:6,
              height: 80,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: 30,
              letterSpacing: '.1rem',
              textDecoration: 'none',
              color:"#3dd6a8"
            }}
          >
            AppMovies
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page) => (
                <Link key={page.title}  to={page.path} style={{textDecorationColor:"#28DF99"}}>
                <MenuItem key={page.title} onClick={handleCloseNavMenu} sx={{textDecoration:"underline", textDecorationColor: "black"}}  >
                <Typography textAlign="center" sx={{color:"black"}}>{page.title}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
           

          </Box>
        
        

          <Link to={pages[0].path} style={{display:"flex", flexDirection:"row", textDecoration:"none"}}>
          <SlowMotionVideoOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color:"#28DF99" }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 22,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.1rem',
              textDecoration: 'none',
              color:"#3dd6a8",

            }}
          >
            AppMovies
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
            {pages.map((page) => (
              <Link key={page.title} to={page.path} style={{textDecoration:"underline", textDecorationColor:"#3dd6a8"}} >
                <Button size="large"
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{ mt:2, ml: isMobile ? 0 : 12, color: 'white', display: 'block', fontFamily:"monospace", fontSize:"20px" }}
                  
                >
                {page.title}
                  
                </Button>
              </Link>

            ))}

          </Box>

          <Box sx={{ flexGrow: isMobile ? 2 : 1, display:"flex", flexDirection: "row" }}>
            
          <IconButton sx={{ p: 0, mx: isMobile ? 0 : 7 }}>
              <Link to="/search">
                <Search sx={{color:"#3dd6a8", fontSize: isMobile ? "30px" : "50px",   }} />
              </Link>
            </IconButton>

            <SwitchButton />
           
          </Box>

        </Toolbar>
        
      </Container>
      
    </AppBar>
  );
}


export default NavBar;