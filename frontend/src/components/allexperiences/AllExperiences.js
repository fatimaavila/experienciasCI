import Experience from '../experience/Experience';
import Filters from '../filters/Filters';
import OrderExperiences from '../OrderExperiences/OrderExperiences';
import StyledAllExperience from './StyledAllExperience';
import { compareAsc } from 'date-fns';
import { useEffect } from 'react';
import { useState } from 'react';

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
  const [experiencesActive, setExperiencesActive] = useState([]);

  useEffect(() => {
    const optionsDate = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };
    const activeExperiences = [];
    for (const date of data) {
      const today = new Date().toLocaleDateString('es-ES', optionsDate);
      const dateActive = new Date(date.fecha_fin).toLocaleDateString(
        'es-ES',
        optionsDate
      );

      const date1 = dateActive.split('/').reverse();
      const date2 = today.split('/').reverse();
      const state = compareAsc(
        new Date(date1[0], date1[1], date1[2]),
        new Date(date2[0], date2[1], date2[2])
      );
      const stateExperience = state === 1 ? true : false;

      if (stateExperience) {
        activeExperiences.push(date);
      }
    }
    setExperiencesActive(activeExperiences);
  }, [data]);

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
            {experiencesActive && (
              <div className="experiences">
                {experiencesActive.map((experience) => (
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
