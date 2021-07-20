import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
const FilterContainer = styled.div`
  .filters {
    border-right: 1px solid black;
    padding: 2rem;
  }
  .ciudad {
    border: 1px solid black;
    padding: 1rem;
  }
  .precio {
    border: 1px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
  .fechas {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 1rem;
  }
`;

function StyledFilters() {
  const [startDate, setStartDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(startDate);
  return (
    <FilterContainer className="filters">
      <div className="ciudad">
        <ul>
          <li>VALENCIA</li>
          <li>MADRID</li>
          <li>BARCELONA</li>
          <li>A CORUÑA</li>
          <li>SANTANDER</li>
          <li>SEVILLA</li>
        </ul>
      </div>
      <div className="precio">
        <input type="checkbox" />
        0€ - 50€
        <input type="checkbox" />
        50€ - 10€
        <input type="checkbox" />
        100€ - 150€
        <input type="checkbox" />
        150€ - 200€
        <input type="checkbox" />
        +200€
      </div>

      <div className="fechas">
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
    </FilterContainer>
  );
}
export default StyledFilters;
