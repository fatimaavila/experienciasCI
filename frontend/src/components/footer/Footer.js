import logo from '../../assets/LOGOBUENO.png';
import { AiFillGithub } from 'react-icons/ai';
import { SiLinkedin } from 'react-icons/si';
import StyledFooter from './StyledFooter';

function Footer() {
  return (
    <StyledFooter>
      <div className="socialMedias">
        <section className="github">
          <a href="https://github.com/vanexperiences/proyecto_experiencias">
            <AiFillGithub size="50px" />
          </a>
        </section>

        <ul>
          <li>
            <a href="https://www.linkedin.com/in/nachorodr%C3%ADguezsanz/">
              <SiLinkedin size="30px" />
              <p className="labelLinksFooter">Nacho Rodriguez Sanz</p>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vicente-aleixandre-sanz/">
              <SiLinkedin size="30px" />
              <p className="labelLinksFooter">Vicente Aleixandre Sanz</p>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alejandromari%C3%B1o-fullstackdeveloper/">
              <SiLinkedin size="30px" />
              <p className="labelLinksFooter">Alejandro Mariño Fandiño </p>
            </a>
          </li>
        </ul>

        <div className="logoFooter">
          <img src={logo} alt="Logo van exp" />
        </div>
      </div>
      <div className="copyrightBlock">
        <span>Términos</span>
        <span>Legal</span>
        <span>Otros</span>
      </div>
    </StyledFooter>
  );
}

export default Footer;
