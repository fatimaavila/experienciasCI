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
import { useState } from 'react';

registerLocale('es', es);

function FullExperience({ data }) {
  const [bookingDate, setBookingDate] = useState('');
  let history = useHistory();

  const infoActive = data;
  const optionsDate = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  const dateNoFormat = new Date(bookingDate);
  const dateBooking = dateNoFormat.toLocaleDateString('es-ES', optionsDate);
  const [labelDate, setLabelDate] = useState('');

  function goToCart() {
    history.push({
      pathname: '/shop',
      data: { exp: infoActive, date: dateBooking },
    });
  }

  const defaultRating = 3.5;
  const rating = Number(data.rating);

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
                    goToCart();
                  } else {
                    setLabelDate('Debes seleccionar una fecha para tu reserva');
                  }
                }}
              >
                Agregar al Carrito
              </Button>
            </div>
          </section>
          <section>
            <div className="includes_freePlaces">
              <h4>Incluye:</h4>
              <span>Bono de acceso a la actividad</span>
              <span className="participants">
                <FaUser size="1.5rem" color="#3aabfe" />
                {data.num_participantes > 1
                  ? `${data.num_participantes} personas`
                  : `${data.num_participantes} persona`}
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
