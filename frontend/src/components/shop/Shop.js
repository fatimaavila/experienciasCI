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
          <h2>Envio via Email (recomendado)</h2>
          <h2>Envio via Postal </h2>
          <h2>Envio mediante caja de regalo </h2>
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
