import { useHistory } from 'react-router-dom';
import LOGOICON from '../../assets/LOGOICONfondo.png';
import Button from '../button/Button';
import StyledVerifyUser from './StyledVerifyUser';

function VerifyUser() {
  const history = useHistory();

  return (
    <StyledVerifyUser>
      <figure>
        <img src={LOGOICON} alt="Logo" className="icon" />
      </figure>
      <h2>El usuario ha sido verificado, ya puede iniciar sesión</h2>
      <Button
        blue
        onClickButton={() => {
          history.push('/');
        }}
      >
        Volvel a la página principal
      </Button>
    </StyledVerifyUser>
  );
}

export default VerifyUser;
