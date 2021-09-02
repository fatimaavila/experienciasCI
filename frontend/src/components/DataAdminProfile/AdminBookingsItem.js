import { useContext, useEffect, useState } from 'react';
import { getAxios, putAxios } from '../../axiosCalls';
import { UserContext } from '../../context/UserContext';

function AdminBookingsItem({ info }) {
  const used = info?.estado === 1 ? 'Disponible' : 'Disfrutada';
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const dateFormat = new Date(info?.fecha_compra).toLocaleDateString(
    'es-ES',
    options
  );
  const bookingDate = new Date(info?.fecha_reserva).toLocaleDateString(
    'es-ES',
    options
  );
  console.log(info);
  const [userName, setUserName] = useState();
  const { token } = useContext(UserContext);

  useEffect(() => {
    async function getUserInfo() {
      try {
        const { data } = await getAxios(
          `http://localhost:8080/users/${info?.id_user}`,
          token
        );
        console.log(data.email);
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
        <span>{used}</span>
      </td>
      <td className="buttonsAdmin"></td>
    </tr>
  );
}

export default AdminBookingsItem;
