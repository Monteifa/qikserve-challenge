import { useCartContext } from '../../contexts/CartContext';
import { Items } from '../../types/menu.types';
import { useFormatCurrency } from '../../utils/formatCurrency';

import Badge from '../Badge';

import './index.css';

const MenuItem = ({
  item,
  setSelected,
}: {
  item: Items;
  setSelected: (item: Items) => void;
}) => {
  const { cart } = useCartContext();

  const qty = cart.find((itemCart) => itemCart.id === item.id)?.quantity;

  return (
    <div className='menu-item-container' onClick={() => setSelected(item)}>
      <div className=''>
        <p className='menu_item_title'>
          {qty && <Badge>{qty}</Badge>}
          {item.name}
        </p>
        <p className='menu_item_description'>{item.description}</p>
        <p className='menu_item_price'>{useFormatCurrency(item.price)}</p>
      </div>

      {item.images && (
        <img
          src={item.images && item.images[0].image}
          width={128}
          height={85}
          alt=''
          className='menu_item_img'
        />
      )}
    </div>
  );
};

export default MenuItem;
