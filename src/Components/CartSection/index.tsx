import CardItem from '../CartItem';

import './index.css';

const CartSection = () => {
  return (
    <div className='cart_section_container'>
      <div className='cart_section_header'>
        <h4 className='cart_section_title'>Carrinho</h4>
      </div>

      <div className='cart_section_content'>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
};

export default CartSection;
