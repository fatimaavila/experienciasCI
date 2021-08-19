import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function CarouselFS({ photos }) {
  return (
    <>
      <Carousel
        dynamicHeight={true}
        emulateTouch={true}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        className="carouselElements"
      >
        {photos.photos &&
          photos.photos.map((photo) => (
            <div key={photo.photo}>
              <img src={photo.photo} alt="category" height="400px" />
            </div>
          ))}
      </Carousel>
    </>
  );
}
export default CarouselFS;
