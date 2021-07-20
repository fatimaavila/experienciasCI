import styled from 'styled-components';
import Experiece from '../../components/experience/Experience';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const LandingExperiences = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  padding: 2rem;
  gap: 2rem;
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
    width: 100%;
    border: 1px solid black;
    padding: 1rem;
  }
  .experiences {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
  }
  .date-picker {
    border: 1px solid black;
  }
`;

function StyledAllExperience() {
  const [startDate, setStartDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(startDate);
  return (
    <LandingExperiences>
      <div className="filters">
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
      </div>
      <div className="experiences">
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
    </LandingExperiences>
  );
}
export default StyledAllExperience;
