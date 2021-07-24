import { GoTrashcan } from 'react-icons/go';
import { MdEdit } from 'react-icons/md';
function AdminBookingsItem() {
  return (
    <tr className="sectionData">
      <td>
        <h3>Aqui va lo de dentro de la reserva</h3>
      </td>
      <td className="buttonsAdmin">
        <MdEdit />
        <GoTrashcan />
      </td>
    </tr>
  );
}

export default AdminBookingsItem;
