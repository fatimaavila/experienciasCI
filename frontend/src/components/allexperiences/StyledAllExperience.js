import styled from 'styled-components';

const StyledAllExperience = styled.div`
  max-width: 1200px;
  margin: 6rem auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .results {
    width: 75%;
    display: flex;
    flex-direction: column;
  }

  .experiences {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .dataNull {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 6rem 0rem;
  }
`;

export default StyledAllExperience;
