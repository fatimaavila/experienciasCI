import StyledFilters from './StyledFilters';
import DatePicker, { registerLocale } from 'react-datepicker';
import { useContext } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from 'react-bootstrap';
import es from 'date-fns/locale/es';
import { v4 as uuidv4 } from 'uuid';
import { FilterContext } from '../../context/FilterContext';

registerLocale('es', es);

function Filters({
  onClickCity,
  cityActive,
  onChangePrice,
  priceFilter,
  cityFilterSelected,
  dateStartFilter,
  dateEndFilter,
  changeDatePickerStart,
  changeDatePickerEnd,
}) {
  const { cities } = useContext(FilterContext);

  return (
    <StyledFilters>
      <ul className="cityFilter">
        {cities &&
          cities.map((city) => {
            return (
              <li
                key={uuidv4()}
                onClick={onClickCity}
                style={city === cityFilterSelected ? cityActive : null}
              >
                {city}
              </li>
            );
          })}
      </ul>
      <div className="priceFilter">
        <Form.Label>
          <Form.Check
            type="radio"
            name="price"
            value="0-50"
            checked={priceFilter.value && priceFilter}
            onChange={onChangePrice}
          />
          <span>0&#8364; - 50&#8364;</span>
        </Form.Label>
        <Form.Label>
          <Form.Check
            type="radio"
            name="price"
            value="50-100"
            checked={priceFilter.value && priceFilter.checked}
            onChange={onChangePrice}
          />
          <span>50&#8364; - 100&#8364;</span>
        </Form.Label>
        <Form.Label>
          <Form.Check
            type="radio"
            name="price"
            value="100-150"
            checked={priceFilter.value && priceFilter}
            onChange={onChangePrice}
          />
          <span>100&#8364; - 150&#8364;</span>
        </Form.Label>
        <Form.Label>
          <Form.Check
            type="radio"
            name="price"
            value="150-200"
            checked={priceFilter.value && priceFilter}
            onChange={onChangePrice}
          />
          <span>150&#8364; - 200&#8364;</span>
        </Form.Label>
        <Form.Label>
          <Form.Check
            type="radio"
            name="price"
            value="200-"
            checked={priceFilter.value && priceFilter}
            onChange={onChangePrice}
          />
          <span>&#62; 200&#8364;</span>
        </Form.Label>
      </div>
      <div className="dateFilter">
        <label>
          <span>Fecha de Inicio</span>
          <DatePicker
            locale="es"
            dateFormat="dd/MM/yyyy"
            className="date-picker"
            selected={dateStartFilter}
            onChange={changeDatePickerStart}
          />
        </label>
        <label>
          <span>Fecha de Fin</span>
          <DatePicker
            locale="es"
            dateFormat="dd/MM/yyyy"
            className="date-picker"
            selected={dateEndFilter}
            onChange={changeDatePickerEnd}
          />
        </label>
      </div>
    </StyledFilters>
  );
}
export default Filters;
