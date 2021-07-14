import styled from 'styled-components';
const Button = styled.button`
  box-sizing: border-box;
  color: white;
  font-size: 15px;
  font-weigth: bold;

  border-radius: 8px;
  font-family: 'Helvetica Neue';
  text-aling: center;
`;
export const BlueButton = styled(Button)`
  background-color: #3aabfe;
  color: white;
  border: 2px solid white;
`;
export const WhiteButton = styled(Button)`
  background-color: white;
  color: #3aabfe;
`;
