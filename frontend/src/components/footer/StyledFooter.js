import styled from "styled-components";

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
    padding: 3.5rem 0rem;
  }

  .socialMedias ul {
    display: flex;
    justify-content: center;
    gap: 25px;
    align-items: center;
  }

  .socialMedias a {
    color: #FFF;
  }

  .copyrightBlock {
    display: flex;
    justify-content: center;
    gap: 25px;  
    background-color: #2193C5;
    width: 100%;
    color: #FFF;
    padding: 1rem 0rem;
  }
`;

export default StyledFooter;