import { Location } from "../location/Location";
import { Product } from "../product/Product";

export type Store = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  owner: string | null;
  location?: Location | null;
  products?: Array<Product>;
};
