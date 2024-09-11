import { useEffect, useState } from 'react';

import { AiFillCloseCircle } from 'react-icons/ai';
import { FaRegImage } from 'react-icons/fa6';

import QuantityController from '../QuantityControl';
import Button from '../Button';

import { ItemsModifiers, Items } from '../../types/menu.types';

import { useCartContext } from '../../contexts/CartContext';

import './index.css';

import { useRef } from 'react';
import { createPortal } from 'react-dom';

const { format } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

interface Order {
  id: number;
  name: string;
  price: number;
  modifier?: ItemsModifiers;
  quantity: number;
}

interface ModalProps {
  item: Items;
  setSelected: (item?: Items) => void;
}

const Modal = ({ item, setSelected }: ModalProps) => {
  const { addToCart } = useCartContext();

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (item) {
      dialogRef.current?.showModal();
      return;
    }
  }, [item]);

  const [quantity, setQuantity] = useState(1);
  const [selectedModifier, setSelectedModifier] = useState(
    item?.modifiers?.[0].items?.[0]
  );

  const order: Order = {
    id: item?.id ?? -1,
    name: item?.name ?? '',
    price: quantity * (item?.price || selectedModifier?.price || 0),
    modifier: selectedModifier,
    quantity: quantity,
  };

  const updateQuantity = (qty: number) => {
    setQuantity(qty);
  };

  const updateModifier = (modifier: ItemsModifiers) => {
    setSelectedModifier(modifier);
  };

  const handleOrder = (order: Order) => {
    addToCart(order);
    setSelected(undefined);
  };

  return createPortal(
    <dialog
      className='dialog'
      ref={dialogRef}
      onCancel={() => setSelected(undefined)}
    >
      <div className='modal_container'>
        {item.images ? (
          <img src={item?.images?.[0]?.image} alt='' />
        ) : (
          <div className='image_container'>
            <div className='icon_container'>
              <FaRegImage className='icon_img' />
            </div>
          </div>
        )}

        <button className='button_close'>
          <AiFillCloseCircle
            className='icon_close'
            onClick={() => setSelected(undefined)}
          />
        </button>

        <div className='item_info_container'>
          <h1 className='item_name'>{item.name}</h1>

          <p className='item_description'>{item.description}</p>
        </div>

        {item.modifiers && (
          <>
            <div className='modifiers_header'>
              <h3>Choose your size</h3>
              <p>Select 1 option</p>
            </div>

            {item.modifiers.map((modifier) =>
              modifier.items.map((modifierItem) => (
                <label
                  key={modifierItem.id}
                  htmlFor={`${modifierItem.id}`}
                  className='modifier_item'
                >
                  <div>
                    <p className='modifier_name'>{modifierItem.name}</p>
                    <p className='modifier_price'>
                      {format(modifierItem.price)}
                    </p>
                  </div>

                  <input
                    type='radio'
                    className='input_radio'
                    name={`${modifier.id}`}
                    id={`${modifierItem.id}`}
                    onChange={() => updateModifier(modifierItem)}
                    checked={selectedModifier?.id === modifierItem.id}
                    value={modifierItem.id}
                  />
                </label>
              ))
            )}
          </>
        )}

        <div className='controls_container'>
          <QuantityController
            qty={order?.quantity ?? 0}
            setQuantity={updateQuantity}
          />

          <Button
            text='Add to Order'
            secondText={`${format(order?.price)}`}
            onClick={() => handleOrder(order)}
          />
        </div>
      </div>
    </dialog>,
    document.body
  );
};

export default Modal;
