import styled from 'styled-components';

const StyledShop = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;

  .containerItemShop {
    display: flex;
    flex-direction: column;
  }
  .searchShop {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-right: 200px;
  }
  ////////// ITEMSHOP //////////
  .image-description {
    display: flex;
    flex-direction: row;
    width: 80%;
    border: #3cabfb 5px solid;
    margin-left: 100px;
    margin-bottom: 100px;
  }
  .searchShop {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 1000px;
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
    margin-left: 500px;
    padding: 2rem;
    font-size: 2rem;
  }
  .shop-global > img {
    width: 400px;
    height: 400px;
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
    margin-top: 50px;
  }
  .description > p {
    font-size: 3rem;
    margin-top: 20px;
    margin-left: 300px;
  }
  .description > select {
    max-width: 30%;
    margin-left: 300px;
  }
  .description > h1 {
    font-size: 2rem;
    margin-left: 300px;
    margin-top: 100px;
  }
  .description > h2 {
    font-size: 1rem;
  }

  /////////////////////////////////////////
  .searchShop {
  }
  .send-type {
    display: flex;
    flex-direction: column;

    height: 400px;
    margin-bottom: 100px;
    border: #3cabfb 5px solid;
  }
  .send-type > li {
    margin-top: 20px;
  }

  .button-buy {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
  }
`;

export default StyledShop;
