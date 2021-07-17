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
  }
  a > p:hover {
    transform: translate(3%, 5%) scale(1.5);
  }
`;

export default StyledLandingCategory;
