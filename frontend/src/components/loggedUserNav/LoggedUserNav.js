import StyledLoggedUserNav from './StyledLoggedUserNav';
import userAvatar from '../../assets/existing-user-default-avatar.png';
import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
function LoggedUserNav() {
  const { tokenContent, userInfo, logout } = useContext(UserContext);
  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <StyledLoggedUserNav>
      <div className="loggedUserNav">
        <h2>Hola {userInfo.username}</h2>
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
            <li onClick={() => logout()}>CERRAR SESION</li>
          </ul>
        </div>
      )}
    </StyledLoggedUserNav>
  );
}

export default LoggedUserNav;
