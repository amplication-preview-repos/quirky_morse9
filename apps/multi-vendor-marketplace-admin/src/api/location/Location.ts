import { Store } from "../store/Store";

export type Location = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  latitude: number | null;
  longitude: number | null;
  stores?: Array<Store>;
};
