import styled from 'styled-components';

const StyledLandingCategory = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 100px 0px;

  .categoriesExperiences {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .landingCategoryBlock {
    width: 25%;
    overflow: hidden;
  }

  .landingCategoryBlock img {
    display: block;
  }

  & a {
    color: var(--color-white);
  }

  & span {
    font-size: 2.5rem;
    text-shadow: -2px 3px 3px rgba(150, 150, 150, 0.72);
    transition: transform 0.3s cubic-bezier(0.87, 0, 0.13, 1) ;
  }

  .landingCategoryBlock:hover span {
    transform: scale(1.2);
  }
`;

export default StyledLandingCategory;
