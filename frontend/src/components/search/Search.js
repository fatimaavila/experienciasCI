import { BlueButton } from '../button/Button';
import styled from 'styled-components';
import fondoSearch from '../../assets/Globos.jpg';

/* const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`; */
const Comtainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Section = styled.section`
  position: absolute;
  display: flex;
  gap: 50px;
`;
const Input = styled.input`
  border: 1px solid #3aabfe;
  font-size: 10px;
  padding: 08px 25px;
  border-radius: 4px;
  text-aling: center;
`;

function Search() {
  return (
    <Comtainer>
      <img width="650px" height="250px" src={fondoSearch} alt="Search" />
      <Section>
        <Input placeholder="Introduce una experiencia" />
        <Input placeholder="Introduce una ciudad" />
        <BlueButton>BUSCAR</BlueButton>
      </Section>
    </Comtainer>
  );
}
export default Search;
