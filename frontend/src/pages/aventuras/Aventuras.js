import AllExperiences from '../../components/allexperiences/AllExperiences';
import { getAxios } from '../../axiosCalls';
import { useEffect, useState } from 'react';

function Aventuras() {
  const [catAventure, setCatAventure] = useState([]);

  const getAventures = async () => {
    const { data } = await getAxios(
      'http://localhost:8080/experiences?cat=Aventura'
    );

    setCatAventure(data);
  };

  useEffect(() => {
    getAventures();
  }, []);
  return <div>{catAventure && <AllExperiences data={catAventure} />}</div>;
}
export default Aventuras;
