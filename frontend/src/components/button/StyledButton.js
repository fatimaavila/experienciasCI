import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${props => props.blue ? 'var(--color-white)' : 'var(--color-cyan)'};
  background-color: ${props => props.blue ? 'var(--color-cyan)' : 'var(--color-white)'};
  border: ${props => props.blue ? '0' : '2px solid var(--color-white)'};
  font-size: 15px;
  font-weigth: bold;
  border-radius: 4px;
  text-aling: center;
  padding: 0.5rem 1.5rem;

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

