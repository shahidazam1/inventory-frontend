import { http } from "api/http";
import { QueryType } from "api/types";

const deleteInventory = ({ id }: { id: string }) => {
  return http.delete(`/inventory/${id}`);
};

const getAllInventories = ({ queryKey }: QueryType | any) => {
  return http.get(`/inventory`, {
    params: { ...queryKey[1] },
  });
};

const createInventory = (data: InventoryDataType) => {
  return http.post("/inventory", data.data);
};

const updateInventory = ({ data, id }: UpdateInventoryDataType) => {
  return http.patch(`/inventory/${id}`, data);
};

export { createInventory, deleteInventory, getAllInventories, updateInventory };

interface InventoryDataType {
  data: Record<string, string>;
}

interface UpdateInventoryDataType extends InventoryDataType {
  id?: string;
}
