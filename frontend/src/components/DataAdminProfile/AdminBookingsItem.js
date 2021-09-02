import { compareAsc } from 'date-fns';
import { useContext, useEffect, useState } from 'react';
import { getAxios } from '../../axiosCalls';
import { UserContext } from '../../context/UserContext';

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

  console.log(info);
  const commented = info?.comentario === null ? 'Pendiente' : 'Comentada';
  const voted = info?.valoracion === null ? 'Pendiente' : 'Valorada';

  const [userName, setUserName] = useState();
  const { token } = useContext(UserContext);

  useEffect(() => {
    async function getUserInfo() {
      try {
        const { data } = await getAxios(
          `http://localhost:8080/users/${info?.id_user}`,
          token
        );

        setUserName(data);
      } catch (error) {
        console.error(error.response.data.message);
      }
    }

    getUserInfo();
  }, [info?.id_user, token]);

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
          <li>Usuario: {userName?.username}</li>
          <li>Email: {userName?.email}</li>
          <li>Fecha de compra: {dateFormat}</li>
          <li>Fecha de reserva: {bookingDate}</li>
        </ul>
        <ul>
          <li>{used}</li>
          <li>Comentada: {commented}</li>
          <li>Valorada: {voted}</li>
        </ul>
      </td>
      <td className="buttonsAdmin"></td>
    </tr>
  );
}

export default AdminBookingsItem;
