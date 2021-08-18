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
    margin: 0rem 0.5rem;
}

& .item img {
    height: 200px;
    display: block;
}

& .titlePopularExperience {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 65%;
    background-color: var(--bg-black-light);
    color: var(--color-white);
    display: block;
    padding: 0.5rem 0rem;
    z-index: 123;
}

`;

export default StyledAliceCarousel;