import StyledValidateRegister from './StyledValidateRegister';
import LOGOICON from '../../assets/LOGOICON.png';
import Button from '../button/Button';
function ValidateRegister({ email, name }) {
  return (
    <StyledValidateRegister>
      <img src={LOGOICON} alt="Logo" className="icon" />
      <div className="main">
        <h3>
          {name}registrado correctamente.
          <br />
          Verifique su email :{email} , para activar su cuenta.
        </h3>
      </div>
      <a href="/">
        <Button blue>Home</Button>
      </a>
    </StyledValidateRegister>
  );
}
export default ValidateRegister;
