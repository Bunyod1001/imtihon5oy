import {Container, Tabs ,tabsClasses } from '@mui/material';
import { Box } from '@mui/material'
import React from 'react'
import section1 from "./Media/s1.png"
import section2 from "./Media/s2.png"
import section3 from "./Media/s3.png"

export default function Section() {
    const [value, setValue] = React.useState(0);
    const handleChange = () => {
        setValue(setValue);
    };
  

  return (
    <>
    <Box
      sx={{
          width:"100%",
          flexGrow: 1,
          bgcolor: '#B6CAFB29',
          height:"330px",
          paddingTop:"25px"
        }}
        >
            <Container>
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
            width:"1140px"
        }}
        >
     
        <img src={section1}  style={{width:"300px",height:"200px",background:"#B6CAFB",borderRadius:"12px", margin:"30px",fontSize:"10px"}}/>
        <img src={section3} style={{width:"300px",height:"200px",background:"#F7E233",borderRadius:"12px", margin:"30px"}}/>
        <img src={section2} style={{width:"300px",height:"200px",background:"#B4E2E1",borderRadius:"12px", margin:"30px"}}/>
        <img src={section3} style={{width:"300px",height:"200px",background:"#F6DAC2",borderRadius:"12px", margin:"30px"}}/>
       
      </Tabs>
    </Container>
    </Box>
    <Box>
        
    </Box>
    </>
  );
}
