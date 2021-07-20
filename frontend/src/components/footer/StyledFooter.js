import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  .socialMedias {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3aabfe;
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
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .socialMedias p {
    font-size: 20px;
    margin-top: 15px;
  }

  .copyrightBlock {
    display: flex;
    justify-content: center;
    gap: 25px;
    background-color: #2193c5;
    width: 100%;
    color: #fff;
    padding: 1.5rem 0rem;
  }

  .logoFooter {
    width: 20%;
    overflow: hidden;
  }

`;

export default StyledFooter;
