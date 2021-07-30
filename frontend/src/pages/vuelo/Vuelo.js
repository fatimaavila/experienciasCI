import AllExperiences from '../../components/allexperiences/AllExperiences';
import { getAxios } from '../../axiosCalls';
import { useEffect, useState } from 'react';

function Vuelo() {
  const [catVuelo, setCatVuelo] = useState([]);
  const [selectFilter,setSelectFilter] = useState('');
  const [cityFilter,setCityFilter] = useState('');
  const [priceFilter,setPriceFilter] = useState({});
  
  const orderType = selectFilter.split('-').splice(0,1).join('');
  const orderDirection = selectFilter.split('-').splice(1,1).join('');

  const cityActive = {
    backgroundColor: '#3aabfe',
    color: '#FFF',
  }

  useEffect(() => {

    async function getVueloFiltered() {

      try {
        const { data } = await getAxios(
          `http://localhost:8080/experiences?cat=Vuelo${
              selectFilter && `&order=${orderType}&orderDir=${orderDirection}`}${
              cityFilter && `&city=${cityFilter}${
              priceFilter.checked && `&price=${priceFilter.value}`
              }`
            }`
        );
        
        if(selectFilter) {
          setCatVuelo(data);
        };
        
        if(cityFilter) {
          setCatVuelo(data);
        };

        if(priceFilter.checked) {
          setCatVuelo(data);
        };
  
        setCatVuelo(data);
      } catch (error) {
          console.error(error.message);
      }
    }
    
    getVueloFiltered();

  }, [selectFilter, orderType, orderDirection,cityFilter,priceFilter]);

  console.log(priceFilter);

  return (
      < >
          {catVuelo && <AllExperiences 
                          data={catVuelo} 
                          order={selectFilter} onChangeSelect={(e) => setSelectFilter(e.target.value)} 
                          onClickCity={(e) => setCityFilter(e.target.innerHTML)}
                          cityActive={cityFilter && cityActive}
                          priceFilter={priceFilter.checked} onChangePrice={(e) => setPriceFilter({checked: e.target.checked,value: e.target.value})}                          
          />}
      </>
    );
}
export default Vuelo;
