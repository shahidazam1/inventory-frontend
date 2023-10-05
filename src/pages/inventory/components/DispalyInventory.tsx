import { Box, Button, MenuItem, Typography } from "@mui/material";
import { deleteInventory, getAllInventories } from "api/services/inventory";
import { useConfirm } from "components/ConfirmDialogProvider";
import Loader from "components/Loader";
import MoreSelect from "components/MoreSelect";
import SearchContainer from "components/SearchContainer";
import moment from "moment";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import CreateInventory from "./CreateInventory";

const DispalyInventory = () => {
  const confirm = useConfirm();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [editData, setEditData] = useState(null);

  const { mutate } = useMutation(deleteInventory, {
    onSuccess: (res) => {
      toast.success(res.data.message);
      queryClient.invalidateQueries("all-inventory");
    },
    onError: (err: any) => {
      if (Array.isArray(err?.response?.data?.message)) {
        toast.error(err?.response?.data?.message[0]);
      } else {
        toast.error(err?.response?.data?.message);
      }
    },
  });

  const { data, isLoading } = useQuery(
    ["all-inventory", { search: search }],
    getAllInventories
  );

  const handleDelete = (id: any) => {
    confirm({
      msg: "Are you sure you want to delete this Inventory?",
      action: () => {
        mutate({ id: id });
      },
    });
  };

  return (
    <>
      <Box p={3}>
        <Box mb={2} display="flex" justifyContent="space-between">
          <Box display="flex">
            <SearchContainer
              debounced={true}
              minWidth="550px"
              placeHolder="Search by Role Name"
              onChange={setSearch}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ px: 4, ml: 2 }}
            onClick={() => setOpen(true)}
          >
            + Add Inventory
          </Button>
        </Box>
        <Box margin="-10px" mt={2}>
          {isLoading ? (
            <Loader />
          ) : data?.data?.data.length > 0 ? (
            <Box display="flex" flexWrap="wrap" width="100%">
              {data?.data?.data?.map((item: any, index: any) => (
                <Box
                  key={index}
                  margin="10px"
                  sx={{
                    "@media (min-width : 1200px)": {
                      width: "calc(25% - 20px)",
                    },
                    "@media (max-width : 1200px)": {
                      width: "calc(33.33% - 20px)",
                    },
                    "@media (max-width : 720px)": {
                      width: "calc(50% - 20px)",
                    },
                    "@media (max-width : 500px)": {
                      width: "calc(100% - 20px)",
                    },
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <Box
                      p={2}
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="h6">{item?.name}</Typography>
                      <Typography variant="caption">
                        Created on{" "}
                        {moment(item?.createdAt).format("Do MMMM YYYY")}
                      </Typography>
                    </Box>
                    <Box mr={2}>
                      <MoreSelect>
                        <MenuItem
                          onClick={() => (setOpenEdit(true), setEditData(item))}
                        >
                          Edit
                        </MenuItem>
                        <MenuItem onClick={() => handleDelete(item?._id)}>
                          Remove
                        </MenuItem>
                      </MoreSelect>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          ) : (
            <Box
              width="70vw"
              height="70vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="body2">No Data</Typography>
            </Box>
          )}
        </Box>
      </Box>
      <CreateInventory open={open} setOpen={setOpen} data={null} />
      <CreateInventory open={openEdit} setOpen={setOpenEdit} data={editData} />
    </>
  );
};

export default DispalyInventory;
