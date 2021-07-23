import StyledUserProfile from './StyledUserProfile';
import defaulAvatar from '../../assets/existing-user-default-avatar.png';
import Button from '../button/Button';
import UserProfile from './UserProfile';
import UserBookings from './UserBookings';
import { useState } from 'react';

function UserProfileMain() {
  const [showUserProfile, setShowUserProfile] = useState(true);
  const [showUserBookings, setShowUserBookings] = useState(false);

  return (
    <StyledUserProfile>
      <div className="userProfileHead">
        <h1 className="userProfileTitle">Nombre de usuario</h1>
        <img src={defaulAvatar} alt="user-avatar" />
      </div>
      <div className="userProfileNav">
        <ul>
          <l
            onClick={() => (
              setShowUserProfile(true), setShowUserBookings(false)
            )}
          >
            MIS DATOS
          </l>
          <li
            onClick={() => (
              setShowUserProfile(false), setShowUserBookings(true)
            )}
          >
            MIS RESERVAS
          </li>
        </ul>
      </div>
      <div>
        {showUserBookings && <UserBookings />}
        {showUserProfile && <UserProfile />}
      </div>
      {showUserProfile && (
        <div className="userProfileDele">
          <label>
            <input type="checkbox" />
            <span>Acepto eliminar mis datos</span>
          </label>
          <Button blue>ELIMINAR MI CUENTA</Button>
        </div>
      )}
    </StyledUserProfile>
  );
}
export default UserProfileMain;
