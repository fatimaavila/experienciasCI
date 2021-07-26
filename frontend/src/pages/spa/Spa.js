import { useEffect, useState } from 'react';
import { getAxios } from '../../axiosCalls';
import AllExperiences from '../../components/allexperiences/AllExperiences';

function Spa() {
  const [catSpa, setCatSpa] = useState([]);
  const getSpa = async () => {
    const { data } = await getAxios(
      'http://localhost:8080/experiences?cat=Relax'
    );

    setCatSpa(data);
  };
  useEffect(() => {
    getSpa();
  }, []);
  return <div>{catSpa && <AllExperiences data={catSpa} />}</div>;
}
export default Spa;
