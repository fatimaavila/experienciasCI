import allExp from '../../assets/allExp.jpg';
import gastro from '../../assets/gastroCategory.jpg';
import aqua from '../../assets/aquaCategory.jpeg';
import spa from '../../assets/spaCategory.jpg';
import couple from '../../assets/parejaCategory.jpg';
import motor from '../../assets/motorCategory.jpg';
import adventure from '../../assets/routesCategory.jpeg';
import fly from '../../assets/globoCategory.jpg';
import StyledLandingCategory from './StyledLandingCategories';
import BlackTransparentBox from '../BlackTransparentBox/BlackTransparentBox';
import { useEffect } from 'react';
import axios from 'axios';

function LandingCategories() {

  // useEffect(() => {

  //   async function getCategoryExperience() {
  //     const data = await axios.get('http://localhost:6000/experiences');
  //     console.log(data);
  //   }

  //   getCategoryExperience();

  // })

  return (
    <StyledLandingCategory>
      <div className="landingCategoryBlock posRel">
        <a href="/">
          <img width="100%" src={allExp} alt="category" />
          <BlackTransparentBox>
            <p>TODAS</p>
          </BlackTransparentBox>
        </a>
      </div>
      <div className="landingCategoryBlock posRel">
        <a href="/gastronomia">
          <img width="100%" src={gastro} alt="category" />
          <BlackTransparentBox>
            <p>GASTRO</p>
          </BlackTransparentBox>
        </a>
      </div>
      <div className="landingCategoryBlock posRel">
        <a href="/acuaticas">
          <img width="100%" src={aqua} alt="category" />
          <BlackTransparentBox>
            <p>AGUA</p>
          </BlackTransparentBox>
        </a>
      </div>
      <div className="landingCategoryBlock posRel">
        <a href="/relax">
          <img width="100%" src={spa} alt="category" />
          <BlackTransparentBox>
            <p>RELAX</p>
          </BlackTransparentBox>
        </a>
      </div>
      <div className="landingCategoryBlock posRel">
        <a href="/pareja">
          <img width="100%" src={couple} alt="category" />
          <BlackTransparentBox>
            <p>PAREJA</p>
          </BlackTransparentBox>
        </a>
      </div>
      <div className="landingCategoryBlock posRel">
        <a href="/motor">
          <img width="100%" src={motor} alt="category" />
          <BlackTransparentBox>
            <p>MOTOR</p>
          </BlackTransparentBox>
        </a>
      </div>
      <div className="landingCategoryBlock posRel">
        <a href="/aventuras">
          <img width="100%" src={adventure} alt="category" />
          <BlackTransparentBox>
            <p>RUTAS</p>
          </BlackTransparentBox>
        </a>
      </div>
      <div className="landingCategoryBlock posRel">
        <a href="/vuelo">
          <img width="100%" src={fly} alt="category" />
          <BlackTransparentBox>
            <p>VUELO</p>
          </BlackTransparentBox>
        </a>
      </div>
    </StyledLandingCategory>
  );
}
export default LandingCategories;
