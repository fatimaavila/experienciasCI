import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import allExp from '../../assets/allExp.jpg';
import gastro from '../../assets/gastroCategory.jpg';
import aqua from '../../assets/aquaCategory.jpeg';
import spa from '../../assets/spaCategory.jpg';
import pareja from '../../assets/parejaCategory.jpg';
import motor from '../../assets/motorCategory.jpg';
import adventure from '../../assets/routesCategory.jpeg';
import fly from '../../assets/globoCategory.jpg';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  780: { items: 3 },
  1024: { items: 4 },
};

const items = [
  <div className="item" data-value="1">
    <div className='imgCarousel'>
      <img width="100%" src={adventure} alt="category" />
    </div>
    <span className='titlePopularExperience'>Ruta en Quad por Pirineos</span>
  </div>,
  <div className="item" data-value="2">
    <div className='imgCarousel'>
      <img width="100%" src={fly} alt="category" />
    </div>
    <span className='titlePopularExperience'>Se piloto por un día</span>
  </div>,
  <div className="item" data-value="3">
    <div className='imgCarousel'>
      <img width="100%" src={gastro} alt="category" />
    </div>
    <span className='titlePopularExperience'>Visita bodega y cata</span>
  </div>,
  <div className="item" data-value="4">
    <div className='imgCarousel'>
      <img width="100%" src={spa} alt="category" />
    </div>
    <span className='titlePopularExperience'>Circuito de Spa</span>
  </div>,
  <div className="item" data-value="5">
    <div className='imgCarousel'>
      <img width="100%" src={aqua} alt="category" />
    </div>
    <span className='titlePopularExperience'>Rafting en Huesca</span>
  </div>,
  <div className="item" data-value="5">
    <div className='imgCarousel'>
      <img width="100%" src={pareja} alt="category" />
    </div>
    <span className='titlePopularExperience'>Ruta para dos</span>
  </div>,
  <div className="item" data-value="5">
    <div className='imgCarousel'>
      <img width="100%" src={motor} alt="category" />
    </div>
    <span className='titlePopularExperience'>Circuto en F480</span>
  </div>,
  <div className="item" data-value="5">
    <div className='imgCarousel'>
      <img width="100%" src={allExp} alt="category" />
    </div>
    <span className='titlePopularExperience'>Paseo a caballo</span>
  </div>,
];

function Carousel() {
  return (
    <StyledAliceCarousel>
      <h2>Experiencias más populares</h2>
      <AliceCarousel
        autoPlay
        autoPlayInterval={5000}
        infinite={true}
        animationType="fadeout"
        animationDuration={500}
        animationEasingFunction="ease"
        disableButtonsControls
        disableDotsControls
        mouseTracking
        items={items}
        paddingLeft={40}
        paddingRight={40}
        responsive={responsive}
      />
    </StyledAliceCarousel>
  );
}
export default Carousel;
