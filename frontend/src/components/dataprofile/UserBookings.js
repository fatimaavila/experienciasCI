import { useContext, useEffect, useState } from 'react';
import { getAxios } from '../../axiosCalls';
import { UserContext } from '../../context/UserContext';
import UserRatingBookingItem from './UserBookingItem';

function UserBookings() {
  const { tokenContent, token } = useContext(UserContext);
  console.log('userBook', tokenContent);
  const [userBookings, setUserBookings] = useState([]);
  useEffect(() => {
    async function getUserBookings() {
      try {
        const { data } = await getAxios(
          `http://localhost:8080/bookings/${tokenContent.idUser}/bookings`,
          token
        );
        console.log(data);
        setUserBookings(data);
      } catch (error) {
        console.log('ERROR: ', error);
      }
    }
    getUserBookings();
  }, [token, tokenContent]);

  console.log('userBookings', userBookings);

  return (
    <>
      {userBookings &&
        userBookings?.map((booking) => 
          <UserRatingBookingItem key={booking.id} bookingInfo={booking} />
        )}
    </>
  );
}
export default UserBookings;
