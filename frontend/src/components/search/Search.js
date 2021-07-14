import { Input } from '../../components/input/Input';
import { BlueButton } from '../button/Button';
import styled from 'styled-components';
import fondoSearch from '../../assets/Globos.jpg';

const Div = styled.div`
  width: 70%;
  height: 250px;
  padding: 0 150px;
  margin: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-image: url(${fondoSearch});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  border-radius: 10px;
`;

function Search() {
  return (
    <Div>
      <Input placeholder="Introduce una experiencia" />
      <Input placeholder="Introduce una ciudad" />
      <BlueButton>BUSCAR</BlueButton>
    </Div>
  );
}
export default Search;
