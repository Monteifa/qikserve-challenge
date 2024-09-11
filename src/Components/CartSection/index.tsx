import Button from '../Button';
import CardItem from '../CartItem';

import { AiOutlineClose } from 'react-icons/ai';

import { useCartContext } from '../../contexts/CartContext';
import { CurrencyFormatter } from '../../utils/formatCurrency';

import './index.css';

interface CartSectionProps {
  cartOpen: boolean;
  setCartOpen: (cartOpen: boolean) => void;
}

const CartSection = ({ cartOpen, setCartOpen }: CartSectionProps) => {
  const { cart } = useCartContext();

  const cartTotalPrice = cart.reduce((accumulator, current) => {
    return (accumulator +=
      current.quantity * (current.price || current.modifier?.price || 0));
  }, 0);

  return (
    <>
      <div className='cart_section_container'>
        <div className='cart_section_header'>
          <h4 className='cart_section_title'>Carrinho</h4>
        </div>

        <div className='cart_section_content'>
          {cart.length > 0 ? (
            cart.map((item, index) => <CardItem key={index} {...item} />)
          ) : (
            <p>Seu carrinho está vazio</p>
          )}
        </div>

        {cart.length > 0 && (
          <>
            <div className='cart_section_footer'>
              <p className='subtotal_text'>Sub total</p>

              <p className='subtotal_price'>
                {CurrencyFormatter().formatter(cartTotalPrice)}
              </p>
            </div>

            <div className='divider'></div>

            <div className='cart_section_footer'>
              <p className='total_text'>Total:</p>
              <p className='total_price'>
                {CurrencyFormatter().formatter(cartTotalPrice)}
              </p>
            </div>
          </>
        )}
      </div>

      {cartOpen && (
        <div className='cart_section_container_mobile'>
          <div className='cart_mobile_wrapper'>
            <div className='cart_section_header'>
              <div></div>
              <h4>Carrinho</h4>
              <AiOutlineClose onClick={() => setCartOpen(!cartOpen)} />
            </div>

            <div className='cart_section_content'>
              {cart.length > 0 ? (
                cart.map((item, index) => <CardItem key={index} {...item} />)
              ) : (
                <p>Seu carrinho está vazio</p>
              )}
            </div>

            {cart.length > 0 && (
              <>
                <div className='cart_section_footer'>
                  <p className='subtotal_text'>Sub total</p>

                  <p className='subtotal_price'>
                    {CurrencyFormatter().formatter(cartTotalPrice)}
                  </p>
                </div>

                <div className='cart_section_footer'>
                  <p className='total_text'>Total:</p>
                  <p className='total_price'>
                    {CurrencyFormatter().formatter(cartTotalPrice)}
                  </p>
                </div>
              </>
            )}
          </div>

          <Button text='Checkout now' />
        </div>
      )}
    </>
  );
};

export default CartSection;
