import Search from '../../components/search/Search';
import styled from 'styled-components';
import GridCategory from '../../components/gridcategories/GridCategory';

import Carrusel from '../../components/carousel/Carrusel';
const Landing = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: auto, 1800px, auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-content: center;
  text-align: center;
  aling-items: center;
`;

const Container = styled.div`
  grid-area: 1 / 2;

  text-align: center;
  aling-items: center;
`;

function Home() {
  /* const images = [
    {
      id: uuidv4(),
      title: 'globos',
      image: fondoSearch,
    },
    {
      id: uuidv4(),
      title: 'palemeras',
      image: fondoSearch2,
    },
  ]; */
  return (
    <Landing>
      <Container>
        <Search></Search>
        <Carrusel />
        <GridCategory></GridCategory>
      </Container>
    </Landing>
  );
}
export default Home;
