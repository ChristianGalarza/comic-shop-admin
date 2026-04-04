import { Inventory } from "./Inventory";
import { Person } from "./Person";

export interface Comic {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  releaseDate: Date;
  drawer: Person;
  writer: Person;
  coverArtist: Person;
  inventory?: Inventory;
}
