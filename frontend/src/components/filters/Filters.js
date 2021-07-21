import StyledFilters from './StyledFilters';
import DatePicker from 'react-datepicker';
import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { onlyUnique } from '../../helpers';

function Filters() {
  const [city,setCity] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(startDate);

  async function getCities() {
    try {
      
      const { data } = await axios.get('http://localhost:8080/experiences');
      const allCities = data.data.map((city) => city.ciudad);
      const cities = allCities.filter(onlyUnique);
      setCity(cities.sort());

    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {

    getCities();

  },[])


  return (
    <StyledFilters>
      <ul className="cityFilter">
        {city && city.map((city) => {
          return <li key={city}>{city}</li>
        })}
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
