import Experiece from '../experience/Experience';
import Filters from '../filters/Filters';
import StyledAllExperience from './StyledAllExperience';
import OrderExperiences from '../OrderExperiences/OrderExperiences';

function AllExperiences() {
  return (
    <StyledAllExperience>
      <Filters />
      <div className="results">
        <OrderExperiences />
        <div className='experiences'>
          <Experiece />
          <Experiece />
          <Experiece />
          <Experiece />
          <Experiece />
          <Experiece />
          <Experiece />
          <Experiece />
          <Experiece />
          <Experiece />
        </div>
      </div>
    </StyledAllExperience>
  );
}

export default AllExperiences;
