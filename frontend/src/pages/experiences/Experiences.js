import AllExperiences from '../../components/allexperiences/AllExperiences';
import { getAxios } from '../../axiosCalls';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Experiences() {

    const [experienceSearch,setExperienceSearch] = useState([]);
    const [selectFilter,setSelectFilter] = useState('');

    const orderType = selectFilter.split('-').splice(0,1).join('');
    const orderDirection = selectFilter.split('-').splice(1,1).join('');

    const location = useLocation();

    useEffect(() => {

        async function getVueloFiltered() {
    
          try {
            const { data } = await getAxios(
              `http://localhost:8080/experiences${
                    location.search ? `${location.search}${selectFilter && `&order=${orderType}&orderDir=${orderDirection}`}` 
                    : 
                    `${selectFilter && `?order=${orderType}&orderDir=${orderDirection}`}`}`
            );
            
            if(selectFilter) {
                setExperienceSearch(data);
            };
      
            setExperienceSearch(data);
          } catch (error) {
              console.error(error.message);
          }
        }
        
        getVueloFiltered();
    
      }, [selectFilter, orderType, orderDirection,location]);

    return (
        < >
            {experienceSearch && <AllExperiences data={experienceSearch} order={selectFilter} onChangeSelect={(e) => setSelectFilter(e.target.value)}/>}
        </>
      );

}

export default Experiences;