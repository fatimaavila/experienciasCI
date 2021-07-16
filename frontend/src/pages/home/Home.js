import Search from '../../components/search/Search';
import styled from 'styled-components';
import GridCategory from '../../components/gridcategories/GridCategory';
import Carousel from '../../components/alicecarousel/AliceCarousel';

const Landing = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #3aabfe;
  font-size: 22px;
  padding-top: 20px;
  padding-bottom: 20px;
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
      <Div>
        <h1>LOS MAS POPULARES</h1>
      </Div>
      <Carousel />
      <Div>
        <GridCategory></GridCategory>
      </Div>
    </Landing>
  );
}
export default Home;
