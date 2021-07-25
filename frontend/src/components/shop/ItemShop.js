import fly from '../../assets/globoCategory.jpg';
import { Form } from 'react-bootstrap';

function ItemShop() {
  return (
    <div className='bookingItemInfo posRel'>
      <div className="imgShop">
        <img width='100%' src={fly} alt="imgshop" />
      </div>
      <div className="bookingExperienceInfo">
        <h3>NOMBRE EXPERIENCIA</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit
          amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip.
        </p>

        <Form.Label>
          Cantidad
          <Form.Control type='number'/>
        </Form.Label>

        <span className='priceShop'>Total: 99,99€</span>
      </div>
    </div>
  );
}
export default ItemShop;
