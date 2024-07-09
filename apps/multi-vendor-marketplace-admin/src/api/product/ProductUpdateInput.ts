import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type ProductUpdateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  store?: StoreWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
};
