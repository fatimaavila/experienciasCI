import styled from 'styled-components';

const StyledUserProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .userProfileHead {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin: 2rem;
  }
  .userProfileHead img {
    border-radius: 50% 50%;
    width: 200px;
    height: 200px;
  }
  .userProfileTitle {
    font-size: 3rem;
  }
  .userProfileNav {
    width: 40%;
    margin: 2rem;
  }
  .userProfileNav ul {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    padding: 1rem;
    border: 1px solid black;
  }
  .userProfileDele {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem;
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
