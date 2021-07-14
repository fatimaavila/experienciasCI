import { Input } from '../../components/input/Input';
import { BlueButton } from '../button/Button';
import styled from 'styled-components';
import fondoSearch from '../../assets/Globos.jpg';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Comtainer = styled.div`
  height: 250px;
  padding: 0 150px;
  margin: 30px 0;
  background-image: url(${fondoSearch});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  border-radius: 10px;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
`;

function Search() {
  return (
    <Div>
      <Comtainer>
        <Input placeholder="Introduce una experiencia" />
        <Input placeholder="Introduce una ciudad" />
        <BlueButton>BUSCAR</BlueButton>
      </Comtainer>
    </Div>
  );
}
export default Search;
