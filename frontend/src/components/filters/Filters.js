import StyledFilters from './StyledFilters';
import DatePicker from 'react-datepicker';
import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { onlyUnique } from '../../helpers';
import { Form } from 'react-bootstrap';

function Filters({onClickCity, cityActive, onChangePrice, priceFilter}) {
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
          return (
            < >
              {cityActive ? <li key={city} onClick={onClickCity} style={cityActive}>{city}</li> : <li key={city} onClick={onClickCity}>{city}</li>}
            </>
          )
        })}
      </ul>
      <div className="priceFilter">
        <Form.Label>
          <Form.Check type="checkbox" value='0-50' checked={priceFilter} onChange={onChangePrice}/>
          <span>0&#8364; - 50&#8364;</span>
        </Form.Label>
        <Form.Label>
          <Form.Check type="checkbox" value='50-100' checked={priceFilter} onChange={onChangePrice}/>
          <span>50&#8364; - 100&#8364;</span>
        </Form.Label>
        <Form.Label>
          <Form.Check type="checkbox" value='100-150' checked={priceFilter} onChange={onChangePrice}/>
          <span>100&#8364; - 150&#8364;</span>
        </Form.Label>
        <Form.Label>
          <Form.Check type="checkbox" value='150-200' checked={priceFilter} onChange={onChangePrice}/>
          <span>150&#8364; - 200&#8364;</span>
        </Form.Label>
        <Form.Label>
          <Form.Check type="checkbox" value='200-' checked={priceFilter} onChange={onChangePrice}/>
          <span>&#62; 200&#8364;</span>
        </Form.Label>
      </div>
      <div className="dateFilter">
        <label>
          <span>Fecha de Inicio</span>
          <DatePicker
            className="date-picker"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </label>
        <label>
          <span>Fecha de Fin</span>
          <DatePicker
            className="date-picker"
            selected={finalDate}
            onChange={(date) => setFinalDate(date)}
          />
        </label>
      </div>
    </StyledFilters>
  );
}
export default Filters;
