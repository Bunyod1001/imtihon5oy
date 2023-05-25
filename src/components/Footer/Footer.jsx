import { Box } from '@mui/system';
import React from 'react';
import { AppBar, Container, CssBaseline, Icon,  Table,  TableBody,  TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom';
import kivis from "./Media/sss.png"
import b1 from "./Media/b2.png"
import b2 from "./Media/b1.png"
import translation from '../../Language';
import useLang from '../../Hook/uselang';

export default function Footer() {
  
  let [lang]=useLang()

  return (
    <>
    <Box sx={{background:"#33383C", height:"933px"}}>
    <CssBaseline />
      <Box component="nav" sx={{height:"150px" ,background:"#FFFFFF", boxShadow:" 12px 4px 24px rgba(0, 0, 0, 0.0647645)", color:"#000000" , backgroundColor:"#282B30",paddingTop:'40px'}}>
    <Container>
        <Toolbar sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Icon sx={{width:"70px",height:"70px",marginRight:"15px"}}>
           <img src={kivis}alt="d" />
          </Icon>
          <Typography sx={{width:"230px", fontSize:"15px",fontWeight:"100",fontStyle:"italic",color:"#a6a6a6",marginRight:"50px"}}>
          {translation[lang].footer_text}
          </Typography>
          <Box sx={{width:"450px" ,flexGrow:"0.4" ,display: { xs: 'none', sm: 'flex' }, justifyContent:"space-between" }}>
          <Typography sx={{fontSize:"15px",fontWeight:"100",fontStyle:"italic",color:"#a6a6a6",marginRight:"50px"}}>
           
          {translation[lang].footer_texts}
          </Typography>
          </Box>
             <Box sx={{display: 'flex'}}> 
      <NavLink to="/signin">
        <img src={b1} alt="ds" />
        </NavLink>
        <NavLink to="/freetrial">
        <img src={b2} alt="ds" />
      </NavLink>
            </Box>
        </Toolbar>
          
          </Container>
      </Box>  
      <Container>
    <Table>
      <TableHead sx={{display:"flex" ,alignItems:"center",justifyContent:"center"}}>
        <TableRow>
         <Box sx={{ display:"flex", justifyContent:"space-between", marginTop:"50px", fontSize:"14px",gap:"60px"}}>
         <Box sx={{color:"#FFFFFF", fontWeight:"700",paddingRight:"50px"}}>{translation[lang].footer_t1} 
         <Box sx={{width:"160px",color:"#878F99"}}> 
         {translation[lang].footer_b1}
         
 </Box>
 </Box>
         <Box sx={{color:"#FFFFFF", fontWeight:"700",paddingRight:"40px"}}>{translation[lang].footer_t2}
         <Box sx={{width:"210px",color:"#878F99"}}> 
         {translation[lang].footer_b2}
         </Box>
 </Box>
         <Box sx={{color:"#FFFFFF", fontWeight:"700",paddingRight:"40px"}}>{translation[lang].footer_t3}
         <Box sx={{width:"210px",color:"#878F99"}}>  {translation[lang].footer_b3}
         </Box>
</Box>
 <Box sx={{color:"#FFFFFF", fontWeight:"700"}}>{translation[lang].footer_t4}
  <Box sx={{width:"210px",color:"#878F99"}}>
  {translation[lang].footer_b4}
   
  </Box>
 </Box>
 </Box>
         <Box sx={{display:"flex", justifyContent:"space-between", marginTop:"50px", fontSize:"14px",gap:"2px"}}>
         <Box sx={{color:"#FFFFFF", fontWeight:"700"}}>{translation[lang].footer_t5}
         <Box sx={{width:"210px",color:"#878F99"}}>{translation[lang].footer_b5}
   </Box>
 </Box>
         <Box sx={{color:"#FFFFFF", fontWeight:"700"}}>{translation[lang].footer_t6}
         <Box sx={{width:"210px",color:"#878F99"}}>  {translation[lang].footer_b6}</Box>
 </Box>
         <Box sx={{color:"#FFFFFF", fontWeight:"700"}}> {translation[lang].footer_t2}
         <Box sx={{width:"210px",color:"#878F99"}}>  {translation[lang].footer_b2}</Box>
</Box>
 <Box sx={{color:"#FFFFFF", fontWeight:"700"}}>{translation[lang].footer_t1}
  <Box sx={{width:"210px",color:"#878F99"}}>
  {translation[lang].footer_b4}
  </Box>
 </Box>
 </Box>

        </TableRow>
      </TableHead>
    <TableBody sx={{marginTop:"60px", display:"inline-block",display:"flex" ,gap:"40px",textAlign:"center",justifyContent:"center"}}>
             <NavLink to="/" style={{ color: '#05F3B3', fontSize:"15px",fontWeight:"100",textDecoration:"none",textAlign:"center"}}>
             
             {translation[lang].footer_icon}                                                                                                          
              </NavLink>
                
              <NavLink to="/about" style={{ color: '#a6a6a6', fontSize:"15px",fontWeight:"100",textDecoration:"none"}}>
              {translation[lang].header_prod}
              </NavLink>

              <NavLink to="/product" style={{ color: '#a6a6a6', fontSize:"15px",fontWeight:"100",textDecoration:"none"}}>
              {translation[lang].header_mag}
              </NavLink>
                
              <NavLink to="/about" style={{ color: '#a6a6a6', fontSize:"15px",fontWeight:"100",textDecoration:"none"}}>
              {translation[lang].header_help}    
              </NavLink>

              <NavLink to="/static" style={{ color: '#a6a6a6', fontSize:"15px",fontWeight:"100",textDecoration:"none"}}>
              {translation[lang].header_bus}
              </NavLink>
                
              <NavLink to="/product" style={{ color: '#a6a6a6', fontSize:"15px",fontWeight:"100",textDecoration:"none"}}>
             
              {translation[lang].footer_sayt}
              </NavLink>
              <NavLink to="/" style={{ color: '#a6a6a6', fontSize:"15px",fontWeight:"100",textDecoration:"none"}}>
              
              {translation[lang].footer_comp}
              </NavLink>
    </TableBody>
    </Table>
    </Container>
    </Box>
    </>
  )
}
