import allExp from '../../assets/allExp.jpg';
import StyledLandingCategory from './StyledLandingCategories';
import BlackTransparentBox from '../BlackTransparentBox/BlackTransparentBox';
import allCategoriesObject from './categories';
import { v4 as uuidv4 } from 'uuid';

function LandingCategories() {

  return (
    <StyledLandingCategory>
      <h2>Explora la experiencia que desees</h2>
      <div className='categoriesExperiences'>
        <div className="landingCategoryBlock posRel">
          <a href="/experiences">
            <img width="100%" src={allExp} alt="category" />
            <BlackTransparentBox>
              <span>Todas</span>
            </BlackTransparentBox>
          </a>
        </div>
        {allCategoriesObject.map(({label, img, path}) => {
          return (
            <div key={uuidv4()} className="landingCategoryBlock posRel">
              <a href={path}>
                <img width="100%" src={img} alt='Categoria' />
                <BlackTransparentBox>
                  <span>{label}</span>
                </BlackTransparentBox>
              </a>
            </div>
          )
        })}
      </div>
    </StyledLandingCategory>
  );
}
export default LandingCategories;
