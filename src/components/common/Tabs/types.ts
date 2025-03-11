import { CategoriesType, LocationsType } from "@/core/models/house.models";

export interface TabSectionProps {
  location: LocationsType;
  categories: CategoriesType[];
  house_id: string;
}
