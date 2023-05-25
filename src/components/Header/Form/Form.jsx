import { Box, Button, Container, Menu, MenuItem } from '@mui/material'
import React from 'react'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { NavLink } from 'react-router-dom';
import translation from '../../../Language';
import useLang from '../../../Hook/uselang';

export  function Form() {
  let [lang]=useLang()

  return (
    <>
    <Container>
    <Box sx={{display:"flex", gap:"40px"}}>
    <form style={{border:"1px solid #a6a6a6", borderRadius:"40px"}}>
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button  {...bindTrigger(popupState) }  sx={{width:"180px", fontSize:"10px",color:"#000", fontWeight:'700',gap:"10px"}}>
          
          {translation[lang].form_categ}
            <KeyboardArrowDownIcon fontSize="small"/>
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
          </>
      )}
    </PopupState>
    <input type="text" placeholder='Что будем искать ?'   style={{width:"330px",height:"39px",border:"0.3px solid #a6a6a6"}}/>
    <PopupState variant="popover" popupId="demo-popup-menu" >
      {(popupState) => (
        <>
          <Button  {...bindTrigger(popupState)} sx={{width:"190px", fontSize:"10px",color:"#000", fontWeight:'700',gap:"10px"}}>
          
          {translation[lang].form_btn}
            <KeyboardArrowDownIcon fontSize="small"/>
          </Button>
          <Menu {...bindMenu(popupState)} >
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
          </>
      )}
    </PopupState>

    <Button sx={{background:"#19D476" , color:"#FFFFFF",fontSize:"12px",height:"39px", borderRadius:"30px" }}>
    
    {translation[lang].form_butn}
    </Button>
    </form>
    <NavLink to={"/add"}>
    <Button sx={{background:"#19D476" , color:"#FFFFFF", fontSize:"10px",width:"190px",borderRadius:"40px",marginLeft:"50px"}}>
        
        <AddCircleIcon style={{fontSize:'26px',marginRight:"6px"}}/>
        {translation[lang].form_add}
    </Button>
     </NavLink>
    </Box>
    </Container>
    </>
  );
}
