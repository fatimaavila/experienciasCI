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

  a > p {
    position: relative;
    top: 50%;
    left: 35%;
    color: #fff;
    font-size: 1.5rem;
  }
  a > p:hover {
    transform: translate(40%) scale(2);
  }
`;

export default StyledLandingCategory;
