import StyledButton from './StyledButton';

function Button({ children, blue, barra, onClickButton }) {
  return (
    <StyledButton blue={blue} barra={barra} onClick={onClickButton}>
      {children}
    </StyledButton>
  );
}

export default Button;
