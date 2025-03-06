type TCategoriesHotel = {
  id: number;
  name: string;
};

export type THouseDetailsResponse = {
  id: number;
  title: string;
  address: string;
  photos: string[];
  rate: string;
  price: string;
  tags: string[];
  last_updated: string;
  capacity: number;
  location: { lat: number; lng: number };
  categories: TCategoriesHotel[];
  bathrooms: number;
  parking: number;
  rooms: number;
  yard_type: string;
  num_comments: number;
  transaction_type: string;
};
