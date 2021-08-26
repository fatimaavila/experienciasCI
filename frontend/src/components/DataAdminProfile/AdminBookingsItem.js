import { putAxios } from '../../axiosCalls';
import { UserContext } from '../../context/UserContext';

function AdminBookingsItem({ info }) {
  const used = info?.estado === 1 ? 'Disponible' : 'Disfrutada';
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const dateFormat = new Date(info?.fecha_compra).toLocaleDateString(
    'es-ES',
    options
  );
  //const { token } = UserContext(UserContext);

  /*  async function performStateBooking() {
    try {
      const { data } = await putAxios(
        `http://localhost:8080/bookings/${info?.id}/state`,token)
    } catch (error) {
      console.log(error);
    }
  } */
  return (
    <tr className="sectionData">
      <td>
        <h3>
          <span>Reserva: </span>
          {info?.id}
        </h3>
        <span>Exp: {info?.id_experience}</span>
        <span>Cantidad: {info?.cantidad}</span>
        <span>Precio: {info?.precio_total}</span>
        <span>Usuario: {info?.id_user}</span>
        <span>Fecha de compra: {dateFormat}</span>
        <span>Estado: {used}</span>
      </td>
      <td className="buttonsAdmin"></td>
    </tr>
  );
}

export default AdminBookingsItem;
