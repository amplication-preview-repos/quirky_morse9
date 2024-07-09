import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type StoreWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  owner?: StringNullableFilter;
  location?: LocationWhereUniqueInput;
  products?: ProductListRelationFilter;
};
