import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { ProductCreateNestedManyWithoutStoresInput } from "./ProductCreateNestedManyWithoutStoresInput";

export type StoreCreateInput = {
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  location?: LocationWhereUniqueInput | null;
  products?: ProductCreateNestedManyWithoutStoresInput;
};
