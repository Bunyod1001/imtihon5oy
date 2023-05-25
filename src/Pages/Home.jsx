import React from 'react'
import Header from '../components/Header/Header'
import { useSelector } from 'react-redux'
import Item from '../components/Header/Item/Item';
import { Container, Stack } from '@mui/material';
import Footer from '../components/Footer/Footer';
import Section from '../components/Section/Section';
import MediaCard from '../components/MediaCard/MediaCard';

export default function Home() {
    let productData = useSelector((store) => console.log(store));
    
  return (
    <>
    <Container>
    <Header/>
 
    <Stack style={{marginTop:"90px", justifyContent:"space-ecenly", flexWrap:"wrap" ,gap:"20px", direaction:"row" }} >
       <Item productData={productData} />
    </Stack>
    </Container>
    <Section />
    <MediaCard/>
    <Footer/>
    </>
  )
}
