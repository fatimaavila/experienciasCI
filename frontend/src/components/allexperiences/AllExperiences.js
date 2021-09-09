import Experience from '../experience/Experience';
import Filters from '../filters/Filters';
import OrderExperiences from '../OrderExperiences/OrderExperiences';
import StyledAllExperience from './StyledAllExperience';

function AllExperiences({
  data,
  onChangeSelect,
  order,
  filterNull,
  onClickCity,
  cityActive,
  onChangePrice,
  cityFilterSelected,
  priceFilter,
  dateStartFilter,
  dateEndFilter,
  changeDatePickerStart,
  changeDatePickerEnd,
}) {
  return (
    <>
      {data && (
        <StyledAllExperience>
          <Filters
            onClickCity={onClickCity}
            cityActive={cityActive}
            cityFilterSelected={cityFilterSelected}
            priceFilter={priceFilter}
            onChangePrice={onChangePrice}
            dateStartFilter={dateStartFilter}
            changeDatePickerStart={changeDatePickerStart}
            dateEndFilter={dateEndFilter}
            changeDatePickerEnd={changeDatePickerEnd}
          />
          <div className="results">
            <OrderExperiences
              order={order}
              onChangeSelect={onChangeSelect}
              filterNull={filterNull}
            />
            {data && (
              <div className="experiences">
                {data.map((experience) => (
                  <Experience key={experience.id} experience={experience} />
                ))}
              </div>
            )}
            {data.length === 0 && (
              <div className="dataNull">
                <h3>
                  {
                    'No se han obtenido resultados con los filtros seleccionados'
                  }
                </h3>
              </div>
            )}
          </div>
        </StyledAllExperience>
      )}
    </>
  );
}

export default AllExperiences;
