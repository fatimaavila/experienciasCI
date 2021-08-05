import { Rating } from '@material-ui/lab';
import defaultAvatar from '../../assets/userdefaul.png';


function CommentUser({ comment }) {
  const value = 0;
  console.log('comm', comment);

  return (
    <>
      {comment && (
        <div className="userAppreciation_Comment">
          <div className="userComment">
            <div className='userInfo'>
              <div className='avatarUser'>
                <img src={defaultAvatar} alt='avatar_User'/>
              </div>
              <span className='userName'>Nombre de Usuario</span>
            </div>
            <blockquote>"{comment}"</blockquote>
            <span className='dateComment'>XX de Mes de XXXX</span>
          </div>
          <div className='userAppreciation'>
            <span className='appreciationNumber'>XX.XX</span>
            <Rating
              name="hover-feedback"
              value={value}
              precision={1}
              //   onChange={(event, newValue) => {
              //     setValue(newValue);
              //   }}
              //   onChangeActive={(event, newHover) => {
              //     setHover(newHover);
              //   }}
            />
            {/* {value !== null && (
              <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
            )} */}
          </div>
        </div>
      )}
    </>
  );
}
export default CommentUser;
