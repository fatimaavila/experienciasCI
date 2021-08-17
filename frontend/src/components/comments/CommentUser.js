import { Rating } from '@material-ui/lab';
import defaultAvatar from '../../assets/userdefaul.png';

function CommentUser({ appreciationComment }) {
  const defaultRating = 3.5;

  return (
    <>
      <div className="userAppreciation_Comment">
        <div className="userComment">
          <div className="userInfo">
            <img
              src={
                appreciationComment?.avatar
                  ? appreciationComment?.avatar
                  : defaultAvatar
              }
              alt="avatar_User"
            />
            <span className="userName">{appreciationComment.username}</span>
          </div>
          <blockquote>"{appreciationComment.comentario}"</blockquote>
        </div>
        <div className='userAppreciation'>
          <span className='appreciationNumber'>{appreciationComment.valoracion !== 0.0 ? appreciationComment.valoracion : defaultRating}</span>
          <Rating
            name="rating-experience"
            value={Number(appreciationComment.valoracion) !== 0.0 ? Number(appreciationComment.valoracion) : defaultRating}
            precision={0.5}
            readOnly
          />
        </div>
      </div>
    </>
  );
}
export default CommentUser;
