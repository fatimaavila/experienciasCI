import './header.css';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../assets/LOGOBUENO.png';
import routes from '../../routes/routes';
import { BlueButton, WhiteButton } from '../../components/button/Button';
function Header() {
  const navRoutes = routes.map(({ path, label }) => (
    <li key={uuidv4()}>
      <Link to={path}>{label.toUpperCase()}</Link>
    </li>
  ));

  navRoutes.pop();

  return (
    <header>
      <img src={logo} alt="Logo" />
      <div>
        <BlueButton>SING IN</BlueButton>
        <WhiteButton>SING UP</WhiteButton>
      </div>
      <nav>
        <ul>{navRoutes}</ul>
      </nav>
    </header>
  );
}
export default Header;
