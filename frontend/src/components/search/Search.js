import { BlueButton } from '../button/Button';
import styled from 'styled-components';
import fondoSearch from '../../assets/Globos.jpg';

/* const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`; */
const Comtainer = styled.div`
  height: 250px;

  background-image: url(${fondoSearch});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  border-radius: 10px;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  border: 1px solid #3aabfe;
  font-size: 10px;
  padding: 08px 25px;
  border-radius: 10px;
  text-aling: center;
`;

function Search() {
  return (
    <div>
      <Comtainer>
        <Input placeholder="Introduce una experiencia" />
        <Input placeholder="Introduce una ciudad" />
        <BlueButton>BUSCAR</BlueButton>
      </Comtainer>
    </div>
  );
}
export default Search;
