import styled from 'styled-components';

const StyledFilters = styled.div`
  border: 3px solid #3AABFE;
  border-radius: 6px;
  width: 20%;

  & > div, & > ul {
    border-bottom: 2px solid #3AABFE;
  }

  & > div:last-child {
    border-bottom: 0;
  }

  .cityFilter li {
    padding: 1rem 1rem 0rem 1rem;
    color: #3AABFE;
  }

  .cityFilter li:last-child {
    padding-bottom: 1rem;
  }

  .priceFilter {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .priceFilter > label {
    padding: 1rem 1rem 0rem 1rem;
    display: flex;
    align-items: center;
    gap: 15px;
    color: #3AABFE;
  }

  .priceFilter > label:last-child {
    padding-bottom: 1rem;
  }

  .dateFilter {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;
  
export default StyledFilters;
