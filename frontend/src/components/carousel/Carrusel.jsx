import React  from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import "./carrusel.css";
import styled from 'styled-components';


const Div = styled.div`
display:flex;
aling-items: space-between;
gap: 20px;
`
function Carrusel() {

const breakpoints = [
  {width: 200 , itemsToShow: 1,  },
  {width: 800 , itemsToShow: 2 , },
  {width: 900 , itemsToShow: 3 , },
  {width: 1200 , itemsToShow: 4 ,}
]


  return (
       
    <Div className="carousel">
      <Carousel breakpoints={breakpoints}>
          
        <Card  number="1" />
        <Card number="2"/>
        <Card number="3"/>
        <Card number="4"/>
        <Card number="5"/>
        <Card number="6"/>
        <Card number="7"/>
        <Card number="8"/>
        
        
      </Carousel>
    </Div>
      
  )
}
  
export default Carrusel;