import { Form } from 'react-bootstrap';
import { useState } from 'react';

function ItemShop({ name, description, photo, precio }) {
  const [units, setUnits] = useState(1);
  const [showMore,setShowMore] = useState(false);
  const totalPrice = (a, b) => {
    return a * b;
  };

  const price = totalPrice(units, Number(precio));

  const descFirts_Part = description.split('.').slice(0,4).join('.');
  const descSecond_Part = description.split('.').slice(4).join('.');

  return (
    <div className="bookingItemInfo posRel">
      <div className="imgShop">
        <img width="100%" src={photo} alt="imgshop" />
      </div>
      <div className="bookingExperienceInfo">
        <h3>{name}</h3>
        <p>{descFirts_Part}.
          {showMore && descSecond_Part}
          <span
            className='showMoreBtn' 
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Leer menos' : 'Leer más'}
          </span>
        </p>


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

        <span className="priceShop">Total: {price ? `${price}.00 `: '0.00 '}€</span>
      </div>
    </div>
  );
}
export default ItemShop;
