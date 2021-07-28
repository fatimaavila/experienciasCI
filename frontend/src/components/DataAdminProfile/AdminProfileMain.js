import { useState } from 'react';
import AdminBookings from './AdminBookings';
import AdminExperiences from './AdminExperiences';
import AdminNeWExperience from './AdminNewExperience';
import StyledAdminProfile from './StyledAdminProfile';

const Initial_States = {
  experiences: true,
  bookings: false,
};

function AdminProfileMain() {
  const [showSection, setShowSection] = useState(Initial_States);

  const dataActive = {
    backgroundColor: '#3aabfe',
    color: '#ffffff',
    borderTopLeftRadius: 6 + 'px',
    borderTopRightRadius: 6 + 'px',
  };

  return (
    <StyledAdminProfile>
      <div className="adminProfileHead">
        <h2>Panel de Administracion</h2>
      </div>
      <div className="adminProfileNav">
        <ul>
          <li
            style={showSection.experiences ? dataActive : null}
            onClick={() =>
              setShowSection({
                experiences: !showSection.experiences,
                bookings: !showSection.bookings,
              })
            }
          >
            EXPERIENCIAS
          </li>

          <li
            style={showSection.bookings ? dataActive : null}
            onClick={() =>
              setShowSection({
                experiences: !showSection.experiences,
                bookings: !showSection.bookings,
              })
            }
          >
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
