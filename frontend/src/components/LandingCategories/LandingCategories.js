import allExp from '../../assets/allExp.jpg';
import gastro from '../../assets/gastroCategory.jpg';
import aqua from '../../assets/aquaCategory.jpeg';
import spa from '../../assets/spaCategory.jpg';
import couple from '../../assets/parejaCategory.jpg';
import motor from '../../assets/motorCategory.jpg';
import adventure from '../../assets/routesCategory.jpeg';
import fly from '../../assets/globoCategory.jpg';
import StyledLandingCategory from './StyledLandingCategories';

function LandingCategories(params) {
  return (
    <StyledLandingCategory>
      <div className="landingCategoryBlock">
        <a href="/">
          <p>TODAS</p>
          <img width="100%" src={allExp} alt="category" />
        </a>
      </div>
      <div className="landingCategoryBlock">
        <a href="/gastronomia">
          <p>GASTRO</p>
          <img width="100%" src={gastro} alt="category" />
        </a>
      </div>
      <div className="landingCategoryBlock">
        <a href="/acuaticas">
          <p>AGUA</p>
          <img width="100%" src={aqua} alt="category" />
        </a>
      </div>
      <div className="landingCategoryBlock">
        <a href="/relax">
          <p>RELAX</p>
          <img width="100%" src={spa} alt="category" />
        </a>
      </div>
      <div className="landingCategoryBlock">
        <img width="100%" src={couple} alt="category" />
      </div>
      <div className="landingCategoryBlock">
        <img width="100%" src={motor} alt="category" />
      </div>
      <div className="landingCategoryBlock">
        <img width="100%" src={adventure} alt="category" />
      </div>
      <div className="landingCategoryBlock">
        <img width="100%" src={fly} alt="category" />
      </div>
    </StyledLandingCategory>
  );
}
export default LandingCategories;
