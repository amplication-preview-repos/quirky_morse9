import { StoreCreateNestedManyWithoutLocationsInput } from "./StoreCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  latitude?: number | null;
  longitude?: number | null;
  stores?: StoreCreateNestedManyWithoutLocationsInput;
};
