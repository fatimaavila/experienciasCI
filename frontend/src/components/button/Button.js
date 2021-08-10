import StyledButton from './StyledButton';

function Button({ children, blue, barra, red, white, onClickButton }) {
  return (
    <StyledButton blue={blue} red={red} white={white} barra={barra} onClick={onClickButton}>
      {children}
    </StyledButton>
  );
}

export default Button;
