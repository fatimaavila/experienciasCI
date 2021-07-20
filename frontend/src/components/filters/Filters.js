import StyledFilters from './StyledFilters';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

function Filters() {
  const [startDate, setStartDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(startDate);
  return (
    <StyledFilters>
      <ul className="cityFilter">
        <li>VALENCIA</li>
        <li>MADRID</li>
        <li>BARCELONA</li>
        <li>A CORUÑA</li>
        <li>SANTANDER</li>
        <li>SEVILLA</li>
      </ul>
      <div className="priceFilter">
        <label>
          <input type="checkbox" />
          <span>0€ - 50&#8364;</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>50€ - 100&#8364;</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>100€ - 150&#8364;</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>150€ - 200&#8364;</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>&#62; 200&#8364;</span>
        </label>
      </div>
      <div className="dateFilter">
        <DatePicker
          className="date-picker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <DatePicker
          className="date-picker"
          selected={finalDate}
          onChange={(date) => setFinalDate(date)}
        />
      </div>
    </StyledFilters>
  );
}
export default Filters;
