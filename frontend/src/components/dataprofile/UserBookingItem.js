import { Rating } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import { getAxios } from '../../axiosCalls';
import Button from '../button/Button';
import UserComment from './UserComment';
function UserRatingBookingItem({ bookingInfo }) {
  const [showRate, setShowRate] = useState(false);
  const [uniqueExp, setUniqueExp] = useState([]);
  const value = 4.5;

  useEffect(() => {
    const getUniqueExp = async () => {
      const { data } = await getAxios(
        `http://localhost:8080/experiences/${Number(bookingInfo.id_experience)}`
      );

      setUniqueExp(data);
    };
    getUniqueExp();
  }, [bookingInfo]);

  const optionsDate = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };
  const dateFormat = new Date(bookingInfo.fecha_compra);
  const dateBooking = new Date(bookingInfo.fecha_reserva);
  const dateToday = new Date();

  return (
    <div className="userBookking">
      <div className="bookingHead">
        <span className="idBooking">ID: {bookingInfo.id}</span>
        <h3>{uniqueExp.nombre}</h3>
        <span className="totalPriceBooking">
          {bookingInfo.precio_total}&#8364;
        </span>
      </div>
      <div className="bookingBody">
        <span>
          Fecha de Compra: {dateFormat.toLocaleDateString('es-ES', optionsDate)}
        </span>
        <span>
          Fecha de Reserva:{' '}
          {dateBooking.toLocaleDateString('es-ES', optionsDate)}
        </span>
      </div>
      <div>
        <Button blue onClickButton={() => setShowRate(!showRate)}>
          Valora tu Experiencia
        </Button>
      </div>
      {showRate && (
        <div className="appreciations">
          <div className="bookingComments">
            <span>Comentario:</span>
            <UserComment />
          </div>
          <div className="bookingRate">
            <span>Valoración:</span>
            <Rating
              name="rating-experience"
              value={value}
              precision={0.5}
              // onChange={(e,newRating) => setRating(newRating)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default UserRatingBookingItem;
