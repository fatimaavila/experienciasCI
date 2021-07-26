import Experiece from '../experience/Experience';
import Filters from '../filters/Filters';
import StyledAllExperience from './StyledAllExperience';
import OrderExperiences from '../OrderExperiences/OrderExperiences';
import { useHistory } from 'react-router-dom';

function AllExperiences({ data }) {
  const history = useHistory();

  const routeChange = () => {
    let path = `/experience/${data.id}`;
    history.push(path);
  };
  console.log('all: ', data);
  return (
    <StyledAllExperience>
      <Filters />
      <div className="results">
        <OrderExperiences />
        <div className="experiences">
          {data.map(({ id, nombre, ciudad, precio }) => (
            <Experiece
              onClick={routeChange}
              name={nombre}
              city={ciudad}
              price={precio}
              idExp={id}
            />
          ))}
        </div>
      </div>
    </StyledAllExperience>
  );
}

export default AllExperiences;
