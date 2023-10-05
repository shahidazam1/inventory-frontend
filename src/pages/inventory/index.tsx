import { useState } from "react";
import { useQuery } from "react-query";

import { getAllInventories } from "api/services/inventory";
import { EmptyPageImage } from "assets";
import EmptyPage from "components/EmptyPage";
import Loader from "components/Loader";
import CreateInventory from "./components/CreateInventory";
import DispalyInventory from "./components/DispalyInventory";

const Inventory = () => {
  const [open, setOpen] = useState(false);

  const { data, isLoading } = useQuery("all-inventory", getAllInventories);

  if (isLoading) return <Loader />;

  return (
    <div>
      {data?.data?.data?.length > 0 ? (
        <DispalyInventory />
      ) : (
        <EmptyPage
          image={EmptyPageImage}
          btnTitle="Add Inventory"
          btnAction={() => setOpen(true)}
          title="Inventory"
          desc="There are no items created. Tap on Add Inventory to add"
        />
      )}
      <CreateInventory open={open} setOpen={setOpen} data={null} />
    </div>
  );
};

export default Inventory;
