import Button from '../button/Button';
import BlackTransparentBox from '../BlackTransparentBox/BlackTransparentBox';
import Input from '../input/Input';
import StyledLandingSearch from './StyledLandingSearch';
import SearchCity from './SearchCity';

function Search() {
  return (
    <StyledLandingSearch className="posRel searchHome">
      <BlackTransparentBox>
        <Input placeholder="Introduce una experiencia" />

        <Input placeholder="Introduce una ciudad" component={SearchCity} />

        <Button blue>BUSCAR</Button>
      </BlackTransparentBox>
    </StyledLandingSearch>
  );
}
export default Search;
