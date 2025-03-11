type TravelerDetailsType = {
  name: string;
  userId: number;
  contact: string;
};

export type CreateBookingParamsType = {
  id: string;
  house_id: string;
  reserved_dates: [string, string];
  traveler_details?: TravelerDetailsType;
};
