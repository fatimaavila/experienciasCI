import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../assets/LOGOBUENO.png';
import routes from '../../routes/routes';
import { BlueButton, WhiteButton } from '../../components/button/Button';

const Header = styled.header`
  background-color: #3aabfe;
`;
const Nav = styled.nav`
  background-color: white;
  border-bottom: 2px solid #3aabfe;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Li = styled.li`
  list-style: none;
  color: #3aabfe;
  padding: 4px;
  margin: 4px;
`;

function HeaderVan() {
  const navRoutes = routes.map(({ path, label }) => (
    <Li key={uuidv4()}>
      <Link to={path}>{label.toUpperCase()}</Link>
    </Li>
  ));

  navRoutes.pop();

  return (
    <Header>
      <img src={logo} alt="Logo" />
      <div>
        <BlueButton>SING IN</BlueButton>
        <WhiteButton>SING UP</WhiteButton>
      </div>

      <Nav>
        <Ul>{navRoutes}</Ul>
      </Nav>
    </Header>
  );
}
export default HeaderVan;
