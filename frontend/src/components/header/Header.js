import './header.css';
import { Link } from 'react-router-dom';
/* import Navitems from '../../components/header/Navitems'; */
import logo from '../../assets/LOGOBUENO.png';
import routes from '../../routes/routes';

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <div>
                <button>SING IN</button>
                <button>SING UP</button>
            </div>
            <nav>
                <ul>
                    {routes.map(({ path, label }) => (
                        <li key={path}>
                            <Link to={path}>{label.toUpperCase()}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
export default Header;
