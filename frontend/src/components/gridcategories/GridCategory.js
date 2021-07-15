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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;
const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;
const Div3 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
`;
const Div4 = styled.div`
  grid-area: 1 / 4 / 2 / 5;
`;
const Div5 = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`;
const Div6 = styled.div`
  grid-area: 2 / 2 / 3 / 3;
`;
const Div7 = styled.div`
  grid-area: 2 / 3 / 3 / 4;
`;
const Div8 = styled.div`
  grid-area: 2 / 4 / 3 / 5;
`;

function GridCategory(params) {
  return (
    <div>
      <Grid>
        <Div1>
          <img width="100%" src={allExp} alt="category" />
        </Div1>
        <Div2>
          <img width="100%" src={fly} alt="category" />
        </Div2>
        <Div3>
          <img width="100%" src={motor} alt="category" />
        </Div3>
        <Div4>
          <img width="100%" src={gastro} alt="category" />
        </Div4>
        <Div5>
          <img width="100%" src={spa} alt="category" />
        </Div5>
        <Div6>
          <img width="100%" src={aqua} alt="category" />
        </Div6>
        <Div7>
          <img width="100%" src={pareja} alt="category" />
        </Div7>
        <Div8>
          <img width="100%" src={aventure} alt="category" />
        </Div8>
      </Grid>
    </div>
  );
}
export default GridCategory;
