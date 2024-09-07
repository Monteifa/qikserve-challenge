import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

interface SectionProps {
  id: number;
  name: string;
  description?: null;
  position: number;
  visible?: number;
  images: {
    id: number;
    image: string;
  }[];
  items: {
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
  }[];
}

interface ContextProps {
  sections: SectionProps[];
  setSections: Dispatch<SetStateAction<SectionProps[]>>;
}

const Context = createContext<ContextProps>({
  sections: [],
  setSections: () => {},
});

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [sections, setSections] = useState<SectionProps[]>([]);

  const memo = useMemo(
    () => ({
      sections,
      setSections,
    }),
    [sections, setSections]
  );
  return <Context.Provider value={memo}>{children}</Context.Provider>;
};

export const useDataContext = () => useContext(Context);
