import AdminProfileMain from '../../components/DataAdminProfile/AdminProfileMain';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

function AdminMenu() {
  const { token, tokenContent } = useContext(UserContext);
  const isAdmin = tokenContent?.rol === 'admin' ? true : false;

  return <div>{token && isAdmin && <AdminProfileMain />}</div>;
}
export default AdminMenu;
