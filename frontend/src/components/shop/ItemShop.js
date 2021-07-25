import fly from '../../assets/globoCategory.jpg';

function ItemShop() {
  return (
    <div className='bookingItemInfo'>
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

        <label>Cantidad</label>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>

        <span className='priceShop'>Total: 99,99€</span>
      </div>
    </div>
  );
}
export default ItemShop;
