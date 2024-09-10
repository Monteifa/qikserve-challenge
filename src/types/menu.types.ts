export interface Image {
  id: number;
  image: string;
}

export interface ItemsModifiers {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
}

export interface Modifiers {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: Array<ItemsModifiers>;
}

export interface Items {
  id: number;
  name: string;
  description?: string;
  alcoholic: number;
  price: number;
  position: number;
  visible?: number | undefined;
  availabilityType: string;
  sku?: string;
  images?: Array<Image>;
  modifiers?: Array<Modifiers>;
  available: boolean;
}

export interface Section {
  id: number;
  name: string;
  description: string | undefined;
  position: number;
  visible: number;
  images: Array<Image>;
  items: Array<Items>;
}

export interface Menu {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: Array<Section>;
}
