import styled from 'styled-components';

const StyledAdminProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .adminProfileHead {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin: 2rem;
  }
  .adminProfileNav {
    width: 40%;
    margin: 2rem;
  }
  .adminProfileNav ul {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    padding: 1rem;
    border: 1px solid black;
  }
  .adminProfileTitle {
    font-size: 3rem;
  }
  .main {
    display: flex;
    flex-direction: row;
    border: #3cabfb 5px solid;
    margin: 2rem;
    align-items: center;
    width: 100%;
    height: 10rem;
  }
  .main > h1 {
    margin-left: 50px;
  }
  .buttons {
    display: flex;
    padding: 30px;
    gap: 20px;
    font-size: 40px;
    margin-left: 30px;
  }
  .popUp {
  }
`;

export default StyledAdminProfile;
