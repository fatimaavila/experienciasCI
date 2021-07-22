import { Rating } from '@material-ui/lab';
import StyledComments from './StyledComments';
import CommentUser from './CommentUser';

function Comments() {
  const value = 0;
  return (
    <StyledComments>
      <div>
        <h2>Valoración y opiniones</h2>
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
      <CommentUser />
    </StyledComments>
  );
}
export default Comments;
