import StyledLoggedUserNav from './StyledLoggedUserNav';
import userAvatar from '../../assets/userdefaul.png';
import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
function LoggedUserNav() {
  const { userInfo, logout, tokenContent } = useContext(UserContext);
  const [showNavMenu, setShowNavMenu] = useState(false);
  let history = useHistory();
  const isAdmin = tokenContent.rol === 'admin' ? true : false;

  function redirectUserMenu() {
    history.push({ pathname: '/usermenu' });
  }
  function redirectAdminMenu() {
    history.push({ pathname: '/adminmenu' });
  }
  return (
    <StyledLoggedUserNav>
      <div className="loggedUserNav posRel">
        <span>Bienvenido, {userInfo.username}</span>

        <div className="avatarUser">
          <img
            onClick={() => setShowNavMenu(!showNavMenu)}
            src={userInfo?.avatar ? userInfo?.avatar : userAvatar}
            alt="avatarUser"
          />
        </div>
        {showNavMenu && (
          <div className="dropNav">
            <ul>
              <li onClick={() => redirectUserMenu()}>MI PERFIL</li>
              {isAdmin && (
                <li onClick={() => redirectAdminMenu()}>ADMINISTRACIÓN</li>
              )}
              <li onClick={() => logout()}>CERRAR SESIÓN</li>
            </ul>
          </div>
        )}
      </div>
    </StyledLoggedUserNav>
  );
}

export default LoggedUserNav;
