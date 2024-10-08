export interface Restaurant {
  id: number;
  name: string;
  internalName: string;
  description: string | undefined;
  liveFlag: number;
  demoFlag: number;
  address1: string;
  address2: string;
  address3: string | undefined;
  city: string;
  county: string;
  postcode: string;
  country: string;
  timezoneOffset: string;
  locale: string;
  timeZone: string;
  webSettings: {
    id: number;
    venueId: number;
    bannerImage: string;
    backgroundColour: string;
    primaryColour: string;
    primaryColourHover: string;
    navBackgroundColour: string;
  };
  ccy: string;
  ccySymbol: string;
  currency: string;
}
