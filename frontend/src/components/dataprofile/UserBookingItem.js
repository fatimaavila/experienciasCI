import { Rating } from '@material-ui/lab';
import { useState } from 'react';
import Button from '../button/Button';
import UserComment from './UserComment';
function UserRatingBookingItem() {
  const [showRate, setShowRate] = useState(false);
  const value = 0;
  return (
    <div className="itemBookingContainer">
      <div className="itemBookingHead">
        <h2>#15236</h2>
        <h2>Nombre de la Experiencia</h2>
        <h2>Precio total</h2>
      </div>
      <div className="itemBookingBody">
        <h4>Fecha de Compra</h4>
        <Button blue onClickButton={() => setShowRate(!showRate)}>
          Valora tu Experiencia
        </Button>
      </div>
      {showRate && (
        <div className="itemBookingRate">
          <h3>Valora tu Experiencia</h3>
          <div>
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
            <UserComment />
          </div>
        </div>
      )}
    </div>
  );
}
export default UserRatingBookingItem;
