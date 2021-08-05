import styled from 'styled-components';

const StyledComments = styled.div`
  display: flex;
  flex-direction: column;

  & > h3 {
    margin-bottom: 1.5rem;
  }

  .userAppreciation_Comment {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    box-shadow: var(--box-shadow-light);
    padding: 1.5rem;

    & .userComment {
      display: flex;
      flex-direction: column;
      width: 75%;

      & .userInfo {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 1.2rem;

        & .userName {
          font-weight: 500;
          font-size: 1.3rem;
        }

        & .avatarUser {
          width: 7%;

          img {
            width: 100%;
            display: block;
            padding: 0.15rem;
            border-radius: 50%;
            border: 2px solid var(--color-cyan);
            
          }
        }
      }

      & .dateComment {
        align-self: flex-end;
      }
    }

    & .userAppreciation {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 20%;

      & .appreciationNumber {
        font-weight: 700;
        font-size: 2.5rem;
      }
    }
  }
`;
export default StyledComments;
