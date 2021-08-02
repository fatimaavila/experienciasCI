import AllExperiences from '../../components/allexperiences/AllExperiences';
import { getAxios } from '../../axiosCalls';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import { sqlDateFormat } from '../../helpers';

function Experiences() {
  const [experienceSearch,setExperienceSearch] = useState([]);
  const [selectFilter,setSelectFilter] = useState('');
  const [cityFilter,setCityFilter] = useState('');
  const [priceFilter,setPriceFilter] = useState({checked: false, value: ''});
  const [dateFilter,setDateFilter] = useState({dateStart: '',dateEnd: ''});

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  console.log(location.search,searchParams.get('searchExp'));
  
  const orderType = selectFilter.split('-').splice(0,1).join('');
  const orderDirection = selectFilter.split('-').splice(1,1).join('');

  const cityActive = {
    textDecoration: 'underline',
    textDecorationColor: '#3aabfe',
  }
  
  useEffect(() => {
    const newDateStart = dateFilter.dateStart && dateFilter.dateStart.toLocaleDateString('es-ES',{year: 'numeric', month: 'numeric', day: 'numeric',});
    const newDateEnd = dateFilter.dateEnd && dateFilter.dateEnd.toLocaleDateString('es-ES',{year: 'numeric', month: 'numeric', day: 'numeric',});

    const urlFiltered = queryString.stringifyUrl({
      url: 'http://localhost:8080/experiences',
      query: {
        searchExp: `${searchParams.has('searchExp') ? searchParams.get('searchExp') : ''}`,
        searchCity: `${searchParams.has('searchCity') ? searchParams.get('searchCity') : ''}`,
        order: `${orderType}`,
        orderDir: `${orderDirection}`,
        city: `${cityFilter}`,
        price: `${priceFilter.value}`,
        dateStart: `${sqlDateFormat(newDateStart)}`,
        dateEnd: `${sqlDateFormat(newDateEnd)}`,
      }
    });

    async function getExperiencesFiltered() {
      try {
        const { data } = await getAxios(urlFiltered);
  
        setExperienceSearch(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    
    getExperiencesFiltered();

  }, [selectFilter, orderType, orderDirection,cityFilter,priceFilter,dateFilter]);

  return (
      < >
          {experienceSearch && <AllExperiences 
                          data={experienceSearch} 
                          order={selectFilter} onChangeSelect={(e) => setSelectFilter(e.target.value)} 
                          onClickCity={(e) => setCityFilter(e.target.innerHTML)} cityActive={cityFilter && cityActive} cityFilterSelected={cityFilter}
                          priceFilter={priceFilter.checked} onChangePrice={(e) => setPriceFilter({checked: !priceFilter.checked,value: e.target.value})}
                          dateStartFilter={dateFilter.dateStart} changeDatePickerStart={(date) => setDateFilter({...dateFilter,dateStart: date})}
                          dateEndFilter={dateFilter.dateEnd} changeDatePickerEnd={(date) => setDateFilter({...dateFilter,dateEnd: date})}
          />}
      </>
    );
}
export default Experiences;