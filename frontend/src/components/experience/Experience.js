import StyledExperience from './StyledExperience';
import { Rating } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';

function Experience({
  experience: { id, nombre: name, precio: price, ciudad: city, photos, rating },
}) {
  const history = useHistory();

  const routeChange = () => {
    let path = `/experience/${id}`;
    history.push(path);
  };

  const imgBackground = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  return (
    <StyledExperience onClick={routeChange}>
      {photos && (
        <div
          className="fotoExperience"
          style={{
            backgroundImage: `url('${photos[0]?.photo}')`,
            ...imgBackground,
          }}
        ></div>
      )}
      <h3>{name}</h3>
      <span className="cityExperience">{city}</span>
      <Rating
        name="rating-experience"
        value={rating}
        precision={0.5}
        readOnly
      />
      <span className="priceExperience">{price}&#8364;</span>
    </StyledExperience>
  );
}
export default Experience;
