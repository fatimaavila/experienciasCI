import AllExperiences from '../../components/allexperiences/AllExperiences';
import { getAxios } from '../../axiosCalls';
import { useEffect, useState } from 'react';

function Vuelo() {
  const [catVuelo, setCatVuelo] = useState([]);
  const [selectFilter,setSelectFilter] = useState('');
  
  const orderType = selectFilter.split('-').splice(0,1).join('');
  const orderDirection = selectFilter.split('-').splice(1,1).join('');

  useEffect(() => {

    async function getVueloFiltered() {

      try {
        const { data } = await getAxios(
          `http://localhost:8080/experiences?cat=Vuelo${
            selectFilter && `&order=${orderType}&orderDir=${orderDirection}`
          }`
        );
        
        if(selectFilter) {
          setCatVuelo(data);
        };
  
        setCatVuelo(data);
      } catch (error) {
          console.error(error.message);
      }
    }
    
    getVueloFiltered();

  }, [selectFilter, orderType, orderDirection]);

  return (
      < >
          {catVuelo && <AllExperiences data={catVuelo} order={selectFilter} onChangeSelect={(e) => setSelectFilter(e.target.value)}/>}
      </>
    );
}
export default Vuelo;
