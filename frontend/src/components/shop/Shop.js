import StyledShop from './StyledShop';
import Button from '../button/Button';
import ItemShop from './ItemShop';
import { Checkbox } from '@material-ui/core';

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
          <ul>
            <li>
              <Checkbox label="email" />
              Envio via Email
            </li>

            <li>
              <Checkbox label="postal" />
              Envio via Postal
            </li>
            <li>
              <Checkbox label="regalo" />
              Envio para regalo
            </li>
          </ul>
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
