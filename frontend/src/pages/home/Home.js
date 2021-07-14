import Search from '../../components/search/Search';
import styled from 'styled-components';
import GridCategory from '../../components/gridcategories/GridCategory';

const Landing = styled.div`
  display: flex;
  aling-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  aling-items: center;
  width: 70%;
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
