import StyledShop from './StyledShop';
import Button from '../button/Button';
import ItemShop from './ItemShop';
import { Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
function Shop() {
  const expInfo = useLocation();
  const { setCartExperience, cartExperience } = useContext(UserContext);
  console.log(cartExperience);
  console.log('shop', expInfo.data);
  const itemsStorage = localStorage.getItem('infoCart');
  const itemsMap = JSON.parse(itemsStorage);
  console.log('st', itemsMap);

  let mappedItems = cartExperience !== [] ? cartExperience : itemsMap;
  console.log('mp', mappedItems);
  useEffect(() => {
    if (cartExperience === []) {
      setCartExperience(expInfo.data);
    } else if (expInfo.data !== undefined && cartExperience) {
      const item = [...cartExperience, expInfo.data];
      setCartExperience(item);
    }
  }, [expInfo.data, setCartExperience]);

  return (
    <StyledShop>
      <section className="bookingInfo">
        {mappedItems &&
          mappedItems?.map((item) => (
            <ItemShop
              key={item?.nombre}
              name={item?.nombre}
              description={item?.descripcion}
              photo={item?.photos[0].photo}
              precio={item?.precio}
            />
          ))}
      </section>

      <section className="searchShop">
        <h4>Por favor seleccione el metodo de envio:</h4>
        <Form className="sendType">
          <Form.Group className="checkboxForm">
            <Form.Check type="radio" name="envio" id="email" />
            <Form.Label htmlFor="email">Vía Email</Form.Label>
          </Form.Group>
          <Form.Group className="checkboxForm">
            <Form.Check type="radio" name="envio" id="post" />
            <Form.Label htmlFor="post">Vía Postal</Form.Label>
          </Form.Group>
          <Form.Group className="checkboxForm">
            <Form.Check type="radio" name="envio" id="present" />
            <Form.Label htmlFor="present">Para Regalo</Form.Label>
          </Form.Group>
          <div className="buttonsShop">
            <Button blue>Comprar</Button>
            <Button>Seguir comprando</Button>
          </div>
        </Form>
      </section>
    </StyledShop>
  );
}

export default Shop;
