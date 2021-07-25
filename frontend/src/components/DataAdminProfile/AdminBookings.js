import AdminBookingsItem from './AdminBookingsItem';

function AdminBookings() {
  return (
    <table className='tableData'>
      <tbody>
        <AdminBookingsItem></AdminBookingsItem>
        <AdminBookingsItem></AdminBookingsItem>
        <AdminBookingsItem></AdminBookingsItem>
        <AdminBookingsItem></AdminBookingsItem>
      </tbody>
    </table>
  );
}

export default AdminBookings;
