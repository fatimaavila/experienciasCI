import { Rating } from '@material-ui/lab';
import StyledComments from './StyledComments';
import CommentUser from './CommentUser';

function Comments({ comment }) {

  return (
    <StyledComments>
      <h3>Valoración y opiniones</h3>
      <section>
        {comment.comentarios &&
          comment.comentarios.map((data) => (
            <CommentUser key={data.comentario} comment={data.comentario} />
            ))}
      </section>
    </StyledComments>
  );
}
export default Comments;
