import { SortOrder } from "../../util/SortOrder";

export type StoreOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  owner?: SortOrder;
  locationId?: SortOrder;
};
