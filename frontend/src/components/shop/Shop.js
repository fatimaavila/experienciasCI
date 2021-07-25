import StyledShop from './StyledShop';
import Button from '../button/Button';
import ItemShop from './ItemShop';
import { Form } from 'react-bootstrap';

function Shop() {
  return (
    <StyledShop>
      <section className="bookingInfo">
        <ItemShop />
        <ItemShop />
        <ItemShop />
      </section>

      <section className="searchShop">
        <h4>Por favor seleccione el metodo de envio:</h4>
        <Form className='sendType'>
          <Form.Group className='checkboxForm'>
            <Form.Check type='radio' name='envio' id='email'/>
            <Form.Label htmlFor='email'>Vía Email</Form.Label>
          </Form.Group>
          <Form.Group className='checkboxForm'>
            <Form.Check type='radio' name='envio' id='post'/>
            <Form.Label htmlFor='post'>Vía Postal</Form.Label>
          </Form.Group>
          <Form.Group className='checkboxForm'>
            <Form.Check type='radio' name='envio' id='present'/>
            <Form.Label htmlFor='present'>Para Regalo</Form.Label>
          </Form.Group>
          <div className='buttonsShop'>
            <Button blue>Comprar</Button>
            <Button>Seguir comprando</Button>
          </div>
        </Form>
      </section>
    </StyledShop>
  );
}

export default Shop;
