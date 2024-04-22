import { IModifierGroups } from "./modifier-groups.mode";

export interface IFoodItem {
  id: string;
  name: string;
  bio: string;
  image: string;
  price: number;
  modifier_groups: IModifierGroups[];
}