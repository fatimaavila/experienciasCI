import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

function PrivateRoute({ children }) {
  const { token } = useContext(UserContext);
  const history = useHistory();

  if (!token) {
    history.push('/');
  }

  return children;
}

export default PrivateRoute;
