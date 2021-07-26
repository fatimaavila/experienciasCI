import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  .socialMedias {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-cyan);
    padding: 3rem 0rem;
    width: 100%;
  }

  .socialMedias ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin: 3rem 0rem;
  }

  .socialMedias a {
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .socialMedias span {
    font-size: 20px;
    margin-top: 15px;
  }

  .copyrightBlock {
    display: flex;
    justify-content: center;
    gap: 25px;
    background-color: var(--color-blue-dark);
    width: 100%;
    color: var(--color-white);
    padding: 1.5rem 0rem;
  }

  .logoFooter {
    width: 20%;
    overflow: hidden;
  }

`;

export default StyledFooter;
