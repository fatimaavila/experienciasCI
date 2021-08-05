import styled from 'styled-components';

const StyledFullExperience = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 6rem auto;
  padding: 3rem;

  .experienceDetails {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--color-grey-light);

    & .carouselPhotoExp {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 55%;

      & .carouselElements {
        display: flex;
        flex-direction: column;
        align-items: center;

        & ul.thumbs {
          margin: 0px;
          padding: 0px;
          display: flex;
          justify-content: center;

          & img {
            width: 70px;
            height: 45px;
          }
        }
      }
    }

    & .experienceInfo {
      width: 40%;

      & h2 {
        font-size: 3rem;
      }

      & .experiencePrice_Buy {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 50px;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--color-grey-light);

        & > section {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        & > section .priceLabel {
          font-size: 1.3rem;

        }
        & > section .priceNumber {
          font-size: 2rem;
        }
      }

      & .includes_freePlaces {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & span {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
        }

        & .participants {
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }

      & .useConditionsExp {
        padding: 0rem 1.5rem;

        & div {
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }
    }
  }

  .experienceDesc_Appreciation {
    display: flex;
    flex-direction: column;

    & > section {
      margin-bottom: 3rem
    }

    & > section > h3 {
      margin-bottom: 1.5rem;
    }
  }
`;

export default StyledFullExperience;
