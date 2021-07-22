import StyledShop from './StyledShop';
import { Button } from '@material-ui/core';
import fly from '../../assets/globoCategory.jpg';
function Shop() {
  return (
    <StyledShop>
      <div className="shop-global">
        <h1>NOMBRE EXPERIENCIA</h1>
        <img src={fly} alt="imgshop" />
      </div>
      <div className="description">
        <h2>Lorem ipsum dolor sit amet, consectetur adip</h2>
        <p>99,99€</p>
        <h1>Cantidad</h1>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      <div className="send-type">
        <Button blue className="button-buy">
          Comprar
        </Button>
        <Button>Seguir comprando</Button>
      </div>
    </StyledShop>
  );
}

export default Shop;
