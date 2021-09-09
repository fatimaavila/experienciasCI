import { compareAsc } from 'date-fns';

function AdminBookingsItem({ info }) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const dateFormat = new Date(info?.fecha_compra).toLocaleDateString(
    'es-ES',
    options
  );
  const today = new Date().toLocaleDateString('es-ES', options);
  const bookingDate = new Date(info?.fecha_reserva).toLocaleDateString(
    'es-ES',
    options
  );
  const date1 = bookingDate.split('/').reverse();
  const date2 = today.split('/').reverse();

  const state = compareAsc(
    new Date(date1[0], date1[1], date1[2]),
    new Date(date2[0], date2[1], date2[2])
  );
  const used = state === 1 ? 'Disponible' : 'Disfrutada';

  const commented = !info?.comentario
    ? 'Pendiente de comentar'
    : 'El usuario ha comentado';
  const voted =
    info?.valoracion < 1 ? 'Pendiente de valorar' : 'El usuario ha valorado';

  return (
    <tr className="sectionData">
      <td className="dataInfo">
        <ul>
          <li>
            <h3>Reserva: {info?.id}</h3>
          </li>
          <li>Experiencia: {info?.id_experience}</li>
          <li>Cantidad: {info?.cantidad}</li>
          <li>Precio Total: {info?.precio_total} &#8364;</li>
          <li>Usuario: {info?.userInfo[0].username}</li>
          <li>Email: {info?.userInfo[0].email}</li>
          <li>Fecha de compra: {dateFormat}</li>
          <li>Fecha de reserva: {bookingDate}</li>
        </ul>
        <ul>
          <li>{used}</li>
          <li>{commented}</li>
          <li>{voted}</li>
        </ul>
      </td>
      <td className="buttonsAdmin"></td>
    </tr>
  );
}

export default AdminBookingsItem;
