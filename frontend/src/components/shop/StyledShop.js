import styled from 'styled-components';

const StyledShop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 3rem;

  /////////////////////////////////////////

  .shop-global {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
  .shop-global > h1 {
    margin-left: 700px;
    padding: 1rem;
    font-size: 2rem;
  }
  .shop-global > img {
    width: 300px;
    height: 300px;
  }

  /////////////////////////////////////////
  .description {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }
  .description > h2 {
    padding: 1rem;
    font-size: 1.5rem;
  }
  .description > p {
    font-size: 3rem;
  }
  /////////////////////////////////////////

  .send-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    border: #3cabfb 5px solid;
  }

  .button-buy {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 4rem;
    font-size: 2rem;
    border: #3cabfb 5px solid;
    color: white;
    background-color: #3cabfb;
  }
`;

export default StyledShop;
