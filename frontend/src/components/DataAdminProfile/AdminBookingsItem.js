function AdminBookingsItem({ info }) {
  const used = info?.estado === 1 ? 'Disponible' : 'Disfrutada';
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const dateFormat = new Date(info?.fecha_compra).toLocaleDateString(
    'es-ES',
    options
  );

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
