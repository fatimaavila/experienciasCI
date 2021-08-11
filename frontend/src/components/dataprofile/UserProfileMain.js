import StyledUserProfile from './StyledUserProfile';
import defaultAvatar from '../../assets/userdefaul.png';
import Button from '../button/Button';
import UserProfile from './UserProfile';
import UserBookings from './UserBookings';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

function UserProfileMain() {
  const infoActive = {
    borderBottom: '5px solid #3aabfe',
  };

  const [showInfo, setShowInfo] = useState({ profile: true, bookings: false });
  const { userInfo } = useContext(UserContext);
  const userAvatar = userInfo?.avatar ? userInfo?.avatar : defaultAvatar;
  const completeName = `${userInfo?.nombre} ${userInfo?.apellidos}`;

  return (
    <StyledUserProfile>
      <div className="userProfileHead">
        <h3>{completeName}</h3>
        <img src={userAvatar} alt="user-avatar" />
      </div>
      <div className="userProfileNav">
        <ul>
          <li
            style={showInfo.profile ? infoActive : null}
            onClick={() => setShowInfo({ profile: true, bookings: false })}
          >
            MIS DATOS
          </li>
          <li
            style={showInfo.bookings ? infoActive : null}
            onClick={() => setShowInfo({ profile: false, bookings: true })}
          >
            MIS RESERVAS
          </li>
        </ul>
      </div>
      {showInfo.profile && (
        <div className="userProfileDele">
          <label>
            <input type="checkbox" />
            <span>Acepto eliminar mis datos</span>
          </label>
          <Button red>ELIMINAR MI CUENTA</Button>
        </div>
      )}
      <div className="userProfile_Bookings">
        {showInfo.bookings && <UserBookings />}
        {showInfo.profile && <UserProfile />}
      </div>
    </StyledUserProfile>
  );
}
export default UserProfileMain;
