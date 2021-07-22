import StyledShop from './StyledShop';
import Button from '../button/Button';
import ItemShop from './ItemShop';
import { GoPrimitiveDot } from 'react-icons/go';

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
            <GoPrimitiveDot>
              Envio via Email (recomendado)
              <li></li>
            </GoPrimitiveDot>

            <li>Envio via Postal </li>
            <li>Envio mediante caja de regalo </li>
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
