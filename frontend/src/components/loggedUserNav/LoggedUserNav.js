import StyledLoggedUserNav from './StyledLoggedUserNav';
import userAvatar from '../../assets/existing-user-default-avatar.png';

import { Dropdown } from 'react-bootstrap';

function LoggedUserNav() {
  return (
    <StyledLoggedUserNav>
      <div className="loggedUserNav">
        <h2>Hola Usuario</h2>
        <img className="avatarLoggedUserNav" src={userAvatar} alt="avatar" />
      </div>
      <div className="dropNav">
        <Dropdown.Item href="#/action-1">Panel Admnistrador</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Mi perfil</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Cerrar sesión</Dropdown.Item>
      </div>
    </StyledLoggedUserNav>
  );
}

export default LoggedUserNav;
