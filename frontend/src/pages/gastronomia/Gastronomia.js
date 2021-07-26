import AllExperiences from '../../components/allexperiences/AllExperiences';
import { getAxios } from '../../axiosCalls';
import { useEffect, useState } from 'react';
function Gastronomia() {
  const [catGastro, setCatGastro] = useState([]);
  const getGastro = async () => {
    const { data } = await getAxios(
      'http://localhost:8080/experiences?cat=Gastronomia'
    );

    setCatGastro(data);
  };

  useEffect(() => {
    getGastro();
  }, []);
  return <div>{catGastro && <AllExperiences data={catGastro} />}</div>;
}
export default Gastronomia;
