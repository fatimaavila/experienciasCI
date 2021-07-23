import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../assets/LOGOBUENO.png';
import routes from '../../routes/routes';
import StyledHeader from './StyledHeader';
import RegisterUser from '../RegisterUser/RegisterUser';
import LoginUser from '../LoginUser/LoginUser';
import LoggedUserNav from '../loggedUserNav/LoggedUserNav';

function MainHeader() {
  const navRoutes = routes.map(({ path, label }) => (
    <li key={uuidv4()}>
      <Link to={path}>{label.toUpperCase()}</Link>
    </li>
  ));

  navRoutes.pop();

  return (
    <>
      <StyledHeader>
        <div className="headerBox">
          <div className="logoHeader">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          {/*     <LoggedUserNav /> */}
          <div className="buttonSession">
            <LoginUser />
            <RegisterUser />
          </div>
        </div>
        <nav>
          <ul className="mainMenu">{navRoutes}</ul>
        </nav>
      </StyledHeader>
    </>
  );
}
export default MainHeader;
