import React from 'react'
import Header from '../components/Header/Header'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';
import oval from "../Media/Oval.png"
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import translation from '../Language';
import useLang from '../Hook/uselang';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Statics() {

    let [lang]=useLang()
  return (
    <>
    <Container>
    <Header/>
    <Box sx={{ display:"flex",gap:"400px",marginTop:"160px",width:"1030px",marginLeft:"30px",justifyContent:"space-evenly"}}>
    <Typography>
    {translation[lang].stat_name}
    </Typography>
    <Box sx={{ display:"flex",gap:"30px" }}>
    <Typography>
    {translation[lang].stat_names}
    
    </Typography>
    <Button variant='outlined' sx={{height:"40px",width:"160px",margin:"5px"}}><AddCircleIcon sx={{color:"#41D481", fontSize:"55px",paddingRight:"3px"}}/> Пополнить</Button>
    </Box>
    </Box>
    <TableContainer sx={{width:"1030px",height:"600px",marginLeft:"30px"}} component={Paper}>
      <Table sx={{ width:"1030px",height:"600px"}} aria-label="simple table">
        <TableHead>
          <TableRow>                 
            <TableCell>{translation[lang].stat_th1} </TableCell>
            <TableCell >{translation[lang].stat_th2}</TableCell>
            <TableCell> {translation[lang].stat_th3}</TableCell>
            <TableCell >{translation[lang].stat_th4}</TableCell>
            <TableCell>{translation[lang].stat_th5}</TableCell>
          </TableRow>
          <TableRow>                
                  	                                      
            <TableCell>{translation[lang].stat_th6}</TableCell>
            <TableCell align="right">{translation[lang].stat_th7}</TableCell>
            <TableCell align="right">{translation[lang].stat_th8} </TableCell>
            <TableCell align="right">{translation[lang].stat_th9}</TableCell>
            <TableCell align="right">{translation[lang].stat_th10}</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ }}
            >
              <TableCell component="th" scope="row">
              <img src={oval} alt="s" />
              </TableCell>
              <TableCell align="right">{translation[lang].stat_tb}</TableCell>
              <TableCell align="right"sx={{width:"105px"}}>{translation[lang].stat_tb1}</TableCell>
              <TableCell align="right" sx={{width:"110px"}}> {translation[lang].stat_tb2}  </TableCell>
              <TableCell align="right"><Fab variant="extended" sx={{background:"#41D481"}} size="small" color="primary" aria-label="add">
                  <NavigationIcon sx={{ mr: 1 }} />
                  {translation[lang].stat_tb3}
                      </Fab></TableCell>
              <TableCell align="right"> <Fab variant="extended" size="small" sx={{width:"190px"}} color="primary" aria-label="add">
        <NavigationIcon sx={{ mr: 1 }} />
        {translation[lang].stat_tb4}
      </Fab>
      </TableCell>
              <TableCell align="right"> <RadioButtonCheckedIcon/>
                            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </>
  );
}
