import styled from 'styled-components';

const StyledLandingCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 50px 0px;

  .landingCategoryBlock {
    width: 25%;
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
    left: auto;
    right: auto;
    color: #fff;
    font-size: 3rem;
    text-shadow: -2px 3px 3px rgba(150, 150, 150, 0.72);
  }
  a > p:hover {
    transform: translate(3%, 5%) scale(1.5);
  }
`;

export default StyledLandingCategory;
