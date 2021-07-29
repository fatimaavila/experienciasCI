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
  const value = 0;

  const imgBackground = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  return (
    <StyledExperience onClick={routeChange}>
      {uniqueExp.photos && <div className="fotoExperience" style={{
          backgroundImage: `url('http://localhost:8080/uploads/${uniqueExp.photos[0].url}')`,
          ...imgBackground,
      }}></div>}
      <h3>{name}</h3>
      <span className="cityExperience">{city}</span>
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
export default Experience;
