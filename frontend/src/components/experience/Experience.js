import StyledExperience from './StyledExperience';
import photoName from '../../assets/allExp.jpg';
import { Rating } from '@material-ui/lab';

function Experiece() {
  const value = 0;

  return (
    <StyledExperience>
      <div className="fotoExperience">
        <img src={photoName} alt="fotoExperience" />
      </div>
      <div className="expDescription">
        <h1>Piloto por un dia</h1>
        <h2>Madrid</h2>
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

        <span className="priceAllExperience">70.99€</span>
      </div>
    </StyledExperience>
  );
}
export default Experiece;
