import Search from '../../components/search/Search';
import styled from 'styled-components';
import GridCategory from '../../components/gridcategories/GridCategory';
import Carousel from '../../components/carousel/Carousel';
import fondoSearch from '../../assets/Globos.jpg';
import fondoSearch2 from '../../assets/Palmeras.jpg';
import { v4 as uuidv4 } from 'uuid';
const Landing = styled.div`
  display: grid;
  grid-template-columns: 1px, 1fr, 1em;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-content: center;
  text-align: center;
  aling-items: center;
`;

const Container = styled.div`
  grid-area: 2 / 3;

  text-align: center;
  aling-items: center;
`;

function Home() {
  const images = [
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
  ];
  return (
    <Landing>
      <Container>
        <Search></Search>
        <Carousel images={images} key={images.id} title={images.title}>
          Mierda
        </Carousel>
        <GridCategory></GridCategory>
      </Container>
    </Landing>
  );
}
export default Home;
