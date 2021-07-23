import styled from "styled-components";

const StyledAliceCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white);
  margin: 100px 0px;

& .item {
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    text-align: center;
    margin: 0rem 1rem;
}

& .item img {
    display: block;
}

& .titlePopularExperience {
    margin-top: 1rem;
}

`;

export default StyledAliceCarousel;