import { Form } from 'react-bootstrap';
import { useState } from 'react';

function ItemShop({ name, description, photo, precio }) {
  const [units, setUnits] = useState(1);
  console.log(units);
  console.log(precio);
  const totalPrice = (a, b) => {
    return a * b;
  };

  const price = totalPrice(units, Number(precio));
  return (
    <div className="bookingItemInfo posRel">
      <div className="imgShop">
        <img width="1000%" src={photo} alt="imgshop" />
      </div>
      <div className="bookingExperienceInfo">
        <h3>{name}</h3>
        <p>{description}</p>

        <Form.Label>
          Cantidad
          <Form.Control
            type="number"
            min="1"
            max="99"
            placeholder="1"
            onChange={(e) => setUnits(e.target.value)}
          />
        </Form.Label>

        <span className="priceShop">Total: {price ? price : ''}€</span>
      </div>
    </div>
  );
}
export default ItemShop;
