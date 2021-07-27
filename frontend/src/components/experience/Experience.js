import StyledExperience from './StyledExperience';
import photoName from '../../assets/allExp.jpg';
import { Rating } from '@material-ui/lab';
import { useHistory, useParams } from 'react-router-dom';

function Experiece({ id, name, city, price }) {
  
  const history = useHistory();

  // const { idExp } = useParams();

  const routeChange = () => {
    let path = `/experience/${id}`;
    history.push(path);
  };
  
  const value = 0;

  return (
    <StyledExperience onClick={routeChange}>
      <div className="fotoExperience">
        <img src={photoName} alt="fotoExperience" />
      </div>
      <h3>{name}</h3>
      <span className='cityExperience'>{city}</span>
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

      <span className="priceExperience">{price}&#8364;</span>
    </StyledExperience>
  );
}
export default Experiece;
