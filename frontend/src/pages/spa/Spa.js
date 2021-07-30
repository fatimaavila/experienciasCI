import { useEffect, useState } from 'react';
import { getAxios } from '../../axiosCalls';
import AllExperiences from '../../components/allexperiences/AllExperiences';

function Spa() {
  const [catSpa, setCatSpa] = useState([]);
  const [selectFilter,setSelectFilter] = useState('');

  const orderType = selectFilter.split('-').splice(0,1).join('');
  const orderDirection = selectFilter.split('-').splice(1,1).join('');

  useEffect(() => {

    async function getVueloFiltered() {

      try {
        const { data } = await getAxios(
          `http://localhost:8080/experiences?cat=Relax${
            selectFilter && `&order=${orderType}&orderDir=${orderDirection}`
          }`
        );
        
        if(selectFilter) {
          setCatSpa(data);
        };
  
        setCatSpa(data);
      } catch (error) {
          console.error(error.message);
      }
    }
    
    getVueloFiltered();

  }, [selectFilter, orderType, orderDirection]);

  return (
    < >
        {catSpa && <AllExperiences data={catSpa} order={selectFilter} onChangeSelect={(e) => setSelectFilter(e.target.value)}/>}
    </>
  );
}
export default Spa;
