import Button from '../button/Button';
import styled from 'styled-components';
import fondoSearch from '../../assets/Globos.jpg';
import BlackTransparentBox from '../BlackTransparentBox/BlackTransparentBox';
import Input from '../input/Input';

const StyledLandingSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${fondoSearch});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  border-radius: 5px;
  height: 400px;
  margin: 50px 0px;
`;

function Search() {
  return (
    <StyledLandingSearch className='posRel searchHome'>
      <BlackTransparentBox>
        <Input placeholder="Introduce una experiencia" />
        <Input placeholder="Introduce una ciudad" />
        <Button blue>BUSCAR</Button>
      </BlackTransparentBox>
    </StyledLandingSearch>
  );
}
export default Search;
