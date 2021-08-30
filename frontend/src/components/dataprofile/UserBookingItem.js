import { Rating } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import { getAxios } from '../../axiosCalls';
import Button from '../button/Button';
import UserComment from './UserComment';
import { compareAsc } from 'date-fns';
function UserRatingBookingItem({ bookingInfo }) {
  const [showRate, setShowRate] = useState(false);
  const [uniqueExp, setUniqueExp] = useState([]);

  const value = 0;

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
  const dateFormat = new Date(bookingInfo.fecha_compra).toLocaleDateString(
    'es-ES',
    optionsDate
  );
  const dateBooking = new Date(bookingInfo.fecha_reserva).toLocaleDateString(
    'es-ES',
    optionsDate
  );
  const dateToday = new Date().toLocaleDateString('es-ES', optionsDate);
  console.log('dates', dateBooking, dateToday);
  const date1 = dateBooking.split('/').reverse();
  const date2 = dateToday.split('/').reverse();

  const state = compareAsc(
    new Date(date1[0], date1[1], date1[2]),
    new Date(date2[0], date2[1], date2[2])
  );
  console.log('state', state);
  const resultUsedExp = state === -1 ? false : true;

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
        <span>Fecha de Compra: {dateFormat}</span>
        <span>Fecha de Reserva: {dateBooking}</span>
      </div>
      <div>
        {resultUsedExp ? (
          <Button red disabled={resultUsedExp}>
            Valora tu Experiencia
          </Button>
        ) : (
          <Button blue onClickButton={() => setShowRate(!showRate)}>
            Valora tu Experiencia
          </Button>
        )}
      </div>
      {showRate && (
        <div className="appreciations">
          <div className="bookingComments">
            <span>Comentario:</span>
            {bookingInfo?.comentario ? (
              bookingInfo?.comentario
            ) : (
              <UserComment idBooking={bookingInfo.id} />
            )}
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
