import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { ProductUpdateManyWithoutStoresInput } from "./ProductUpdateManyWithoutStoresInput";

export type StoreUpdateInput = {
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  location?: LocationWhereUniqueInput | null;
  products?: ProductUpdateManyWithoutStoresInput;
};
