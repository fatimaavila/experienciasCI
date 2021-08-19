import Shop from '../../components/shop/Shop';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useLocation } from 'react-router-dom';

function ShopCart() {
  const { token, tokenContent, userInfo } = useContext(UserContext);

  const expInfo = useLocation();

  console.log('shop', expInfo.data);

  return <Shop data={expInfo.data} />;
}
export default ShopCart;
