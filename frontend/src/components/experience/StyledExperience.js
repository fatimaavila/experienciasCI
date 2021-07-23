import styled from 'styled-components';
import '../../App.css'

const StyledExperience = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 4rem;

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
    margin-top: 1rem;
    font-weight: 600;
    font-size: 2rem;
  }

`;

export default StyledExperience;
