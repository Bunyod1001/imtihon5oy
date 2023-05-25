import {Card, AppBar, Box, tabsClasses, Button, ButtonGroup, Container, CssBaseline, Divider, Drawer, Icon, IconButton, List, ListItem, ListItemButton, ListItemText,  Toolbar, Typography, CardActionArea, CardMedia, CardContent, Tabs } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import kivi from "../components/Header/Media/logo.png"
import { Search } from '../components/Search';
import Search2 from '../components/Search2/Search2';
import Footer from '../components/Footer/Footer';
import Sliders from '../components/Slider/Slider';
import Status from '../components/Status/Status';
import Type from '../components/Type/Type';
import Locat from '../components/Locat/Locat';
import { useSelector } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';
import Inter from '../components/Inter/Inter';
import translation from '../Language';
import useLang from '../Hook/uselang';
import useToken from '../../src/Hook/useToken';


const drawerWidth = 240;
const navItems = ["Объявления", "Магазины", "Для бизнеса", "Помощь"];

export default function Header(props) {
  let [token,setToken] = useToken()
  let [lang, setLang] = useLang()
  console.log(translation);
  
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
  

  let productData = useSelector((store) => store.product.product);
  const [value, setValue] = React.useState(0);
  const handleChange = () => {
      setValue(setValue);

    }
    const loadMore = () => {
      setnoOfElement(noOfElement + 4);
    };
   const[noOfElement,setnoOfElement] = React.useState(16);
   const slice = productData.slice(0,  noOfElement);

   
  
    return (
        <>   
<Container>
<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{height:"100px",paddingTop:"15px" ,background:"#FFFFFF", boxShadow:" 12px 4px 24px rgba(0, 0, 0, 0.0647645)", color:"#000000"}}>
<Container>
        <Toolbar sx={{display:"flex",gap:"20px"}}>
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
          <Typography sx={{width:"180px",fontSize:"15px",fontWeight:"600",color:"#000",marginRight:"60px"}}>
          {translation[lang].header_icon}
          </Typography>
          <Box sx={{flexGrow:"0.4" ,display: { xs: 'none', sm: 'flex' }, justifyContent:"space-between" , gap:"30px"}}>
            
          <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
                <NavLink to="/about" style={{ color: '#000', fontSize:"15px",fontWeight:"600",textDecoration:"none"}}>
                {translation[lang].header_prod}
              
              </NavLink>
                
              <NavLink to="/product" style={{ color: '#000', fontSize:"15px",fontWeight:"600",textDecoration:"none"}}>
              {translation[lang].header_mag}
              </NavLink>
    </>
      )}
    </PopupState>

                <NavLink to="/" style={{width:"95px", color: '#000', fontSize:"15px",fontWeight:"600",textDecoration:"none"}}>
                {translation[lang].header_bus}
              </NavLink>
                <NavLink to="/about" style={{ color: '#000', fontSize:"15px",fontWeight:"600",textDecoration:"none"}}>   
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
        {/* <Box >
            <Button value="uz" sx={{fontSize:"10px", fontWeight:"600" ,color:"#000"}}> Рус</Button>|
            <Button value="ru" sx={{fontSize:"10px", fontWeight:"600",color:"#000"}}>O'z</Button>
        </Box> */}

             <Box sx={{display: 'flex'}}> 
      <NavLink to="/login">
        <Button  sx={{color:"#4E72CA", fontSize:"10px",fontWeight:"bold"}}>{translation[lang].header_log} </Button>
        </NavLink>
        <NavLink to="/add">
        <Button   sx={{display: {color:"#4E72CA", fontSize:"10px",fontWeight:"bold"} }}>{translation[lang].header_reg}</Button>
      </NavLink>
            </Box>
        </Toolbar>
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
  <Box sx={{marginTop:"130px",marginLeft:"25px"}}>
<Search/>
<ButtonGroup  id="1" sx={{ gap:"20px",marginTop:"10px"}}>
      <Button variant="contained"  sx={{background:"#E5E3FF",color:"#000",fontSize:"10px", height:"25px"}}> {translation[lang].product_button1}</Button>
      <Button variant="contained"  sx={{background:"#E4F6FF",color:"#000",fontSize:"10px", height:"25px"}}> {translation[lang].product_button2}</Button>
      <Button variant="contained"  sx={{background:"#D2FFDB",color:"#000",fontSize:"10px", height:"25px"}}> {translation[lang].product_button3}</Button>
      <Button variant="contained"  sx={{background:"#F6DAC2",color:"#000",fontSize:"10px", height:"25px"}}> {translation[lang].product_button4}</Button>
      <Button variant="contained"  sx={{background:"#D8D8D8",color:"#000",fontSize:"10px", height:"25px"}}> {translation[lang].product_button5}</Button>
      <Button variant="contained"  sx={{background:"#D8D8D8",color:"#000",fontSize:"10px", height:"25px"}}> {translation[lang].product_button6}</Button>
      <Button variant="contained"  sx={{background:"#D8D8D8",color:"#000",fontSize:"10px", height:"25px"}}> {translation[lang].product_button7}</Button>
    </ButtonGroup>
</Box>
{console.log(ButtonGroup)}
<Box sx={{ display:"flex",gap:"50px",marginTop:"40px" ,marginLeft:"25px"}}>
<Typography>
{translation[lang].product_ser}

</Typography>
    <Search2/>
    </Box>
    <Box sx={{ display:"flex",gap:"35px",marginTop:"40px" ,marginLeft:"25px"}}>
    <Typography>
    {translation[lang].product_ser1}
    </Typography>  
    <Sliders/>
    </Box>

    <Box sx={{display:"flex",alignItems:"center",marginLeft:"15px"}}>
        <Status/> 
        <Type/>
        <Locat/>
        <Button sx={{background:"#304FFF", height:"50px",width:"160px",color:"#FFFFFF",borderRadius:"40px",marginLeft:"100px"}}>{translation[lang].product_button}</Button>
    </Box>

    <Box sx={{display:"flex",flexWrap:"wrap",gap:"20px",border:"none"}}>
    {slice && slice.map((product, i) => (
    <Card key={i} sx={{width:"260px"}}>
      <CardActionArea>
        <NavLink to={`/abouts/${product.id}`}>
        <CardMedia
          component="img"
          height="260"
          image={product.image}
          alt="green iguana"
        />
        </NavLink>
        <CardContent>
          <Typography gutterBottom  component="div" sx={{fontWeight:"800", fontSize:"15px"}}>
            {product.title}
          </Typography>
          <Typography variant="body8" color="text.secondary">
          {translation[lang].item_time}
          </Typography>
          <Typography variant="h6" color="text" sx={{fontWeight:"700"}}>
            {product.price} {translation[lang].item_money}
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    ))}
    </Box>
    <Box sx={{marginTop:'30px' , textAlign:"center" }}>
          <Button variant="text" onClick={()=> loadMore()} >{translation[lang].product_btn} </Button>
    </Box>
<Box >
    <Typography  sx={{alignItems:"center",justifyContent:"center" , fontWeight:700,marginTop:"30px"}}>
    <SearchIcon /> {translation[lang].product_ser2}
    </Typography>
    <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{alignItems:"center",justifyContent:"center",display:"flex",width:"1120px",
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        <Box sx={{alignItems:"center",justifyContent:"center",display:"flex",gap:"30px"}}>
       <Typography color={'#4E72CA'}>{translation[lang].product_f1} <br/>
       <SearchIcon />{translation[lang].product_f2}</Typography>
       <Typography color={'#4E72CA'}>{translation[lang].product_f1} <br/>
       <SearchIcon />{translation[lang].product_f2}</Typography>
       <Typography color={'#4E72CA'}>{translation[lang].product_f1} <br/>
       <SearchIcon />{translation[lang].product_f2}</Typography>
       <Typography color={'#4E72CA'}>{translation[lang].product_f1} <br/>
       <SearchIcon />{translation[lang].product_f2}</Typography>
       <Typography color={'#4E72CA'}>{translation[lang].product_f1} <br/>
       <SearchIcon />{translation[lang].product_f2}</Typography>
       <Typography color={'#4E72CA'} >{translation[lang].product_f1}<br/>
       <SearchIcon />{translation[lang].product_f2}</Typography>
       <Typography color={'#4E72CA'}>{translation[lang].product_f1}<br/>
       <SearchIcon />{translation[lang].product_f2}</Typography>
        </Box>
      </Tabs>
  </Box>
<Box sx={{marginBottom:"30px", marginTop:"30px"}}>
  <Inter/>
  </Box>
  </Container>

    <Footer/>
</>
  );
}
