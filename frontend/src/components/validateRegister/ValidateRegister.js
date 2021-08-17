import StyledValidateRegister from './StyledValidateRegister';
import LOGOICON from '../../assets/LOGOICON.png';
import Button from '../button/Button';
function ValidateRegister({ email, name }) {
  return (
    <StyledValidateRegister>
      <figure>
        <img src={LOGOICON} alt="Logo" className="icon" />
      </figure>
      <div className="emailVerify">
        <p>El usuario <span class='outstanding'>{name}</span> ha sido registrado correctamente.</p>
        <p>Verifique su email: <span class='outstanding'>{email}</span> , para activar su cuenta.</p>
      </div>
      <a href='/'>
        <Button blue>Home</Button>
      </a>
    </StyledValidateRegister>
  );
}
export default ValidateRegister;
