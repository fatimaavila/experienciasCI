import StyledButton from './StyledButton';

function Button({
  children,
  blue,
  barra,
  red,
  white,
  onClickButton,
  disabled,
}) {
  return (
    <StyledButton
      blue={blue}
      red={red}
      white={white}
      barra={barra}
      onClick={onClickButton}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
