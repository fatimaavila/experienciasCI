import StyledExperience from './StyledExperience';

import { Rating } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAxios } from '../../axiosCalls';

function Experience({ id, name, city, price }) {
  const history = useHistory();

  const routeChange = () => {
    let path = `/experience/${id}`;
    history.push(path);
  };
  const [uniqueExp, setUniqueExp] = useState([]);

  useEffect(() => {
    const getUniqueExp = async () => {
      const { data } = await getAxios(
        `http://localhost:8080/experiences/${id}`
      );

      setUniqueExp(data);
    };
    getUniqueExp();
  }, [id]);
  const defaultRating = 0;
  const rating = Number(uniqueExp.rating);

  const imgBackground = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  return (
    <StyledExperience onClick={routeChange}>
      {uniqueExp?.photos && (
        <div
          className="fotoExperience"
          style={{
            backgroundImage: `url('${uniqueExp?.photos[0]?.photo}')`,
            ...imgBackground,
          }}
        ></div>
      )}
      <h3>{name}</h3>
      <span className="cityExperience">{city}</span>
      <Rating
        name="rating-experience"
        value={rating !== 0.0 ? rating : defaultRating}
        precision={0.5}
        readOnly
      />
      <span className="priceExperience">{price}&#8364;</span>
    </StyledExperience>
  );
}
export default Experience;
