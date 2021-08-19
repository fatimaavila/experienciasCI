import Shop from '../../components/shop/Shop';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useLocation, useParams } from 'react-router-dom';

function ShopCart() {
  const { token, tokenContent, userInfo } = useContext(UserContext);

  return <Shop />;
}
export default ShopCart;
