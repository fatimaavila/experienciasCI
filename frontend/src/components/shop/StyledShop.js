import styled from 'styled-components';

const StyledShop = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;

  /////////////////////////////////////////
  .containerItemShop {
    display: flex;
    flex-direction: column;
  }
  .searchShop {
  }

  .image-description {
    display: flex;
    flex-direction: row;
    width: 50%;
    border: #3cabfb 5px solid;
    margin-left: 100px;
    margin-bottom: 100px;
  }

  .shop-global {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-bottom: 100px;
  }
  .shop-global > h1 {
    margin-left: 700px;
    padding: 1rem;
    font-size: 2rem;
  }
  .shop-global > img {
    width: 300px;
    height: 300px;
    border: #3cabfb 5px solid;
  }

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
    height: 300px;
    margin-bottom: 100px;
    border: #3cabfb 5px solid;
  }

  .button-buy {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
  }
`;

export default StyledShop;
