import allExp from '../../assets/allExp.jpg';
import StyledLandingCategory from './StyledLandingCategories';
import BlackTransparentBox from '../BlackTransparentBox/BlackTransparentBox';
import allCategoriesObject from './categories';
import { v4 as uuidv4 } from 'uuid';

function LandingCategories() {

  return (
    <StyledLandingCategory>
      <div className="landingCategoryBlock posRel">
        <a href="/">
          <img width="100%" src={allExp} alt="category" />
          <BlackTransparentBox>
            <p>Todas</p>
          </BlackTransparentBox>
        </a>
      </div>
      {allCategoriesObject.map(({label, img, path}) => {
        return (
          <div key={uuidv4()} className="landingCategoryBlock posRel">
            <a href={path}>
              <img width="100%" src={img} alt='Categoria' />
              <BlackTransparentBox>
                <p>{label}</p>
              </BlackTransparentBox>
            </a>
          </div>
        )
      })}
    </StyledLandingCategory>
  );
}
export default LandingCategories;
