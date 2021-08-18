import { useState } from 'react';
import Shop from '../../components/shop/Shop';
import Loading from '../../components/spinner/Loading';

function Acuaticas() {
  return (
    <div>
      <Loading />
      <Shop />
    </div>
  );
}
export default Acuaticas;
