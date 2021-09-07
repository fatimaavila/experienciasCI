import Search from '../../components/search/Search';
import styled from 'styled-components';
import LandingCategories from '../../components/LandingCategories/LandingCategories';
import Carousel from '../../components/alicecarousel/AliceCarousel';
import AboutUs from '../../components/AboutUs/AboutUs';

const Landing = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function Home() {
  return (
    <Landing>
      <Search />
      <Carousel />
      <LandingCategories />
      <AboutUs />
    </Landing>
  );
}
export default Home;
