import React from 'react';
import Slider from 'infinite-react-carousel';

const Carousel = ({images}) => {
    return (
        <Slider>
            images.map(image)
        </Slider>
    )
}

export default Carousel;