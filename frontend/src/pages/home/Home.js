import Search from '../../components/search/Search';
import styled from 'styled-components';
import GridCategory from '../../components/gridcategories/GridCategory';

import Carrusel from '../../components/carousel/Carrusel';
const Landing = styled.div`
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
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
      <Search></Search>
      <Carrusel />
      <GridCategory></GridCategory>
    </Landing>
  );
}
export default Home;
