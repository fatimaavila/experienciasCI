import React from 'react';
import Slider from 'infinite-react-carousel';

const Carousel = ({images}) => {
    return (
        <Slider>
            <div></div>
            images.map(image)
        </Slider>
    )
}

export default Carousel;