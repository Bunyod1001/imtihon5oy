import { AppBar, Box, Button, Container, CssBaseline, Divider, Drawer, Icon, IconButton,  List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import PopupState from 'material-ui-popup-state';
import kivi from "./Media/logo.png"
import { Form } from './Form';
import translation from '../../Language';
import useLang from '../../Hook/uselang';
import useToken from '../../Hook/useToken';


const drawerWidth = 240;
const navItems = ["Объявления", "Магазины", "Для бизнеса", "Помощь"];

export default function Header(props) {
 let [token,setToken] = useToken()
  let [lang, setLang] = useLang()
  console.log(translation);
  // let {t, i18n} =useTranslation();
  // let language =i18n.language;
  const handleClick = (evt) => {
      evt.preventDefault();

      let newLang = evt.target.value.trim();
      // i18n.changeLanguage(lang);
      setLang(newLang);
    };
    const { window } = props;
  const [mobileOpen, setMobileOpen] =useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
<>   
<Container>
<Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{height:"150px" ,background:"#FFFFFF", boxShadow:" 12px 4px 24px rgba(0, 0, 0, 0.0647645)", color:"#000000"}}>
<Container>
        <Toolbar sx={{display:"flex",gap:"40px"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to={"/"}>
          <Icon sx={{width:"70px",height:"70px",marginRight:"20px"}}>
           <img src={kivi}alt="d" />
          </Icon>
          </NavLink>
          <Typography sx={{width:"160px",fontSize:"15px",fontWeight:"100",fontStyle:"italic",color:"#a6a6a6",marginRight:"60px"}}>
          {translation[lang].header_icon}
          </Typography>
          <Box sx={{flexGrow:"0.4" ,display: { xs: 'none', sm: 'flex' }, justifyContent:"space-between" }}>
            
          <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
                <NavLink to="/product" style={{ color: '#a6a6a6', fontSize:"15px",fontWeight:"100",fontStyle:"italic",textDecoration:"none"}}>
             
              {translation[lang].header_prod}
              </NavLink>
                
              <NavLink to="/about" style={{ color: '#a6a6a6', fontSize:"15px",fontWeight:"100",fontStyle:"italic",textDecoration:"none"}}>
    
              {translation[lang].header_mag}
              </NavLink>
    </>
      )}
    </PopupState>

                <NavLink to="/statics" style={{ color: '#a6a6a6', fontSize:"15px",fontWeight:"100",fontStyle:"italic",textDecoration:"none"}}>
              {translation[lang].header_bus}
              </NavLink>
                <NavLink to="/about" style={{ color: '#a6a6a6', fontSize:"15px",fontWeight:"100",fontStyle:"italic",textDecoration:"none"}}>   
               
              {translation[lang].header_help}      
              </NavLink>
          </Box>
        {
          token && <button onClick={() =>setToken(false)} >{translation[lang].header_log}</button>
        }
           
        <Box sx={{marginLeft:"40px"}}>
        <select style={{fontSize:"20px", borderRadius:"20px"}} onChange={handleClick} defaultValue={lang}>
                <option value="uz">Uz</option>
                <option value="ru">Ru</option>
            </select>
        </Box>
        
             <Box sx={{display: 'flex'}}> 
      <NavLink to={token ? "/admin": "/login"}>
        <Button  sx={{color:"#4E72CA", fontSize:"10px",fontWeight:"bold"}}>{token ? "Admin":"login"} </Button>
        </NavLink>
        <NavLink to="/add">
        <Button   sx={{display: {color:"#4E72CA", fontSize:"10px",fontWeight:"bold"} }}>{translation[lang].header_reg}</Button>
      </NavLink>
            </Box>
        </Toolbar>
          <Form/>
          </Container>
      </AppBar>
      
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box'},
            }}
            >
          {drawer}
        </Drawer>
      </Box>
  </Box>
  </Container>
</>
  );
}