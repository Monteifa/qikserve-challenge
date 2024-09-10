import { createContext, ReactNode, useContext, useState } from 'react';

import { Restaurant } from '../types/restaurant.types';
import { Menu } from '../types/menu.types';

interface ContextProps {
  restaurant?: Restaurant;
  setRestaurant: (data: Restaurant) => void;
  menu?: Menu;
  setMenu: (data: Menu) => void;
}

const Context = createContext<ContextProps>({} as ContextProps);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [menu, setMenu] = useState<Menu>();

  return (
    <Context.Provider value={{ restaurant, setRestaurant, menu, setMenu }}>
      {children}
    </Context.Provider>
  );
};

export const useDataContext = () => useContext(Context);
