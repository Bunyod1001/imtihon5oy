
import React from 'react'
import Header from '../components/Header/Header'
import { useSelector } from 'react-redux';
import Single from '../components/Single/Single';
import Footer from '../components/Footer/Footer';


export default function About() {

  const productData = useSelector((store) => store.product.product);
  console.log(productData);
    const loadMore = () => {
        setnoOfElement(noOfElement + 0);
    }
  
  const[noOfElement,setnoOfElement] = React.useState(1);

  const slice = productData.slice(0,  noOfElement);
  return (
   <>
   <Header/>
  <Single/>
  <Footer/>
</>
  )  
}
