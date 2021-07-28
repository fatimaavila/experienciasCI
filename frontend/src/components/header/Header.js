import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../assets/LOGOBUENO.png';
import StyledHeader from './StyledHeader';
import RegisterUser from '../RegisterUser/RegisterUser';
import LoginUser from '../LoginUser/LoginUser';
import LoggedUserNav from '../loggedUserNav/LoggedUserNav';
import categories from '../LandingCategories/categories';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

function MainHeader() {
  const { userInfo, token } = useContext(UserContext);

  return (
    <>
      <StyledHeader>
        <div className="headerBox">
          <div className="logoHeader">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          {userInfo && <LoggedUserNav />}
          {!token && (
            <div className="buttonSession">
              <LoginUser />
              <RegisterUser />
            </div>
          )}
        </div>
        <nav>
          <ul className="mainMenu">
            {categories.map(({ path, label }) => (
              <li key={uuidv4()}>
                <Link to={path}>{label.toUpperCase()}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </StyledHeader>
    </>
  );
}
export default MainHeader;
