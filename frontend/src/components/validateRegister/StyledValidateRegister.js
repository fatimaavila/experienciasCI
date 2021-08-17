import styled from 'styled-components';

const StyledValidateRegister = styled.div`
  width: 1200px;
  margin: 6rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > figure {
    width: 20%;

    img {
      width: 100%;
      display: block;
    }
  }

  & .emailVerify {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
    margin-bottom: 1rem;

    p {
      font-size: 1.5rem;
    }

    & .outstanding {
      font-weight: 700;
      font-size: 2rem;
      color: var(--color-cyan);
    }
  }
`;

export default StyledValidateRegister;
