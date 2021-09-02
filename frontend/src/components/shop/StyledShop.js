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

  .emptyCart {
    width: 65%;
    display: flex;
    justify-content: center;
    align-items: center;

    & h3 {
      font-wieght: 600;
      font-size: 2.5rem;
    }
  }

  .bookingItemInfo {
    display: flex;
    gap: 2rem;
    margin-bottom: 6rem;
  }

  .bookingItemInfo::after {
    content: '';
    position: absolute;
    bottom: -3rem;
    right: 50%;
    transform: translate(50%);
    border: 1px solid var(--color-cyan);
    width: 50%;
    height: 2px;
  }

  .bookingItemInfo:last-child::after {
    display: none;
  }

  .imgShop {
    width: 30%;
    overflow: hidden;
  }

  .bookingExperienceInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 65%;
  }

  .bookingExperienceInfo label {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .priceShop {
    align-self: flex-end;
    font-weight: 600;
    font-size: 2rem;
  }

  .searchShop {
    display: flex;
    flex-direction: column;
    width: 25%;
    padding: 3rem 0rem;
  }

  .sendType {
    margin-top: 2rem;
  }

  .checkboxForm {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .buttonsShop {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding-top: 2rem;
  }

  .showMoreBtn {
    color: var(--color-cyan);
    text-decoration: underline;
    cursor: pointer;
    margin-left: 0.5rem;
  }
  .dateBooking {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
`;

export default StyledShop;
