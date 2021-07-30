import { Rating } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import { getAxios } from '../../axiosCalls';
import Button from '../button/Button';
import UserComment from './UserComment';
function UserRatingBookingItem({ bookingInfo }) {
  const [showRate, setShowRate] = useState(false);
  const value = 0;
  const [uniqueExp, setUniqueExp] = useState([]);

  useEffect(() => {
    const getUniqueExp = async () => {
      const { data } = await getAxios(
        `http://localhost:8080/experiences/${Number(bookingInfo.id)}`
      );

      setUniqueExp(data);
    };
    getUniqueExp();
  }, [bookingInfo]);
  return (
    <div className="itemBookingContainer">
      <div className="itemBookingHead">
        <h2>{bookingInfo.id}</h2>
        <h2>{uniqueExp.nombre}</h2>
        <h2>{bookingInfo.precio_total}</h2>
      </div>
      <div className="itemBookingBody">
        <h4>{bookingInfo.fecha_compra}</h4>
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
