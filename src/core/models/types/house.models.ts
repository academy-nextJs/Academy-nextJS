export type LocationsType = {
  lat: number;
  lng: number;
};

export type CategoriesType = {
  id: number;
  name: string;
};

export type GetSingleHouseType = {
  id: string;
  title: string;
  address: string;
  photos: string[];
  rate: string;
  price: string;
  tags: string[];
  last_updated: string;
  capacity: number;
  location: LocationsType;
  categories: CategoriesType[];
  bathrooms: number;
  parking: number;
  rooms: number;
  yard_type: string;
  num_comments: number;
  transaction_type: string;
};
