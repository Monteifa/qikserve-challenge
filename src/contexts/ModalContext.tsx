import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface ModalProps {
  isOpen: boolean;
  item: {
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
  };
}

interface ModalContextProps {
  modal: ModalProps;
  setModal: Dispatch<SetStateAction<ModalProps>>;
}

const INITIAL_STATE_MODAL = {
  isOpen: false,
  item: {
    id: 0,
    name: '',
    description: '',
    alcoholic: 0,
    price: 0,
    position: 0,
    visible: 0,
    availabilityType: '',
    sku: '',
    images: [
      {
        id: 0,
        image: '',
      },
    ],
    modifiers: [
      {
        items: [
          {
            name: '',
            price: 0,
          },
        ],
      },
    ],
    available: true,
  },
};

const ModalContext = createContext<ModalContextProps>({
  modal: INITIAL_STATE_MODAL,
  setModal: () => {},
});

export const ModalContextProider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<ModalProps>(INITIAL_STATE_MODAL);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useContextModal = () => useContext(ModalContext);
