import Experience from '../experience/Experience';
import Filters from '../filters/Filters';
import OrderExperiences from '../OrderExperiences/OrderExperiences';
import StyledAllExperience from './StyledAllExperience';

function AllExperiences({ data, onChangeSelect, order, onClickCity, cityActive, onChangePrice, cityFilterSelected, priceFilter, dateStartFilter, dateEndFilter, changeDatePickerStart, changeDatePickerEnd }) {

  return (
    <>
      {data && (
        <StyledAllExperience>
            <Filters onClickCity={onClickCity} cityActive={cityActive} cityFilterSelected={cityFilterSelected} 
                      priceFilter={priceFilter} onChangePrice={onChangePrice}
                      dateStartFilter={dateStartFilter} changeDatePickerStart={changeDatePickerStart}
                      dateEndFilter={dateEndFilter} changeDatePickerEnd={changeDatePickerEnd}         
            />
            {data && (
              <div className='results'>
                <OrderExperiences order={order} onChangeSelect={onChangeSelect}/>
                <div className="experiences">
                  {data.map(({ id, nombre, ciudad, precio }) => (
                    <Experience
                      key={id}
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
