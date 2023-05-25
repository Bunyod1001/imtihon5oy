import { Card, Button,CardActionArea, CardContent, CardMedia, Typography,  Box, Tabs, tabsClasses } from '@mui/material'
import { Container } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import translation from '../../Language';
import useLang from '../../Hook/uselang';


export default function Inter() {
    let productData = useSelector((store) => store.product.product);
    const [value, setValue] = React.useState(0);
    const handleChange = () => {
        setValue(setValue);

      }
      const loadMore = () => {
        setnoOfElement(noOfElement + 5);
      };
     const[noOfElement,setnoOfElement] = React.useState(3);

  const slice = productData.slice(0,  noOfElement);

  let [lang]=useLang()
  
  return (
    <>
   <Container>
  <Box>
  <Typography sx={{color:"#41D481", fontWeight:700}}>
  {translation[lang].intro_sec}
  </Typography>
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
        <Box sx={{display:"flex",flexWrap:"wrap",gap:"20px",border:"none"}}>
    {slice && slice.map((product, i) => (
    <Card key={i} sx={{width:"270px",display:'flex', flexDirection:"column",justifyContent:"center"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt="green iguana"
        />
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
    </Box>
  </Box>
  </Container>
    </>
  )
}
