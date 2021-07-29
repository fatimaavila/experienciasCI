import StyledLoggedUserNav from './StyledLoggedUserNav';
import userAvatar from '../../assets/userdefaul.png';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
function LoggedUserNav() {
  const { userInfo, logout } = useContext(UserContext);
  const [showNavMenu, setShowNavMenu] = useState(false);
  /*  const [autoLogout, setAutoLogout] = useState();
  const now = new Date().getTime();
  console.log(now, tokenContent.expired);
  if (tokenContent.expired + 120000 === now - 200) setAutoLogout(true);
  useEffect(() => {
    if (autoLogout) {
      logout();
    }
  }, [autoLogout, logout]); */
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
