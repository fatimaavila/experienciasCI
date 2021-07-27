import Experiece from '../experience/Experience';
import Filters from '../filters/Filters';
import StyledAllExperience from './StyledAllExperience';
import OrderExperiences from '../OrderExperiences/OrderExperiences';

function AllExperiences({ data }) {
  return (
    <StyledAllExperience>
      <Filters /> <h2>Plazas libres</h2>
      <p>{data.num_participantes}</p>
      <div className="results">
        <OrderExperiences />
        <div className="experiences">
          {data.map(({ id, nombre, ciudad, precio }) => (
            <Experiece
              key={nombre}
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
