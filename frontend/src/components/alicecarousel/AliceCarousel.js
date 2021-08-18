import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import StyledAliceCarousel from './StyledAliceCarousel';
import { useCallback, useEffect, useState } from 'react';
import { getAxios } from '../../axiosCalls';
import { useHistory } from 'react-router-dom';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  780: { items: 3 },
  1024: { items: 4 },
};
function random() {
  let randomNumber = Math.floor(Math.random() * 35) + 1;
  return randomNumber;
}

const betterExperiences = [
  random(),
  random(),
  random(),
  random(),
  random(),
  random(),
  random(),
  random(),
  random(),
  random(),
];
console.log(betterExperiences);

function Carousel() {
  const history = useHistory();

  const [allExperiences, setAllExperiences] = useState([]);
  console.log(allExperiences);

  useEffect(() => {
    const carouselExperiences = [];
    async function getExperience(array) {
      try {
        for (const number of array) {
          const { data } = await getAxios(
            `http://localhost:8080/experiences/${number}`
          );

          carouselExperiences.push(data);
        }
        setAllExperiences(carouselExperiences);
        console.log(carouselExperiences);
      } catch (error) {}
    }
    getExperience(betterExperiences);
  }, []);

  const items = [
    <div
      onClick={routeChange(allExperiences[0]?.id)}
      className="item"
      data-value="1"
    >
      <div className="imgCarousel">
        <img
          width="100%"
          src={allExperiences[0]?.photos[0].photo}
          alt="category"
        />
      </div>
      <span className="titlePopularExperience">
        {allExperiences[0]?.nombre}
      </span>
    </div>,
    <div
      onClick={routeChange(allExperiences[1]?.id)}
      className="item"
      data-value="2"
    >
      <div className="imgCarousel">
        <img
          width="100%"
          src={allExperiences[1]?.photos[0].photo}
          alt="category"
        />
      </div>
      <span className="titlePopularExperience">
        {allExperiences[1]?.nombre}
      </span>
    </div>,
    <div
      onClick={routeChange(allExperiences[2]?.id)}
      className="item"
      data-value="3"
    >
      <div className="imgCarousel">
        <img
          width="100%"
          src={allExperiences[2]?.photos[0].photo}
          alt="category"
        />
      </div>
      <span className="titlePopularExperience">
        {allExperiences[2]?.nombre}
      </span>
    </div>,
    <div
      onClick={routeChange(allExperiences[3]?.id)}
      className="item"
      data-value="4"
    >
      <div className="imgCarousel">
        <img
          width="100%"
          src={allExperiences[3]?.photos[0].photo}
          alt="category"
        />
      </div>
      <span className="titlePopularExperience">
        {allExperiences[3]?.nombre}
      </span>
    </div>,
    <div
      onClick={routeChange(allExperiences[4]?.id)}
      className="item"
      data-value="5"
    >
      <div className="imgCarousel">
        <img
          width="100%"
          src={allExperiences[4]?.photos[0].photo}
          alt="category"
        />
      </div>
      <span className="titlePopularExperience">
        {allExperiences[4]?.nombre}
      </span>
    </div>,
    <div
      onClick={routeChange(allExperiences[5]?.id)}
      className="item"
      data-value="6"
    >
      <div className="imgCarousel">
        <img
          width="100%"
          src={allExperiences[5]?.photos[0].photo}
          alt="category"
        />
      </div>
      <span className="titlePopularExperience">
        {allExperiences[5]?.nombre}
      </span>
    </div>,
    <div
      onClick={routeChange(allExperiences[6]?.id)}
      className="item"
      data-value="7"
    >
      <div className="imgCarousel">
        <img
          width="100%"
          src={allExperiences[6]?.photos[0].photo}
          alt="category"
        />
      </div>
      <span className="titlePopularExperience">
        {allExperiences[6]?.nombre}
      </span>
    </div>,
    <div
      onClick={routeChange(allExperiences[7]?.id)}
      className="item"
      data-value="8"
    >
      <div className="imgCarousel">
        <img
          width="100%"
          src={allExperiences[7]?.photos[0].photo}
          alt="category"
        />
      </div>
      <span className="titlePopularExperience">
        {allExperiences[7]?.nombre}
      </span>
    </div>,
    <div
      onClick={routeChange(allExperiences[8]?.id)}
      className="item"
      data-value="9"
    >
      <div className="imgCarousel">
        <img
          width="100%"
          src={allExperiences[8]?.photos[0].photo}
          alt="category"
        />
      </div>
      <span className="titlePopularExperience">
        {allExperiences[8]?.nombre}
      </span>
    </div>,
    <div
      onClick={routeChange(allExperiences[9]?.id)}
      className="item"
      data-value="10"
    >
      <div className="imgCarousel">
        <img
          width="100%"
          src={allExperiences[9]?.photos[0].photo}
          alt="category"
        />
      </div>
      <span className="titlePopularExperience">
        {allExperiences[9]?.nombre}
      </span>
    </div>,
  ];
  function routeChange(id) {
    let path = `/experience/${id}`;
    /*     history.push(path); */
  }
  return (
    <StyledAliceCarousel>
      <h2>Experiencias más destacadas</h2>
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
        paddingLeft={30}
        paddingRight={30}
        responsive={responsive}
      />
    </StyledAliceCarousel>
  );
}
export default Carousel;
