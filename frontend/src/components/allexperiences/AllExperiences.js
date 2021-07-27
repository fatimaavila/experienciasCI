import Experiece from '../experience/Experience';
import Filters from '../filters/Filters';
import StyledAllExperience from './StyledAllExperience';
import OrderExperiences from '../OrderExperiences/OrderExperiences';

function AllExperiences({ data }) {
  return (
    <StyledAllExperience>
      <Filters />
      <div className="results">
        <OrderExperiences />
        <div className="experiences">
          {data.map(({ id, nombre, ciudad, precio }) => (
            <Experiece
              key={nombre}
              name={nombre}
              city={ciudad}
              price={precio}
              id={id}
            />
          ))}
        </div>
      </div>
    </StyledAllExperience>
  );
}

export default AllExperiences;
