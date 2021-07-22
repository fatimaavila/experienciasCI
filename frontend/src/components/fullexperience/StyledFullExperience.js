import styled from 'styled-components';

const StyledFullExperience = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 3rem;

  .container-header-fs {
    display: flex;

    justify-content: center;
  }

  .carousel-photoexp {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
  .carousel-fs-fs {
    width: 60%;
  }
  .data-experience {
    width: 80%;
  }
  .info-experience-basic {
    padding: 1rem;
    font-size: 2rem;
  }
  .info-experience-basic {
    padding: 1rem;
    display: inline-block;
    font-size: 2rem;
  }
  .fs-interaction-client {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
    color: #3aabfe;
    font-weigth: bold;
  }
  .fs-interaction-client > p {
    font-size: 3rem;
  }
  .button-buy {
    width: 50%;
    height: 4rem;
    font-size: 2rem;
  }
  h1 {
    font-size: 3rem;
  }
  .include-experience {
    margin-top: 3rem;
    font-size: 2rem;
  }
  .info-experience-extended {
    font-size: 3rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export default StyledFullExperience;
