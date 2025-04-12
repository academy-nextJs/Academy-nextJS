export interface HouseReserveListType {
  id: string;
  title: string;
  address: string;
  photos: string[];
  rate: string;
  price: string;
  tags: string[];
  last_updated: string;
  capacity: number;
  location: {
    lat: number;
    lng: number;
  };
  categories: [
    {
      id: number;
      name: string;
    }
  ];
  bathrooms: number;
  parking: number;
  rooms: number;
  yard_type: string;
  num_comments: number;
  transaction_type: string;
}

export interface HouseReserveListParamsType {
  page: number | undefined;
  limit: number | undefined;
  sort: "price" | "rate" | undefined;
  order: "ASC" | "DESC" | undefined;
  transaction_type: string;
  capacity: string;
  price: string;
  rate: string;
  address: string;
  title: string;
}
