import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import React, { Suspense } from 'react';
import Loading from '../../components/spinner/Loading';

const UserProfileMain = React.lazy(() =>
  import('../../components/dataprofile/UserProfileMain')
);
function UserMenu() {
  const { token } = useContext(UserContext);

  return (
    <div>
      {token && (
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
          <UserProfileMain />
        </Suspense>
      )}
    </div>
  );
}
export default UserMenu;
