import StyledLoggedUserNav from './StyledLoggedUserNav';
import userAvatar from '../../assets/existing-user-default-avatar.png';
import { ImMenu } from 'react-icons/im';

function LoggedUserNav() {
  return (
    <StyledLoggedUserNav>
      <div className="loggedUserNav">
        <h2>Hola Usuario</h2>
        <img className="avatarLoggedUserNav" src={userAvatar} alt="avatar" />
        <ImMenu size="3rem" />
      </div>
    </StyledLoggedUserNav>
  );
}

export default LoggedUserNav;
