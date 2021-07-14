import React from 'react';
import Slider from 'infinite-react-carousel';
import './carousel.css';
const Carousel = ({images , key , title}) => {
    return <section className="slider">
        <Slider className="slider_content">
           {
            images.map(image => <div key={key}
           className="slider_content_item">
               <img src={image.image} alt={image.title} />
               <p className="slider-description"> {image.title} </p>
           </div>
           )}
        </Slider>
    </section>
}

export default Carousel;