import styled from 'styled-components';

const StyledLandingCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 100px 0px;

  .landingCategoryBlock {
    width: 25%;
    overflow: hidden;
  }

  .landingCategoryBlock img {
    display: block;
  }

  & a {
    color: #FFF;
  }

  & p {
    font-size: 2.5rem;
    text-shadow: -2px 3px 3px rgba(150, 150, 150, 0.72);
    transition: transform 0.3s cubic-bezier(0.87, 0, 0.13, 1) ;
  }

  .landingCategoryBlock:hover p {
    transform: scale(1.2);
  }
`;

export default StyledLandingCategory;
