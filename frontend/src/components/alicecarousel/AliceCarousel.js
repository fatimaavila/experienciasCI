import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import allExp from '../../assets/allExp.jpg';
import gastro from '../../assets/gastroCategory.jpg';
import aqua from '../../assets/aquaCategory.jpeg';
import spa from '../../assets/spaCategory.jpg';
import pareja from '../../assets/parejaCategory.jpg';
import motor from '../../assets/motorCategory.jpg';
import aventure from '../../assets/routesCategory.jpeg';
import fly from '../../assets/globoCategory.jpg';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 50px 0px;
  border-radius: 5px;
  padding: 15px;
  box-shadow: inset 25px 0px 15px -25px #2086ca,
    inset -25px 0px 15px -25px #2086ca; ;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 5px;
  border: 3px solid #3aabfe;
  padding: 15px;
`;

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  780: { items: 3 },
  1024: { items: 4 },
};

const items = [
  <Div className="item" data-value="1">
    <img width="70%" src={aventure} alt="category" />
    <p> Ruta en Quad por Pirineos</p>
  </Div>,
  <Div className="item" data-value="2">
    <img width="70%" src={fly} alt="category" />
    <p> Se piloto por un día</p>
  </Div>,
  <Div className="item" data-value="3">
    <img width="70%" src={gastro} alt="category" />
    <p> Visita bodega y cata</p>
  </Div>,
  <Div className="item" data-value="4">
    <img width="70%" src={spa} alt="category" />
    <p> Circuito de Spa</p>
  </Div>,
  <Div className="item" data-value="5">
    <img width="70%" src={aqua} alt="category" />
    <p> Rafting en Huesca</p>
  </Div>,
  <Div className="item" data-value="5">
    <img width="70%" src={pareja} alt="category" />
    <p> Ruta para dos </p>
  </Div>,
  <Div className="item" data-value="5">
    <img width="70%" src={motor} alt="category" />
    <p> Circuto en F480</p>
  </Div>,
  <Div className="item" data-value="5">
    <img width="70%" src={allExp} alt="category" />
    <p> Paseo a caballo</p>
  </Div>,
];

function Carousel() {
  return (
    <Container>
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
    </Container>
  );
}
export default Carousel;
