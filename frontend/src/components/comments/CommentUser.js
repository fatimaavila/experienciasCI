import { Rating } from '@material-ui/lab';

function CommentUser() {
  const value = 0;
  return (
    <div className="user-comment-container">
      <div className="user-comment-block">
        <h2>Nombre del usuario</h2>
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
        <p>Fecha del comentario:</p>
      </div>

      <div className="user-comment">
        <p>lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </div>
    </div>
  );
}
export default CommentUser;
