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
  }
  
  .avatarUser {
    width: 15%;
  }
  
  .avatarUser img {
    border-radius: 50%;
    border: 3px solid var(--color-cyan);
    width: 100%;
  }

  .userProfileNav {
    width: 100%;
    margin-bottom: 3rem;
  }

  .userProfileNav ul {
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid var(--color-cyan);
  }

  .userProfileNav li {
    padding: 1rem 0rem;
    letter-spacing: 5px;
    cursor: pointer;
  }

  .userProfileDele {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    gap: 1rem;
  }
  .userBookingContainer {
    border: 1px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .itemBookingContainer {
    border: 1px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .itemBookingHead {
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  .itemBookingBody {
    display: flex;
    padding: 1rem;
    align-items: center;
    gap: 15rem;
  }
  .itemBookingRate {
    width: 60%;
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
  }
`;
export default StyledUserProfile;
