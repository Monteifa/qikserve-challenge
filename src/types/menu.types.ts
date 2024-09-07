export interface ImageProps {
  id: number;
  image: string;
}

export interface ItemsModifiersProps {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
}

export interface ModifiersProps {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: Array<ItemsModifiersProps>;
}

export interface ItemsProps {
  id: number;
  name: string;
  description?: string;
  alcoholic: number;
  price: number;
  position: number;
  visible?: number | undefined;
  availabilityType: string;
  sku?: string;
  images?: Array<ImageProps>;
  modifiers?: ModifiersProps;
  available: boolean;
}

export interface SectionProps {
  id: number;
  name: string;
  description: string | undefined;
  position: number;
  visible: number;
  images: Array<ImageProps>;
  items: Array<ItemsProps>;
}

export interface MenuProps {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: Array<SectionProps>;
}
