import React from 'react';
import styled from 'styled-components';
import Slider from 'infinite-react-carousel';

const sliderContainer = styled.div`
  width: 200px;
  height: 100px;
`;

const Carousel = ({ images, key, title }) => {
  return (
    <Slider className="slider_content">
      {images.map((image) => (
        <sliderContainer key={key} className="slider_content_item">
          <img
            width="200px"
            height="200px"
            src={image.image}
            alt={image.title}
          />
          <p className="slider-description"> {image.title} </p>
        </sliderContainer>
      ))}
    </Slider>
  );
};

export default Carousel;
