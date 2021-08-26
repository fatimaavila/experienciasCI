import StyledValidateRegister from './StyledValidateRegister';
import LOGOICON from '../../assets/LOGOICONfondo.png';
import Button from '../button/Button';
function ValidateRegister({ email, name }) {
  return (
    <StyledValidateRegister>
      <figure>
        <img src={LOGOICON} alt="Logo" className="icon" />
      </figure>
      <div className="emailVerify">
        <p>
          El usuario <span className="outstanding">{name}</span> ha sido
          registrado correctamente.
        </p>
        <p>
          Verifique su email: <span className="outstanding">{email}</span> ,
          para activar su cuenta.
        </p>
      </div>
      <a href="/">
        <Button blue>Home</Button>
      </a>
    </StyledValidateRegister>
  );
}
export default ValidateRegister;
