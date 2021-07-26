import Experiece from '../experience/Experience';
import Filters from '../filters/Filters';
import StyledAllExperience from './StyledAllExperience';
import OrderExperiences from '../OrderExperiences/OrderExperiences';

function AllExperiences({ data }) {
  console.log('all: ', data);
  return (
    <StyledAllExperience>
      <Filters />
      <div className="results">
        <OrderExperiences />
        <div className="experiences">
          {data.map(({ nombre, ciudad, precio }) => (
            <Experiece name={nombre} city={ciudad} price={precio} />
          ))}
        </div>
      </div>
    </StyledAllExperience>
  );
}

export default AllExperiences;
