import { Link, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../assets/LOGOBUENO.png';
import StyledHeader from './StyledHeader';
import RegisterUser from '../RegisterUser/RegisterUser';
import LoginUser from '../LoginUser/LoginUser';
import LoggedUserNav from '../loggedUserNav/LoggedUserNav';
import categories from '../LandingCategories/categories';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

function MainHeader() {
  let history = useHistory();

  const { userInfo, token, cartExperience } = useContext(UserContext);
  const bubble = cartExperience?.length;
  function redirectshop() {
    history.push({ pathname: '/shop' });
  }

  // const categoryParam = useLocation();

  // console.log(new URLSearchParams(categoryParam.pathname));

  return (
    <>
      <StyledHeader>
        <div className="headerBox">
          <div className="logoHeader">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="logIn_shopCart">
            <div className='posRel'>
              <FaShoppingCart
                className="cartIcon"
                color='white'
                size="2.4rem"
                onClick={() => redirectshop()}
              />
              {bubble > 0 && <span className="bubbleCart">{bubble}</span>}
            </div>
            {userInfo && <LoggedUserNav />}
            {!token && (
              <div className="buttonSession">
                <LoginUser />
                <RegisterUser />
              </div>
            )}
          </div>
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
