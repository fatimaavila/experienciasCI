import UserProfileMain from '../../components/dataprofile/UserProfileMain';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

function UserMenu() {
  const { token } = useContext(UserContext);

  return <div>{token && <UserProfileMain />}</div>;
}
export default UserMenu;
