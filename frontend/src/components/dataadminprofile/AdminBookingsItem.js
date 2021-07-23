import { GoTrashcan } from 'react-icons/go';
import { MdEdit } from 'react-icons/md';
function AdminBookingsItem() {
  return (
    <div className="main">
      <h1>Aqui va lo de dentro de la reserva</h1>
      <div className="buttons">
        <MdEdit />
        <GoTrashcan />
      </div>
    </div>
  );
}

export default AdminBookingsItem;
