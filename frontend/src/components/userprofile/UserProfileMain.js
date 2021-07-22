import StyledUserProfile from './StyledUserProfile';
import defaulAvatar from '../../assets/existing-user-default-avatar.png';
import Button from '../button/Button';
import UserProfile from './UserProfile';

function UserProfileMain() {
  return (
    <StyledUserProfile>
      <div className="userProfileHead">
        <h1 className="userProfileTitle">Nombre de usuario</h1>
        <img src={defaulAvatar} alt="user-avatar" />
      </div>
      <div className="userProfileNav">
        <ul>
          <li>MIS DATOS</li>
          <li>MIS RESERVAS</li>
          <li>MIS VALORACIONES</li>
        </ul>
      </div>
      <div>
        <UserProfile />
      </div>
      <div className="userProfileDele">
        <label>
          <input type="checkbox" />
          <span>Acepto eliminar mis datos</span>
        </label>
        <Button blue>ELIMINAR MI CUENTA</Button>
      </div>
    </StyledUserProfile>
  );
}
export default UserProfileMain;
