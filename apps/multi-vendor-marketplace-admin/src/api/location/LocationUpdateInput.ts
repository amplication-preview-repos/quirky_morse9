import { StoreUpdateManyWithoutLocationsInput } from "./StoreUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  latitude?: number | null;
  longitude?: number | null;
  stores?: StoreUpdateManyWithoutLocationsInput;
};
