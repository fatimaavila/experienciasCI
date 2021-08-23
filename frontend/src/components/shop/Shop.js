import StyledShop from './StyledShop';
import Button from '../button/Button';
import ItemShop from './ItemShop';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
function Shop() {
  let history = useHistory();
  const [checked, setChecked] = useState();
  console.log('post', checked);
  const expInfo = useLocation();
  const { setCartExperience, cartExperience, token } = useContext(UserContext);
  console.log(cartExperience);
  console.log('shop', expInfo.data);
  const itemsStorage = localStorage.getItem('infoCart');
  const itemsMap = JSON.parse(itemsStorage);
  console.log('st', itemsMap);
  function goToHome() {
    history.push('/experiences');
  }
  function isChecked(string) {
    if (string === 'email') {
      setChecked('Para continuar tu viaje, revisa tu email.');
    } else if (string === 'post') {
      setChecked(
        'En unos días, recibiras el paquete para continuar con tu viaje.'
      );
    } else if (string === 'present') {
      setChecked('Tu regalo ha sido enviado.');
    }
  }

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
            <Form.Check
              type="radio"
              name="envio"
              id="email"
              onChange={() => isChecked('email')}
            />
            <Form.Label htmlFor="email">Vía Email</Form.Label>
          </Form.Group>
          <Form.Group className="checkboxForm">
            <Form.Check
              type="radio"
              name="envio"
              id="post"
              onChange={() => isChecked('post')}
            />
            <Form.Label htmlFor="post">Vía Postal</Form.Label>
          </Form.Group>
          <Form.Group className="checkboxForm">
            <Form.Check
              type="radio"
              name="envio"
              id="present"
              checked={() => isChecked('present')}
            />
            <Form.Label htmlFor="present">Para Regalo</Form.Label>
          </Form.Group>
          <div className="buttonsShop">
            <Button
              blue
              onClickButton={() => {
                if (token && checked) {
                  alert(checked);
                  setCartExperience([]);
                  goToHome();
                } else if (!token) {
                  alert('Debes estar registrado para finalizar tu compra');
                } else if (token && !checked) {
                  alert('Debes seleccionar un metodo de envío');
                }
              }}
            >
              Comprar
            </Button>

            <Button onClickButton={() => goToHome()}>Seguir comprando</Button>
          </div>
        </Form>
      </section>
    </StyledShop>
  );
}

export default Shop;
