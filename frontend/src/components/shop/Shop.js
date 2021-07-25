import StyledShop from './StyledShop';
import Button from '../button/Button';
import ItemShop from './ItemShop';

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
        <form action="#" method='POST'>
          <input type="radio" id="email" name="envio" value="email" /> 
          <label for="email">Via Email</label> 
          <input type="radio" id="postal" name="envio" value="postal" /> 
          <label for="postal">Via Postal</label>
          <input type="radio" id="regalo" name="envio" value="regalo" />
          <label for="regalo">Para regalo</label>
          <div className='buttonsShop'>
            <Button blue>Comprar</Button>
            <Button>Seguir comprando</Button>
          </div>
        </form>
      </section>
    </StyledShop>
  );
}

export default Shop;
