import { useContextModal } from '../../contexts/ModalContext';

import { AiFillCloseCircle } from 'react-icons/ai';

import CounterControl from '../CounterControl';
import Button from '../Button';

import './index.css';

const Modal = () => {
  const { modal, setModal } = useContextModal();
  return (
    <>
      {modal.isOpen && (
        <div className='modal-container'>
          <div className='modal-teste'>
            <div>
              <img
                src={modal.item.images && modal.item.images[0].image}
                alt=''
              />
            </div>

            <div className='item-info'>
              <h1>{modal.item.name}</h1>

              <p>{modal.item.description}</p>
            </div>

            {modal.item.modifiers && (
              <>
                <div className='modifiers-header'>
                  <h3>Choose your size</h3>
                  <p>Select 1 option</p>
                </div>
                {modal.item.modifiers.map((modifiers) => {
                  modifiers.items.map((item) => {
                    return (
                      <div className='modifiers-items'>
                        <div>
                          <p>{item.name}</p>
                          <p>{item.price}</p>
                        </div>

                        <input type='radio' name='' id='' />
                      </div>
                    );
                  });
                })}
              </>
            )}

            <div className='controls-container'>
              <CounterControl />
              <Button>Add to Order R${modal.item.price}</Button>
            </div>

            <AiFillCloseCircle
              onClick={() => setModal({ item: modal.item, isOpen: false })}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
