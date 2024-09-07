import CounterControl from '../CounterControl';

import './index.css';

const BasketItem = () => {
  return (
    <div className='cart_item_container'>
      <div>
        <p className='cart_item_name'>Smash Brooks</p>
        <p className='cart_item_modifier'>Com 2 carnes</p>

        <CounterControl />
      </div>

      <div>
        <p className='cart-item_price'>R$35,00</p>
      </div>
    </div>
  );
};

export default BasketItem;
