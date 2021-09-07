import Button from '../button/Button';
import BlackTransparentBox from '../BlackTransparentBox/BlackTransparentBox';
import StyledLandingSearch from './StyledLandingSearch';
import Input from '../input/Input';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Search() {
  const history = useHistory();
  const [search, setSearch] = useState('');

  function searchData() {
    let path = `/experiences?searchExp=${search}`;
    history.push(path);
  }

  return (
    <StyledLandingSearch className="posRel searchHome">
      <BlackTransparentBox>
        <Input
          type="text"
          placeholder="Introduce una experiencia"
          querySearch={search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              searchData();
            }
          }}
        />
        <Button blue onClickButton={searchData}>
          BUSCAR
        </Button>
      </BlackTransparentBox>
    </StyledLandingSearch>
  );
}

export default Search;
