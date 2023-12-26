import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {NavLink} from  'react-router-dom';
import { MENU } from '../../constans/constans';
import "./navigation.css";


const pages = ['Home','Films', 'Tv Shows'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static"sx={{backgroundColor:"rgba(112, 128, 144)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img style={{with:'100px',height:'80px',}} src="data:image/jpeg;base64,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" alt="Логотип сайта" />
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'center' } }}>
            {MENU.map(({name,link},index) => (
             <NavLink key={index} className={({isActive})=>  `navLink ${isActive ?"isActive":""}`} to={link}>{name}</NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;