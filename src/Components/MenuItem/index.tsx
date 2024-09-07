import { useContextModal } from '../../contexts/ModalContext';
import Badge from '../Badge';

import './index.css';

interface teste {
  id: number;
  name: string;
  description?: string;
  alcoholic: number;
  price: number;
  position: number;
  visible?: number | undefined;
  availabilityType: string;
  sku?: string;
  images?: {
    id: number;
    image: string;
  }[];
  modifiers?: {
    items: {
      name: string;
      price: number;
    }[];
  }[];
  available: boolean;
}

// interface MenuItemProps {
//   name: string;
//   description: string | undefined;
//   price: number;
//   img: string | undefined;
// }

const MenuItem = (item: teste) => {
  const { setModal } = useContextModal();
  return (
    <div
      className='menu-item-container'
      onClick={() => setModal({ item: item, isOpen: true })}
    >
      <div className=''>
        <p className='menu_item_title'>
          <Badge>2</Badge>
          {item.name}
        </p>
        <p className='menu_item_description'>{item.description}</p>
        <p className='menu_item_price'>R${item.price}</p>
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
