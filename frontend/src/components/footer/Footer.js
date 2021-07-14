import logo from '../../assets/LOGOBUENO.png';
import { FaFacebook } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';

function Footer() {
    return (
        <div className="footer">
            <ul className="fotul">
                <li>
                    <FaFacebook size="30px" />
                </li>
                <li>
                    <SiInstagram size="30px" />
                </li>
                <li>
                    <SiTwitter size="30px" />
                </li>
                <li>
                    <SiLinkedin size="30px" />
                </li>
            </ul>
            <img className="logo-foot" src={logo} alt="Logo van exp" />
        </div>
    );
}

export default Footer;
