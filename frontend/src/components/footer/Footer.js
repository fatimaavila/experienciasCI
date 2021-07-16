import logo from '../../assets/LOGOBUENO.png';
import { FaFacebook } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import StyledFooter from './StyledFooter';

function Footer() {
  return (
    <StyledFooter>
      <div className='socialMedias'>
        <ul>
          <li>
            <a href='#'>
              <FaFacebook size="40px" />
            </a>
          </li>
          <li>
            <a href='#'>
              <SiInstagram size="40px" />
            </a>
          </li>
          <li>
            <a href='#'>
              <SiTwitter size="40px" />
            </a>
          </li>
          <li>
            <a href='#'>
              <SiLinkedin size="40px" />
            </a>
          </li>
        </ul>
        <div className='logoFooter'>
          <img src={logo} alt="Logo van exp" />
        </div>
      </div>
      <div className='copyrightBlock'>
        <span>Términos</span>
        <span>Legal</span>
        <span>Otros</span>
      </div>
    </StyledFooter>
  );
}

export default Footer;
