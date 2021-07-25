import styled from 'styled-components';

const StyledShop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 4rem auto;
  
  .bookingInfo {
    display: flex;
    flex-direction: column;
    padding: 3rem 0rem;
    width: 65%;
  }
  
  .bookingItemInfo {
    display:flex;
    gap: 20px;
    margin-bottom: 2rem;
  }

  .imgShop {
    width: 30%;
    overflow: hidden;
  }

  .bookingExperienceInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .priceShop {
    align-self: flex-end;
  }

  .searchShop {
    display: flex;
    flex-direction: column;
    width: 25%;
    padding: 1rem;
  }

  .buttonsShop {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;

export default StyledShop;
