import StyledLoggedUserNav from './StyledLoggedUserNav';
import userAvatar from '../../assets/userdefaul.png';
import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
function LoggedUserNav() {
  const { userInfo, logout } = useContext(UserContext);
  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <StyledLoggedUserNav>
      <div className="loggedUserNav posRel">
        <span>Bienvenido, {userInfo.username}</span>
        <div className="avatarUser">
          <img
            onClick={() => setShowNavMenu(!showNavMenu)}
            src={userAvatar}
            alt="avatarUser"
          />
        </div>
      {showNavMenu && (
        <div className="dropNav">
          <ul>
            <li>MI PERFIL</li>
            <li>ADMINISTRACIÓN</li>
            <li onClick={() => logout()}>CERRAR SESIÓN</li>
          </ul>
        </div>
      )}
      </div>
    </StyledLoggedUserNav>
  );
}

export default LoggedUserNav;
