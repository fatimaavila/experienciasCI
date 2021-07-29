import StyledUserProfile from './StyledUserProfile';
import defaulAvatar from '../../assets/existing-user-default-avatar.png';
import Button from '../button/Button';
import UserProfile from './UserProfile';
import UserBookings from './UserBookings';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

function UserProfileMain() {
  const [showUserProfile, setShowUserProfile] = useState(true);
  const [showUserBookings, setShowUserBookings] = useState(false);
  const { userInfo } = useContext(UserContext);
  console.log(userInfo);
  const userAvatar = !userInfo.avatar ? defaulAvatar : userInfo.avatar;

  const avatar = !userInfo.avatar ? defaulAvatar : userAvatar;
  return (
    <StyledUserProfile>
      <div className="userProfileHead">
        <h1 className="userProfileTitle">Hola {userInfo.username}</h1>
        <img src={avatar} alt="user-avatar" />
      </div>
      <div className="userProfileNav">
        <ul>
          <li
            onClick={() => (
              setShowUserProfile(true), setShowUserBookings(false)
            )}
          >
            MIS DATOS
          </li>
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
        {showUserProfile && <UserProfile userInfo={userInfo} />}
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
