import styled from 'styled-components';
import logo from '../../assets/LOGOBUENO.png';
import { FaFacebook } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3aabfe;
  justify-content: center;
  align-items: center;
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const Div3 = styled.div`
  display: flex;
  gap: 40px;
  color: white;
  background-color: blue;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const UlFooter = styled.ul`
  display: flex;
  margin: 10px;
  background-color: #3aabfe;
  gap: 40px;
`;
const LiFooter = styled.li`
  color: white;
`;

function Footer() {
  return (
    <Div>
      <UlFooter>
        <LiFooter>
          <FaFacebook size="30px" />
        </LiFooter>
        <LiFooter>
          <SiInstagram size="30px" />
        </LiFooter>
        <LiFooter>
          <SiTwitter size="30px" />
        </LiFooter>
        <LiFooter>
          <SiLinkedin size="30px" />
        </LiFooter>
      </UlFooter>
      <Div2>
        <img src={logo} alt="Logo van exp" />
      </Div2>
      <Div3>
        <p>terminos</p>
        <p>Legal</p>
        <p>otros</p>
      </Div3>
    </Div>
  );
}

export default Footer;
