import styled from "styled-components";
import fondoSearch from '../../assets/Globos.jpg';

const StyledLandingSearch = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-image: url(${fondoSearch});
background-repeat: no-repeat;
background-size: cover;
background-position: top center;
border-radius: 5px;
height: 400px;
margin: 50px 0px;
`;

export default StyledLandingSearch;