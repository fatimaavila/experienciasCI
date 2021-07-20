import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import spa from '../../assets/spaCategory.jpg';
import pareja from '../../assets/parejaCategory.jpg';
import motor from '../../assets/motorCategory.jpg';
import aventure from '../../assets/routesCategory.jpeg';
import fly from '../../assets/globoCategory.jpg';

const items = [
  <div className="item" data-value="1">
    <img width="10%" src={aventure} alt="category" />
  </div>,
  <div className="item" data-value="2">
    <img width="10%" src={motor} alt="category" />
  </div>,
  <div className="item" data-value="3">
    <img width="10%" src={pareja} alt="category" />
  </div>,
  <div className="item" data-value="4">
    <img width="10%" src={fly} alt="category" />
  </div>,
  <div className="item" data-value="5">
    <img width="10%" src={spa} alt="category" />
  </div>,
];

const responsive = {
  1100: { items: 1 },
};

function CarouselFS() {
  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={3000}
      infinite={true}
      animationType="fadeout"
      animationDuration={500}
      animationEasingFunction="ease"
      mouseTracking
      items={items}
      responsive={responsive}
    />
  );
}
export default CarouselFS;
