import StyledButton from './StyledButton';

function Button({children, blue, barra, activateForm}) {

    return <StyledButton blue={blue} barra={barra} onClick={activateForm}>{children}</StyledButton>;

}

export default Button;