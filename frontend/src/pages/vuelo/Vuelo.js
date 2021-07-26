import AllExperiences from '../../components/allexperiences/AllExperiences';
import { getAxios } from '../../axiosCalls';
import { useEffect, useState } from 'react';
function Vuelo() {
  const [catVuelo, setCatVuelo] = useState([]);
  const getVuelo = async () => {
    const { data } = await getAxios(
      'http://localhost:8080/experiences?cat=Vuelo'
    );

    setCatVuelo(data);
  };

  useEffect(() => {
    getVuelo();
  }, []);
  console.log(catVuelo);
  return <div>{catVuelo && <AllExperiences data={catVuelo} />}</div>;
}
export default Vuelo;
