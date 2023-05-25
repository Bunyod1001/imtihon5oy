import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



function valueLabelFormat(value) {
    const units = ['Cyм'];
  
    let unitIndex = 0;
    let scaledValue = value;
  
    while (scaledValue >= 1024 && unitIndex < units.length - 1) {
      unitIndex += 1;
      scaledValue /= 1024;
    }
  
    return `${scaledValue} ${units[unitIndex]}`;
  }
  
  function calculateValue(value) {
    return 2 ** value;
  }


export default function Sliders() {
  const [value, setValue] = React.useState([100000, 3700000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 830 }}>
       
      <Slider
        getAriaLabel={() => 'Money range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        scale={calculateValue}
      />
    </Box>
  );
}