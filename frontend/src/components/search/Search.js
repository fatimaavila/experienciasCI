import { Input } from '../../components/input/Input';
import { BlueButton } from '../button/Button';
import styled from 'styled-components';
import fondoSearch from '../../assets/Globos.jpg';
import BlackBackground from '../blackBackground/blackBackground';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  margin-top: 50px;
  background-image: url(${fondoSearch});
  background-image: '../../assets/Globos.jpg';
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
`;

const Container = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
`;

function Search() {
  return (
    <Div>
      <BlackBackground>
        <Container>
          <Input placeholder="Introduce una experiencia" />
          <Input placeholder="Introduce una ciudad" />
          <BlueButton>BUSCAR</BlueButton>
        </Container>
      </BlackBackground>
    </Div>
  );
}
export default Search;
