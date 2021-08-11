import { Rating } from '@material-ui/lab';
import defaultAvatar from '../../assets/userdefaul.png';


function CommentUser({ appreciationComment }) {

  return (
    < >
      <div className="userAppreciation_Comment">
        <div className="userComment">
          <div className='userInfo'>
            <img src={appreciationComment?.avatar ? appreciationComment?.avatar : defaultAvatar} alt='avatar_User'/>
            <span className='userName'>{appreciationComment.username}</span>
          </div>
          <blockquote>"{appreciationComment.comentario}"</blockquote>
        </div>
        <div className='userAppreciation'>
          <span className='appreciationNumber'>{appreciationComment.valoracion}</span>
          <Rating
            name="rating-experience"
            value={Number(appreciationComment.valoracion)}
            precision={0.5}
            readOnly
          />
        </div>
      </div>
    </>
  );
}
export default CommentUser;
