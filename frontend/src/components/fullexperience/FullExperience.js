import CarouselFS from './CarouselFS';
import StyledFullExperience from './StyledFullExperience';
import Button from '../button/Button';
import Comments from '../comments/Comments';
import { FaUser } from 'react-icons/fa';
import { BsCheck } from 'react-icons/bs';
import { Rating } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';

import { sqlDateFormat } from '../../helpers';
import axios from 'axios';

registerLocale('es', es);

function FullExperience({ data }) {
  const { setCartExperience, cartExperience } = useContext(UserContext);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingParticipants, setBookingParticipants] = useState();
  console.log(bookingParticipants);
  let history = useHistory();

  const infoActive = data;
  console.log(infoActive);
  const optionsDate = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  const dateNoFormat = new Date(bookingDate);
  const dateClientSelect = new Date(bookingDate).toLocaleDateString(
    'es-ES',
    optionsDate
  );
  const dateBooking = dateNoFormat.toLocaleDateString('es-ES', optionsDate);
  const [labelDate, setLabelDate] = useState('');
  console.log('dataaaa', sqlDateFormat(dateBooking));
  useEffect(() => {
    if (bookingDate !== '') {
      async function getParticipants() {
        const { data } = await axios.get(
          `http://localhost:8080/bookings/state/${
            infoActive?.id
          }/${sqlDateFormat(dateClientSelect)}`
        );
        console.log(data);
        setBookingParticipants(data);
      }
      getParticipants();
    }
  }, [bookingDate, dateBooking, infoActive.id, dateClientSelect]);

  function addToCart(item, date) {
    setCartExperience([...cartExperience, { exp: item, date: date }]);
    history.push('/shop');
  }

  const peopleHasBooking = bookingParticipants?.data.length;
  console.log('people', peopleHasBooking);
  const bookingPeople = data.num_participantes - peopleHasBooking;
  console.log('people2', bookingPeople);

  const defaultRating = 3.5;
  const rating = Number(data.rating);
  const outOfStock = bookingPeople === 0 ? true : false;

  return (
    <StyledFullExperience>
      <div className="experienceDetails">
        <div className="carouselPhotoExp">
          <CarouselFS photos={data} className="carousel-fs" />
        </div>
        <div className="experienceInfo">
          <section>
            <h2>{data.nombre}</h2>
            <div className="rating_dateBooking">
              <Rating
                name="rating-experience"
                value={rating !== 0.0 ? rating : defaultRating}
                precision={0.5}
                readOnly
              />
              <div className="dateBooking">
                <span>Fecha de la Reserva:</span>
                <DatePicker
                  locale="es"
                  dateFormat="dd/MM/yyyy"
                  className="date-picker"
                  selected={bookingDate}
                  onChange={(date) => setBookingDate(date)}
                />
              </div>
              {labelDate && <span>{labelDate}</span>}
            </div>

            <div className="experiencePrice_Buy">
              <section>
                <span className="priceLabel">Precio:</span>
                <span className="priceNumber">{data.precio}&#8364;</span>
              </section>
              <Button
                blue
                onClickButton={() => {
                  if (bookingDate) {
                    addToCart(infoActive, dateBooking);
                  } else {
                    setLabelDate('Debes seleccionar una fecha para tu reserva');
                  }
                }}
                disabled={outOfStock}
              >
                Agregar al Carrito
              </Button>
            </div>
          </section>
          <section>
            <div className="includes_freePlaces">
              <h4>Incluye:</h4>
              <span>Bono de acceso a la actividad</span>
              <span>Disponibilidad :</span>
              <span className="participants">
                {bookingDate === '' ? (
                  <span>Selecciona una fecha para ver disponibilidad</span>
                ) : (
                  <span>
                    <FaUser size="1.5rem" color="#3aabfe" />
                    {bookingPeople !== undefined
                      ? `${bookingPeople} Plazas disponibles`
                      : `${data.num_participantes} Plazas disponibles `}
                  </span>
                )}
              </span>
            </div>
            <h4>Condiciones de uso:</h4>
            <ul className="useConditionsExp">
              <div>
                <BsCheck size="1.5rem" color="#3aabfe" />
                <li>Debe reservar cita para el día solicitado</li>
              </div>
              <div>
                <BsCheck size="1.5rem" color="#3aabfe" />
                <li>Deberá respetar las normas indicadas por el organizador</li>
              </div>
              <div>
                <BsCheck size="1.5rem" color="#3aabfe" />
                <li>Acuda con ropa comoda y elástica a ser posible</li>
              </div>
              <div>
                <BsCheck size="1.5rem" color="#3aabfe" />
                <li>Siga las indicaciones para un correcto uso</li>
              </div>
              <div>
                <BsCheck size="1.5rem" color="#3aabfe" />
                <li>En caso de no acudir debe comunicar con el vendedor</li>
              </div>
              <div>
                <BsCheck size="1.5rem" color="#3aabfe" />
                <li>La caducidad es de 12 meses desde la fecha de compra</li>
              </div>
            </ul>
          </section>
        </div>
      </div>
      <div className="experienceDesc_Appreciation">
        <section>
          <h3>Descripción</h3>
          <p>{data.descripcion}</p>
        </section>
        <Comments comment={data} />
      </div>
    </StyledFullExperience>
  );
}
export default FullExperience;
