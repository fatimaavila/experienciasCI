import styled from 'styled-components';

const StyledUserProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 6rem auto;

  .userProfileHead {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin-bottom: 3rem;

    & > img {
      border-radius: 50%;
      border: 3px solid var(--color-cyan);
      width: 180px;
      height: 180px;
    }
  }

  .userProfileNav {
    width: 100%;
    margin-bottom: 3rem;

    & > ul {
      display: flex;
      justify-content: space-evenly;
      border-bottom: 1px solid var(--color-cyan);

      & > li {
        padding: 1rem 0rem;
        letter-spacing: 5px;
        cursor: pointer;
      }
    }
  }

  .userProfileDele {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    gap: 2rem;

    & > label {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  .userProfile_Bookings {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .userProfile_Bookings > form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > div {
      width: 45%;
      margin-bottom: 1rem;

      & > .editInfoLabel {
        display: flex;
        flex-direction: column;

        & > input[type='text'],
        & > input[type='email'],
        & > input[type='password'],
        & > input[type='file'] {
          border: 0px;
          border-radius: 0px;
          border-bottom: 2px solid var(--color-cyan);
        }

        & > span {
          margin-bottom: 0.3rem;
        }
      }
    }

    & .textareaBox {
      width: 100%;

      & textarea {
        border-radius: 0px;
        border: 2px solid var(--color-cyan);
      }
    }

    & > div:last-child {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;

      & > label {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 1rem;
      }
    }
  }

  .userProfile_Bookings > .userBookking {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    box-shadow: var(--box-shadow-light);

    & .bookingHead {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      font-size: 2rem;

      & h3 {
        font-size: 2rem;
        font-weight: 500;
      }

      & .totalPriceBooking {
        font-weight: 500;
      }
    }

    & .bookingBody {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 30px;
      width: 100%;

      & span {
        letter-spacing: 0.75px;
        font-size: 1.5rem;
      }
    }

    & .appreciations {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;

      & .bookingRate {
        display: flex;
        align-items: center;
        gap: 15px;
      }

      & .bookingComments {
        display: flex;
        align-items: center;
        gap: 5rem;
      }
    }
  }

  .errorForm {
    background-color: var(--color-red);
    color: var(--color-white);
    padding: 0.5rem 1rem;
    align-self: center;
    border-radius: 0.3rem;
    margin-bottom: 2rem;
  }

  .changePass {
    align-self: center;
    display: flex;
    align-items:center;
    gap: 1.5rem;

    span {
      font-size: 1.5rem;
    }
  }
`;
export default StyledUserProfile;
