import styled from 'styled-components';
import photoName from '../../assets/allExp.jpg';
import { Rating } from '@material-ui/lab';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 1rem;
  font-size: 2rem;

  .exp-header {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  .exp-footer {
    display: flex;
    gap: 4rem;
  }
`;

function StyledExperience() {
  const value = 0;
  return (
    <Div>
      <div className="exp-header">
        <img src={photoName} alt="foto-experience" />
        <h1>Piloto por un dia</h1>
        <h2>Madrid</h2>
      </div>
      <div className="exp-footer">
        <Rating
          name="hover-feedback"
          value={value}
          precision={1}
          //   onChange={(event, newValue) => {
          //     setValue(newValue);
          //   }}
          //   onChangeActive={(event, newHover) => {
          //     setHover(newHover);
          //   }}
        />
        {/* {value !== null && (
          <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
        )} */}

        <p>70.99€</p>
      </div>
    </Div>
  );
}

export default StyledExperience;
