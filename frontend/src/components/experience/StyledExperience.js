import styled from 'styled-components';

const StyledExperience = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 4rem;
  font-size: 2rem;

  & .fotoExperience {
    overflow: hidden;
    width: 100%;
  }

  & .fotoExperience img {
    display: block;
    width: 100%;
  }

  .expDescription {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0.5rem;
  }

  .priceAllExperience {
    align-self: flex-end;
  }

`;

export default StyledExperience;
