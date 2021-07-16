import styled from 'styled-components';

const Button = styled.button`
  color: ${props => props.blue ? '#FFF' : '#3aabfe'};
  background-color: ${props => props.blue ? '#3aabfe' : '#FFF'};
  border: ${props => props.blue ? '0' : '2px solid white'};
  font-size: 15px;
  font-weigth: bold;
  border-radius: 4px;
  text-aling: center;
  padding: 0.5rem 1.5rem;

  .headerBox &::after {
    content: '';
    border: ${props => props.barra ? '1px solid #FFF' : '0 '};
    margin-left: ${props => props.barra && '20px'};
  }

  .searchHome & {
    padding: 1rem 2.5rem;
  }


`;

export default Button;

