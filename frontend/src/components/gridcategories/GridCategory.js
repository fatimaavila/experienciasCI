import styled from 'styled-components';
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  border: 1px solid black;
`;
const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  border: 1px solid black;
`;
const Div3 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  border: 1px solid black;
`;
const Div4 = styled.div`
  grid-area: 1 / 4 / 2 / 5;
  border: 1px solid black;
`;
const Div5 = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  border: 1px solid black;
`;
const Div6 = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  border: 1px solid black;
`;
const Div7 = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  border: 1px solid black;
`;
const Div8 = styled.div`
  grid-area: 2 / 4 / 3 / 5;
  border: 1px solid black;
`;

function GridCategory(params) {
  return (
    <Grid>
      <Div1>1</Div1>
      <Div2>2</Div2>
      <Div3>3</Div3>
      <Div4>4</Div4>
      <Div5>5</Div5>
      <Div6>6</Div6>
      <Div7>7</Div7>
      <Div8>8</Div8>
    </Grid>
  );
}
export default GridCategory;
