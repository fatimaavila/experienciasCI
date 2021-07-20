import styled from 'styled-components';
import Experiece from '../experience/Experience';
import Filters from '../filters/Filters';

const LandingExperiences = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  padding: 2rem;
  gap: 2rem;

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

function StyledAllExperience({ data }) {
  return (
    <LandingExperiences>
      <Filters />
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
