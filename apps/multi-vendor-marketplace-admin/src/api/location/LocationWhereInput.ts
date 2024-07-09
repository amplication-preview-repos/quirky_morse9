import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StoreListRelationFilter } from "../store/StoreListRelationFilter";

export type LocationWhereInput = {
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  stores?: StoreListRelationFilter;
};
