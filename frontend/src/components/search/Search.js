import Button from '../button/Button';
import BlackTransparentBox from '../BlackTransparentBox/BlackTransparentBox';
import StyledLandingSearch from './StyledLandingSearch';
import Input from '../input/Input';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const INITIAL_VALUES = {
  experience: '',
  city: '',
};

function Search() {
  const history = useHistory();
  const [search, setSearch] = useState(INITIAL_VALUES);

  function searchData() {

    let path = `/experiences${
            search.experience ? `?searchExp=${search.experience}${search.city && `&searchCity=${search.city}`}` 
            : 
            `?searchCity=${search.city}${search.experience && `&searchExp=${search.experience}`}`}`;
    history.push(path);
  }

  return (
    <StyledLandingSearch className="posRel searchHome">
      <BlackTransparentBox>
        <Input type='text' placeholder="Introduce una experiencia" querySearch={search.experience} value={search.experience} onChange={(e) => setSearch({...search,experience: e.target.value})}/>

        <Input type='text' placeholder="Introduce una ciudad" querySearch={search.city} value={search.city} onChange={(e) => setSearch({...search,city: e.target.value})}/>

        <Button blue onClickButton={searchData}>BUSCAR</Button>
      </BlackTransparentBox>
    </StyledLandingSearch>
  );
}

export default Search;
