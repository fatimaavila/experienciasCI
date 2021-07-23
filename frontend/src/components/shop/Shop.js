import StyledShop from './StyledShop';
import Button from '../button/Button';
import ItemShop from './ItemShop';

function Shop() {
  return (
    <StyledShop>
      <div className="containerItemShop">
        <ItemShop />
        <ItemShop />
        <ItemShop />
      </div>

      <div className="searchShop">
        <div className="send-type">
          <form action="">
            <ul>
              <p>Por favor seleccione el metodo de envio:</p>
              <li>
                <input type="radio" id="email" name="envio" value="email" /> 
                <label for="email">Via Email</label> 
              </li>
              <li>
                <input type="radio" id="postal" name="envio" value="postal" /> 
                <label for="postal">Via Postal</label>
              </li>
              <li>
                <input type="radio" id="regalo" name="envio" value="regalo" />
                <label for="regalo">Para regalo</label>
              </li>
            </ul>
          </form>
        </div>

        <div>
          <Button blue className="button-buy">
            Comprar
          </Button>
          <Button>Seguir comprando</Button>
        </div>
      </div>
    </StyledShop>
  );
}

export default Shop;
