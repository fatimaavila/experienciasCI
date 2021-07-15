import styled from 'styled-components';
import allExp from '../../assets/allExp.jpg';
import gastro from '../../assets/gastroCategory.jpg';
import aqua from '../../assets/aquaCategory.jpeg';
import spa from '../../assets/spaCategory.jpg';
import pareja from '../../assets/parejaCategory.jpg';
import motor from '../../assets/motorCategory.jpg';
import aventure from '../../assets/routesCategory.jpeg';
import fly from '../../assets/globoCategory.jpg';

const Grid = styled.div`
  display: flex;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  color: white;
  font-size: 1.5rem;
  font-weigth: bold;
`;
const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  width: 200px;
  height: 200px;
  background-image: url(${allExp});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  width: 200px;
  height: 200px;
  background-image: url(${fly});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
const Div3 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  width: 200px;
  height: 200px;
  background-image: url(${motor});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
const Div4 = styled.div`
  grid-area: 1 / 4 / 2 / 5;
  width: 200px;
  height: 200px;
  background-image: url(${gastro});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
const Div5 = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  width: 200px;
  height: 200px;
  background-image: url(${spa});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
const Div6 = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  width: 200px;
  height: 200px;
  background-image: url(${aqua});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
const Div7 = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  width: 200px;
  height: 200px;
  background-image: url(${pareja});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
const Div8 = styled.div`
  grid-area: 2 / 4 / 3 / 5;
  width: 200px;
  height: 200px;
  background-image: url(${aventure});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

function GridCategory(params) {
  return (
    <div>
      <Grid>
        <Div1>VER TODAS</Div1>
        <Div2>VUELO</Div2>
        <Div3>MOTOR</Div3>
        <Div4>GASTRONOMIA</Div4>
        <Div5>RELAX</Div5>
        <Div6>ACUATICAS</Div6>
        <Div7>EN PAREJA</Div7>
        <Div8>AVENTURA</Div8>
      </Grid>
    </div>
  );
}
export default GridCategory;
