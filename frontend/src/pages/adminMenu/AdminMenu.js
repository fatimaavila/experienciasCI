import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import React, { Suspense } from 'react';
import Loading from '../../components/spinner/Loading';

const AdminProfileMain = React.lazy(() =>
  import('../../components/DataAdminProfile/AdminProfileMain')
);

function AdminMenu() {
  const { token, tokenContent } = useContext(UserContext);
  const isAdmin = tokenContent?.rol === 'admin' ? true : false;

  return (
    <div>
      {token && isAdmin && (
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
          {' '}
          <AdminProfileMain />
        </Suspense>
      )}
    </div>
  );
}
export default AdminMenu;
