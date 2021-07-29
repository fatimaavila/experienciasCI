import Experience from '../experience/Experience';
import Filters from '../filters/Filters';
import OrderExperiences from '../OrderExperiences/OrderExperiences';
import StyledAllExperience from './StyledAllExperience';

function AllExperiences({ data, onChangeSelect, order }) {

  return (
    <>
      {data && (
        <StyledAllExperience>
            <Filters />
            {data && (
              <div className='results'>
                <OrderExperiences order={order} onChangeSelect={onChangeSelect}/>
                <div className="experiences">
                  {data.map(({ id, nombre, ciudad, precio }) => (
                    <Experience
                      key={nombre}
                      name={nombre}
                      city={ciudad}
                      price={precio}
                      id={id}
                    />
                  ))}
                </div>
              </div>
            )}
        </StyledAllExperience>
      )}
    </>
  );
}

export default AllExperiences;
