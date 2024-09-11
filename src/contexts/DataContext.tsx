import { createContext, ReactNode, useContext, useState } from 'react';

import { Restaurant } from '../types/restaurant.types';
import { Menu } from '../types/menu.types';

interface ContextProps {
  restaurant?: Restaurant;
  setRestaurant: (data: Restaurant) => void;
  menu?: Menu;
  setMenu: (data: Menu) => void;
  loading: boolean;
  setLoading: (state: boolean) => void;
}

const Context = createContext<ContextProps>({} as ContextProps);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [menu, setMenu] = useState<Menu>();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{ restaurant, setRestaurant, menu, setMenu, loading, setLoading }}
    >
      {children}
    </Context.Provider>
  );
};

export const useDataContext = () => useContext(Context);
