import styled from 'styled-components';
import '../../App.css'

const StyledExperience = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 4rem;

  & .fotoExperience {
    overflow: hidden;
    width: 100%;
    height: 300px;
  }

  & h3 {
    padding: 0.5rem;
  }

  & .cityExperience {
    padding: 0.5rem;
  }

  & .priceExperience {
    align-self: flex-end;
    margin-top: 1rem;
    font-weight: 600;
    font-size: 2rem;
    padding: 0.5rem;
  }

`;

export default StyledExperience;
