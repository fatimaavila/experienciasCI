import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;
  text-align: center;
  padding: 0.5rem 1.5rem;
  border: 0px;

  ${props => props.blue ? `& {
    color: var(--color-white);
    background-color: var(--color-cyan);
  }` : `& {
    color: var(--color-cyan);
    background-color: var(--color-white);
  }`};

  ${props => props.red && `& {
    color: var(--color-white);
    background-color: var(--color-red);
  }`};
  
  
  ${props => props.barra && `&::after {
    content: '';
    border: 1px solid var(--color-white);
    margin-left: 20px;
  }
`};

  .searchHome & {
    padding: 1rem 2.5rem;
  }
`;

export default StyledButton;

