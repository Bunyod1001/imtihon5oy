import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import sin1 from "./Media/sin1.png";
import sin2 from "./Media/sin2.png";
import sin3 from "./Media/sin3.png";
import sin4 from "./Media/sin4.png";
import sin5 from "./Media/sin5.png";
import { Tabs, tabsClasses } from "@mui/material";
import section1 from "./Media/g1.png";
import section2 from "./Media/g2.png";
import section3 from "./Media/g3.png";
import section4 from "./Media/g4.png";
import { useParams } from "react-router-dom";
import translation from "../../Language";
import useLang from "../../Hook/uselang";
import { useState } from "react";
import { productAction } from "../../store/products/products.slice";

export default function Single() {
  const smth = useParams();
  const productData = useSelector((store) => store.product.product);


  const [noOfElement, setnoOfElement] = React.useState(1);

  // const slice = productData.slice(0,  noOfElement);

  const [value, setValue] = React.useState(0);
  const handleChange = () => {
    setValue(setValue);
  };

  // let dispatch = useDispatch();
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/1")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       dispatch(productAction.setProduct(json));
  //     });
  // }, []);

 
  const [showMore, setShowMore] = useState(false);
  const loadMore = () => {
    setShowMore(true)
  };

  const initalProducts = !showMore && productData
    ? productData.filter((item, index) => index < 1)
    : productData;


  let [lang] = useLang();
  return (
    <>
   <Container >
   <Box sx={{marginTop:"170px"}}>
   <Typography sx={{color:"#787993",fontWeight:"700",fontSize:"14px"}}>
   {translation[lang].sing_text}
   
   </Typography>
   <Typography  sx={{width:"870px",color:"#414D6A",fontWeight:"500",fontSize:"30px"}}>
   {translation[lang].sing_texts}
   </Typography>
   </Box>

   </Container>
   <Container>
   <Box sx={{display:'flex',marginTop:"20px"}}>
              <Box sx={{display:"inline-block",flexDirection:"row",textAlign:"center"}}>
              <img src={sin1}/><br />
              <img src={sin2}/><br />
              <img src={sin3}/><br />
              <img src={sin4}/><br />
              <img src={sin5}/>
              
              </Box>
    <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:'space-between', gap:"20px"}}>
        
            {initalProducts &&
              initalProducts?.map((product, i) => (

                <Card key={i} sx={{
                    maxWidth:980, display:'flex',
                }}>
                    <img style={{height:"400px"}} src={product.image} alt="dsc" />
                    <CardContent>
                    <Box sx={{display:"flex", gap:"70px",color:"#414D6A", fontSize:"14px",fontWeight:"500"}}>
                    <Typography>
                    {translation[lang].sing_arc}  
                    </Typography>
                    <Typography>
                    {translation[lang].sing_data}  
                     
                    </Typography>
                    </Box>
                    <Typography sx={{fontWeight:"bold", color:"#444444",paddingTop:"10px"}} gutterBottom variant='h4' component="div">
                        {product.price} {translation[lang].sing_price}
                    </Typography>
                    <Typography sx={{color:"#4E72CA", fontSize:"14px",fontWeight:"600"}}>
                    {translation[lang].sing_place}
                    
                    </Typography>
                    <Box sx={{background:"#65E99F",color:"#000",fontWeight:"700",textAlign:"center",width:"320px",borderRadius:"40px",marginTop:"10px"}}> 99891 166 ****<Button variant='contained' sx={{borderRadius:"40px",color:"#000",background:"#41D481"}}> {translation[lang].sing_btn} </Button></Box>
                    <Box sx={{background:"#65E99F",color:"#000",fontWeight:"700",textAlign:"center",width:"320px",borderRadius:"40px",marginBottom:"10px",marginTop:"5px"}}> 99891 166 ****<Button variant='contained'  sx={{borderRadius:"40px",color:"#000",background:"#41D481"}}>{translation[lang].sing_btn}</Button></Box>
                    <Box sx={{display:"flex",}}>
                    <Typography>{translation[lang].sing_avt} </Typography>
                    <Typography sx={{color:"#2AAE63",fontWeight:"600",marginBottom:"10px"}}>{translation[lang].sing_name}</Typography>
                    </Box>
                    <Box sx={{display:"flex", gap:"10px"}}>
                        <Button sx={{background:"#304FFF", color:"#FFFFFF", borderRadius:"40px", fontSize:"9px",fontWeight:"550",height:"40px", width:"130px"}}> {translation[lang].sing_btn1}</Button>
                        <Button sx={{background:"#4E72CA", color:"#FFFFFF", borderRadius:"40px", fontSize:"9px",fontWeight:"550",height:"40px", width:"180px"}}>{translation[lang].sing_btn2}</Button>
                    </Box>

                    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid
        container
        spacing={2}
        sx={{
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
        {[...Array(12)].map((_, index) => (
          <Grid key={index} {...{ xs: 12, sm: 6, md: 3, lg: 3 }} minHeight={90} minWidth={125}/>
        ))}
      </Grid>
    </Box>
                   <Box>

                   </Box>










                    <Typography sx={{fontWeight:"400",fontSize:"15px" }} gutterBottom  component="div">
                    {translation[lang].sing_p} 
                    </Typography>
                    <Typography variant='body1' color="text.secondary">
                    {translation[lang].sing_pos}
                    </Typography>
                    </CardContent>
                </Card>
                     
            ))
          
        }

    </Box>
    </Box>
  <Box sx={{marginTop:"20px",display:"flex",gap:"40px", marginBottom:"20px"}}>
  <Typography sx={{color:"#4E72CA" ,fontSize:"20px",fontWeight:"800"}}>
  {translation[lang].sing_foter}
  
  </Typography>
  <Typography sx={{color:"#9B9B9B" ,fontSize:"20px",fontWeight:"800"}}>
  {translation[lang].sing_foter1}
  </Typography>
        </Box>
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
                width:"1090px"
            }}
          >
                 <Box sx={{display:"flex",flexWrap:"wrap",gap:"20px",border:"none"}}>
                  {initalProducts &&
            initalProducts?.map((product, i) => (
        <Card key={i} sx={{width:"260px"}}>
      <CardActionArea>
        <CardMedia/>
        <img src={section1}  style={{width:"200px",height:"150px",background:"#B6CAFB",borderRadius:"12px", margin:"25px",fontSize:"10px"}}/>
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
                   <Box sx={{display:"flex",flexWrap:"wrap",gap:"20px",border:"none"}}>
                  {initalProducts &&
            initalProducts?.map((product, i) => (
        <Card key={i} sx={{width:"260px"}}>
      <CardActionArea>
        <CardMedia/>
      <img src={section3} style={{width:"200px",height:"150px",background:"#F7E233",borderRadius:"12px", margin:"25px"}}/>
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
                  <Box sx={{display:"flex",flexWrap:"wrap",gap:"20px",border:"none"}}>
                  {initalProducts &&
            initalProducts?.map((product, i) => (
        <Card key={i} sx={{width:"260px"}}>
      <CardActionArea>
        <CardMedia/>
        <img src={section4}  style={{width:"200px",height:"150px",background:"#B6CAFB",borderRadius:"12px", margin:"25px",fontSize:"10px"}}/>
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
                  <Box sx={{display:"flex",flexWrap:"wrap",gap:"20px",border:"none"}}>
                  {initalProducts &&
            initalProducts?.map((product, i) => (
        <Card key={i} sx={{width:"260px"}}>
      <CardActionArea>
        <CardMedia/>
      <img src={section2} style={{width:"200px",height:"150px",background:"#F6DAC2",borderRadius:"12px", margin:"25px"}}/>
           
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
                  <Box sx={{display:"flex",flexWrap:"wrap",gap:"20px",border:"none"}}>
                  {initalProducts &&
            initalProducts?.map((product, i) => (
        <Card key={i} sx={{width:"260px"}}>
      <CardActionArea>
        <CardMedia/>
            <img src={section4} style={{width:"200px",height:"150px",background:"#F6DAC2",borderRadius:"12px", margin:"25px"}}/>
        
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
         
        </Tabs>
    
    </Container>
</>
  );
}
