import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: var(--color-cyan);
  width: 100%;

  .headerBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    width: 100%;
  }

  .logoHeader {
    width: 15%;
  }

  .logoHeader > a {
    overflow: hidden;
    display: block;
    width: 100%;
  }

  .logoHeader > a > img {
    width: 100%;
    display: block;
  }

  nav {
    background-color: var(--color-white);
    width: 100%;
    border-bottom: 2px solid var(--color-cyan);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mainMenu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
  }

  .mainMenu a {
    display: block;
    color: var(--color-cyan);
    padding: 1.5rem 1.5rem;
    position: relative;
    transition: all 0.5s ease;
  }

  .mainMenu a:hover::after {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 98%;
    background-color: var(--color-cyan);
  }
`;

export default StyledHeader;