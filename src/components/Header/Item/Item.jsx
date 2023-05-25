

import { Card, Button,CardActionArea, CardContent, CardMedia, Typography, CardActions, Box, Tabs, tabsClasses } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import air from "../Media/Airplane.png"
import air1 from "../Media/Briefcase.png"
import air2 from "../Media/Challenge.png"
import air3 from "../Media/Gaming.png"
import air4 from "../Media/In Maintenance.png"
import air5 from "../Media/Man.png"
import air6 from "../Media/Store.png"
import air7 from "../Media/Terminal.png"
import air8 from "../Media/Gifts.png";
import translation from '../../../Language';
import useLang from '../../../Hook/uselang';
import { NavLink } from 'react-router-dom'

export default function Item() {
    let productData = useSelector((store) => store.product.product);
    console.log(productData)
    const [value, setValue] = React.useState(0);
    const handleChange = () => {
        setValue(setValue);

      }
      const loadMore = () => {
        setnoOfElement(noOfElement + 4);
      };
     const[noOfElement,setnoOfElement] = React.useState(16);

  const slice = productData.slice(0,  noOfElement);

  let [lang]=useLang()
  
  return (
    <>
    <Container>
    <Box >
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 1900, sm: 1140 },
        bgcolor: 'background.paper',
        paddingTop:"60px"
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        <img src={air}  style={{width:"60px",height:"60px",background:"#B6CAFB",borderRadius:"12px", margin:"30px",fontSize:"10px"}}/>
        <img src={air1} style={{width:"60px",height:"60px",background:"#F7E233",borderRadius:"12px", margin:"30px"}}/>
        <img src={air2} style={{width:"60px",height:"60px",background:"#B4E2E1",borderRadius:"12px", margin:"30px"}}/>
        <img src={air3} style={{width:"60px",height:"60px",background:"#F6DAC2",borderRadius:"12px", margin:"30px"}}/>
        <img src={air4} style={{width:"60px",height:"60px",background:"#B6CAFB",borderRadius:"12px", margin:"30px"}}/>
        <img src={air5} style={{width:"60px",height:"60px",background:"#FF9E83",borderRadius:"12px", margin:"30px"}}/>
        <img src={air6} style={{width:"60px",height:"60px",background:"#B4E2E1",borderRadius:"12px", margin:"30px"}}/>
        <img src={air7} style={{width:"60px",height:"60px",background:"#FF9E83",borderRadius:"12px", margin:"30px"}} />
        <img src={air8} style={{width:"60px",height:"60px",background:"#F6DAC2",borderRadius:"12px", margin:"30px"}} />
        
      </Tabs>
    </Box>
    </Box>
    <Box sx={{display:"flex",flexWrap:"wrap",gap:"20px",border:"none"}}>
    {slice && slice.map((product, i) => (
    <Card key={i} sx={{width:"260px"}}>
      <CardActionArea>
        <NavLink to={`/sin/${product.id}`}>
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
    <Box sx={{marginTop:'30px', alignItems:"center", justifyContent:"center", textAlign:"center"}}>
          <Button variant="text" onClick={()=> loadMore()} >  {translation[lang].item_more}</Button>
    </Box>
    </Container>
    </>
  )
}
