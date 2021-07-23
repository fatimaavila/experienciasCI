import { useState } from 'react';
import AdminBookings from './AdminBookings';
import AdminExperiences from './AdminExperiences';
import AdminNeWExperience from './AdminNewExperience';
import StyledAdminProfile from './StyledAdminProfile';

function AdminProfileMain() {
  const [showAdminExperience, setShowAdminExperience] = useState(true);
  const [showAdminBookings, setShowAdminBookings] = useState(false);

  return (
    <StyledAdminProfile>
      <div className="adminProfileHead">
        <h1 className="adminProfileTitle">Panel de Administracion</h1>
      </div>
      <div className="adminProfileNav">
        <ul>
          <li
            onClick={() => (
              setShowAdminExperience(true), setShowAdminBookings(false)
            )}
          >
            EXPERIENCIAS
          </li>

          <li
            onClick={() => (
              setShowAdminExperience(false), setShowAdminBookings(true)
            )}
          >
            RESERVAS
          </li>
          <li>
            <AdminNeWExperience />
          </li>
        </ul>
      </div>
      {showAdminBookings && <AdminBookings />}
      {showAdminExperience && <AdminExperiences />}
    </StyledAdminProfile>
  );
}

export default AdminProfileMain;
