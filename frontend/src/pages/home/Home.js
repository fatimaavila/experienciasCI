import Search from '../../components/search/Search';
import styled from 'styled-components';
import GridCategory from '../../components/gridcategories/GridCategory';

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
  return (
    <Landing>
      <Container>
        <Search></Search>
        <GridCategory></GridCategory>
      </Container>
    </Landing>
  );
}
export default Home;
