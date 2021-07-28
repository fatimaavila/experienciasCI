import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import gastro from '../../assets/gastroCategory.jpg';
// import aqua from '../../assets/aquaCategory.jpeg';
// import spa from '../../assets/spaCategory.jpg';
// import pareja from '../../assets/parejaCategory.jpg';
// import motor from '../../assets/motorCategory.jpg';
// import aventure from '../../assets/routesCategory.jpeg';
// import fly from '../../assets/globoCategory.jpg';
// import { useEffect, useState } from 'react';

function CarouselFS({ photos }) {
  console.log('foto', photos);

  return (
    <>
      <Carousel className="carousel-fs-fs">
        {photos.photos &&
          photos.photos.map((photo) => (
            <div key={photo.url}>
              <img
                src={`http://localhost:8080/uploads/${photo.url}`}
                alt="category"
              />
            </div>
          ))}
      </Carousel>
    </>
    // <Carousel className="carousel-fs-fs">
    //   <div>
    //     <img src={spa} alt="category" />
    //   </div>
    //   <div>
    //     <img src={aventure} alt="category" />
    //   </div>
    //   <div>
    //     <img src={pareja} alt="category" />
    //   </div>
    //   <div>
    //     <img src={aqua} alt="category" />
    //   </div>
    //   <div>
    //     <img src={motor} alt="category" />
    //   </div>
    //   <div>
    //     <img src={gastro} alt="category" />
    //   </div>
    // </Carousel>
  );
}
export default CarouselFS;
