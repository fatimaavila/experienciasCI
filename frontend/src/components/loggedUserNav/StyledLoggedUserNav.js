import styled from 'styled-components';

const StyledLoggedUserNav = styled.div`
  color: white;
  display: flex;
  flex-direction: column;

  .loggedUserNav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    padding: 1rem 0rem;
  }

  .loggedUserNav span {
    font-weight: 700;
    font-size: 25px;
  }

  .loggedUserNav img {
    border-radius: 50%;
    border: 3px solid var(--color-white);
    width: 70px;
    height: 70px;
    cursor: pointer;
    display: block;
  }

  .dropNav {
    position: absolute;
    right: 0;
    top: 100%;
    background-color: var(--color-cyan);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: var(--box-shadow-light);
    z-index: 9999;
  }

  .dropNav li {
    padding: 1rem 3rem 1rem 1rem;
    border-bottom: 1px solid var(--color-white);
    cursor: pointer;
  }

  .dropNav li:last-child {
    border-bottom: 0px;
  }
  .cart {
    color: var(--color-white);
  }
`;

export default StyledLoggedUserNav;
