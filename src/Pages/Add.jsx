import { AppBar, Box, Button, ButtonGroup, Container, CssBaseline, Divider, Drawer, Icon, IconButton,  List, ListItem, ListItemButton, ListItemText,  Toolbar, Typography,  FormControlLabel, Checkbox, FormGroup, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {  NavLink } from 'react-router-dom';
import PopupState from 'material-ui-popup-state';
import kivi from "../components/Header/Media/logo.png"
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import photo from "../components/Header/Media/photo.png"
import photos from "../components/Header/Media/sc.jpg"
import translation from '../Language';
import useLang from '../Hook/uselang';
import useToken from '../Hook/useToken';


const drawerWidth = 240;
const navItems = ["Объявления", "Магазины", "Для бизнеса", "Помощь"];


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));
export default function Add(props) {
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
  
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
    <Container >
        
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
          <Typography sx={{width:"180px", fontSize:"15px",fontWeight:"600",color:"#000",marginRight:"60px"}}>
          {translation[lang].header_icon}
          </Typography>
          <Box sx={{flexGrow:"0.4" ,display: { xs: 'none', sm: 'flex' }, justifyContent:"space-between", gap:"30px" }}>
            
          <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
                <NavLink to="/product" style={{ color: '#000', fontSize:"15px",fontWeight:"600",textDecoration:"none"}}>
                {translation[lang].header_prod}
              
              </NavLink>
                
              <NavLink to="/about" style={{ color: '#000', fontSize:"15px",fontWeight:"600",textDecoration:"none"}}>
              {translation[lang].header_mag}
              </NavLink>
    </>
      )}
    </PopupState>

                <NavLink to="/statics" style={{width:"95px", color: '#000', fontSize:"15px",fontWeight:"600",textDecoration:"none"}}>
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
             <Box sx={{display: 'flex'}}> 
      <NavLink to="/login">
        <Button  sx={{color:"#4E72CA", fontSize:"10px",fontWeight:"bold"}}>{translation[lang].header_log}  </Button>
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

  
<Box sx={{display:'flex', alignItems:"center",justifyContent:"center",gap:"40px" ,marginTop:"190px", gap:"100px"}}>
  <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, 
      }}
      noValidate
      autoComplete="off"
    >
  <div>
        <TextField
          label="Цена"
          id="filled-size-small"
          defaultValue="400 000"
          variant="filled"
          size="small"
          />
        
      </div>
          </Box>
          
      <FormControl sx={{ width:"180px" }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Сум
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>2</option>
          <option value={20}>3</option>
          <option value={30}>4</option>
        </NativeSelect>
      </FormControl>
      <FormControlLabel required control={<Checkbox />} label="Договорная" />
  </Box>
  <Box sx={{display:"flex", marginTop:"40px",alignItems:"center",justifyContent:"center",   gap:"90px"}}>
      <FormControl sx={{ width:"180px" }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Количество комнат*
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>2</option>
          <option value={20}>3</option>
          <option value={30}>4</option>
        </NativeSelect>
      </FormControl>
      <FormControl sx={{ width:"180px" }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Общая площадь* м²

        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>2</option>
          <option value={20}>3</option>
          <option value={30}>4</option>
        </NativeSelect>
      </FormControl>
      <FormControl sx={{ width:"200px" }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Жилая площадьм²
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>264</option>
          <option value={20}>387</option>
          <option value={30}>497</option>
        </NativeSelect>
      </FormControl>
    </Box>

  <Box sx={{display:"flex", marginTop:"40px",alignItems:"center",justifyContent:"center",   gap:"40px"}} >
  <FormGroup>
  <Typography>Расположение*</Typography>
      <FormControlLabel control={<Checkbox defaultChecked />} label="В городе" />
      <FormControlLabel required control={<Checkbox />} label="В пригороде" />
      <FormControlLabel control={<Checkbox />} label="В сельской местности" />
    </FormGroup>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Вдоль трассы" />
      <FormControlLabel required control={<Checkbox />} label="Возле водоема, реки" />
      <FormControlLabel control={<Checkbox />} label="В предгорьях" />
    </FormGroup>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="В дачном массиве" />
      <FormControlLabel required control={<Checkbox />} label="На закрытой территории" />
    </FormGroup>
  </Box>
  <Box sx={{display:"flex", marginTop:"40px",alignItems:"center",justifyContent:"center",   gap:"90px"}}>
      <FormControl sx={{ width:"180px" }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Этажность дома*

        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>2</option>
          <option value={20}>3</option>
          <option value={30}>4</option>
        </NativeSelect>
      </FormControl>
      <FormControl sx={{ width:"180px" }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Высота потолков
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>2</option>
          <option value={20}>3</option>
          <option value={30}>4</option>
        </NativeSelect>
      </FormControl>
      <FormControl sx={{ width:"200px" }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Площадь участка*
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>264</option>
          <option value={20}>387</option>
          <option value={30}>497</option>
        </NativeSelect>
      </FormControl>
    </Box>

  <Box sx={{display:"flex", marginTop:"40px",alignItems:"center",justifyContent:"center",   gap:"40px"}} >
  <FormGroup>
  <Typography>Состояние дома*</Typography>
      <FormControlLabel control={<Checkbox defaultChecked />} label="В городе" />
      <FormControlLabel required control={<Checkbox />} label="В пригороде" />
      <FormControlLabel control={<Checkbox />} label="В сельской местности" />
    </FormGroup>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Вдоль трассы" />
      <FormControlLabel required control={<Checkbox />} label="Возле водоема, реки" />
      <FormControlLabel control={<Checkbox />} label="В предгорьях" />
    </FormGroup>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="В дачном массиве" />
      <FormControlLabel required control={<Checkbox />} label="На закрытой территории" />
    </FormGroup>
  </Box>

  <Box sx={{display:"flex", marginTop:"40px",alignItems:"center",justifyContent:"center",   gap:"130px"}}>
      <FormControl sx={{ width:"210px" }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Тип дома
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Коттедж</option>
          <option value={20}>Коттедж</option>
          <option value={30}>Коттедж</option>
        </NativeSelect>
      </FormControl>
      <FormControl sx={{ width:"400px" }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Электричество
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Есть возможность подключения</option>
          <option value={20}>Есть возможность подключения</option>
          <option value={30}>Есть возможность подключения</option>
        </NativeSelect>
      </FormControl>
    </Box>
    
  <Box sx={{display:"flex", marginTop:"40px",alignItems:"center",justifyContent:"center",   gap:"80px"}} >
  <FormGroup>
  <Typography>Отопление</Typography>
      <FormControlLabel control={<Checkbox defaultChecked />} label="В городе" />
      <FormControlLabel required control={<Checkbox />} label="В пригороде" />
      <FormControlLabel control={<Checkbox />} label="В сельской местности" />
    </FormGroup>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Вдоль трассы" />
      <FormControlLabel required control={<Checkbox />} label="Возле водоема, реки" />
      <FormControlLabel control={<Checkbox />} label="В предгорьях" />
    </FormGroup>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Без отопления" />
    </FormGroup>
  </Box>
  <Box
    component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '750px' },display:"flex",alignItems:"center",justifyContent:"center",
      }}
      noValidate
      autoComplete="off"
    >
  <TextField
          id="standard-multiline-static"
          label="Электричество"
          multiline
          rows={4}
          defaultValue="Есть возможность подключения"
          variant="standard"
        />
  </Box>

  <Box sx={{display:"flex",flexWrap:"wrap",gap:"50px",border:"none", width:"840px",alignItems:"center",justifyContent:"center", marginLeft:"150px",marginTop:"30px"}}>
    <img src={photo} alt="s" />
    <img src={photo} alt="s" />
    <img src={photo} alt="s" />
    <img src={photo} alt="s" />
    <img src={photo} alt="s" />
    <img src={photo} alt="s" />
    <img src={photo} alt="s" />
    <img src={photo} alt="s" />
    <img src={photo} alt="s" />
    <img src={photo} alt="s" />
  </Box>

  <Typography sx={{marginLeft:"200px", marginTop:"30px",fontSize:"24px",fontWeight:"700"}}>
  Местоположение объекта
  </Typography>
  <Box sx={{display:"flex", marginTop:"40px",alignItems:"center",justifyContent:"center",   gap:"130px"}}>
      <FormControl sx={{ width:"210px" }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Тип дома
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Коттедж</option>
          <option value={20}>Коттедж</option>
          <option value={30}>Коттедж</option>
        </NativeSelect>
      </FormControl>
      <FormControl sx={{ width:"400px" }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Электричество
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Есть возможность подключения</option>
          <option value={20}>Есть возможность подключения</option>
          <option value={30}>Есть возможность подключения</option>
        </NativeSelect>
      </FormControl>
    </Box>

    <Box sx={{marginLeft:"200px", marginTop:"30px"}}>
        <img src={photos} alt="x" />
  <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, 
      }}
      noValidate
      autoComplete="off"
    >
  <div>
        <TextField
          label="Телефонный номер"
          id="filled-size-small"
          defaultValue="+99894 888 74452"
          variant="filled"
          size="small"
          />
        
      </div>
  <div>
        <TextField
          label="Email-адреc"
          id="filled-size-small"
          defaultValue="+99894 888 74452"
          variant="filled"
          size="small"
          />
        
      </div>
  <div>
        <TextField
          label="Контактный лицо"
          id="filled-size-small"
          defaultValue="Зухриддин"
          variant="filled"
          size="small"
          />
        
      </div>
          </Box>
<Box sx={{display:"flex", gap:"30px",alignItems:"center",marginTop:"20px",marginBottom:"60px"}}>
          <Button sx={{background:"#19D476",height:"40px",fontSize:"10px", width:"300px", borderRadius:"20px",color:"#000"}}>Добавить обьявления бесплатно</Button>
        <NavLink style={{color:"#4E72CA"}}>
        Предпросмотр
        </NavLink>
        </Box>
    </Box>
    </Container >
    </>
  )
}
