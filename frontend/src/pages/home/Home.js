import Search from '../../components/search/Search';
import styled from 'styled-components';
const Landing = styled.div`
  display: flex;
  justify-content: center;
  aling-items: center;
`;

function Home() {
  return (
    <Landing>
      <Search></Search>
    </Landing>
  );
}
export default Home;
