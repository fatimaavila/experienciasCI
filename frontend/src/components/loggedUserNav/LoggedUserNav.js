import StyledLoggedUserNav from './StyledLoggedUserNav';
import userAvatar from '../../assets/existing-user-default-avatar.png';
import { useState } from 'react';

function LoggedUserNav() {
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <StyledLoggedUserNav>
      <div className="loggedUserNav">
        <h2>Hola Usuario</h2>
        <img
          onClick={() => setShowNavMenu(!showNavMenu)}
          className="avatarLoggedUserNav"
          src={userAvatar}
          alt="avatar"
        />
      </div>
      {showNavMenu && (
        <div className="dropNav">
          <ul className="ulNavMenu">
            <li>MI PERFIL</li>
            <li>ADMINISTRACION</li>
            <li>CERRAR SESION</li>
          </ul>
        </div>
      )}
    </StyledLoggedUserNav>
  );
}

export default LoggedUserNav;
