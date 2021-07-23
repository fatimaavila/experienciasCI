import { useState } from 'react';
import AdminBookings from './AdminBookings';
import AdminExperiences from './AdminExperiences';
import AdminNeWExperience from './AdminNewExperience';
import StyledAdminProfile from './StyledAdminProfile';

const Initial_States = {
  experiences: true,
  bookings: false,
}

function AdminProfileMain() {
  const [showSection, setShowSection] = useState(Initial_States);

  return (
    <StyledAdminProfile>
      <div className="adminProfileHead">
        <h1 className="adminProfileTitle">Panel de Administracion</h1>
      </div>
      <div className="adminProfileNav">
        <ul>
          <li onClick={() => setShowSection({
            experiences: !showSection.experiences && !showSection.experiences,
            bookings: showSection.bookings,
          })}>
            EXPERIENCIAS
          </li>

          <li onClick={() => setShowSection({
            experiences: showSection.experiences,
            bookings: !showSection.bookings && !showSection.bookings,
          })}>
            RESERVAS
          </li>
          <li>
            <AdminNeWExperience />
          </li>
        </ul>
      </div>
      {showSection?.bookings ? <AdminBookings /> : <AdminExperiences />}
    </StyledAdminProfile>
  );
}

export default AdminProfileMain;
