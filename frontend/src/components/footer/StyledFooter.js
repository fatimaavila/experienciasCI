import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .socialMedias {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3aabfe;
    width: 100%;
    padding: 2.5rem 0rem;
  }

  .socialMedias ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .socialMedias a {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .copyrightBlock {
    display: flex;
    justify-content: center;
    gap: 25px;
    background-color: #2193c5;
    width: 100%;
    color: #fff;
    padding: 1rem 0rem;
  }
  .labelLinksFooter {
    color: white;
  }
  .titleLI {
    color: #000;
    font-size: 20px;
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }
  ul > li {
    text-align: center;
    font-size: 20px;
  }
  .github {
    width: 3rem;
    margin-left: -2rem;
  }
`;

export default StyledFooter;
