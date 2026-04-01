import { Inventory } from "./Inventory";

export interface Comic {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  releaseDate: Date;
  drawer: string;
  writer: string;
  inventory?: Inventory;
}
