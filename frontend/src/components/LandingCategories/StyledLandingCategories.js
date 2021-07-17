import styled from 'styled-components';

const StyledLandingCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 50px 0px;

  .landingCategoryBlock {
    width: 25%;
    overflow: hidden;
  }

  .landingCategoryBlock img {
    display: block;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a > p {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.75);
    font-size: 3rem;
    text-shadow: -2px 3px 3px rgba(150, 150, 150, 0.72);
    transition: transform 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 8512;
  }
  a:hover > p {
    transform: scale(1.2);
  }
`;

export default StyledLandingCategory;
