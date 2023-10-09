import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Fab, MenuItem, Typography } from "@mui/material";
import { deleteInventory, getAllInventories } from "api/services/inventory";
import { EmptyPageImage } from "assets";
import { useConfirm } from "components/ConfirmDialogProvider";
import EmptyPage from "components/EmptyPage";
import { handleError } from "components/HandleError";
import Loader from "components/Loader";
import MoreSelect from "components/MoreSelect";
import SearchContainer from "components/SearchContainer";
import moment from "moment";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { StyledBox, StyledCenterAlignBox, StyledEndPoint } from "styles";
import CreateInventory from "./CreateInventory";
import ViewDialog from "./ViewDialog";

const DispalyInventory = () => {
  const confirm = useConfirm();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openView, setOpenView] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [editData, setEditData] = useState(null);
  const [viewData, setViewData] = useState(null);

  const { mutate } = useMutation(deleteInventory, {
    onSuccess: (res) => {
      toast.success(res.data.message);
      queryClient.invalidateQueries("all-inventory");
    },
    onError: (err: any) => handleError(err),
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
      <Box p={1}>
        <Box mb={2} display="flex" justifyContent="space-between">
          <SearchContainer
            debounced={true}
            placeHolder="Search by Role Name"
            onChange={setSearch}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              px: 4,
              ml: 2,
              "@media (max-width : 600px)": {
                display: "none",
              },
            }}
            onClick={() => setOpen(true)}
          >
            + Add Inventory
          </Button>
          <Box
            sx={{
              "@media (min-width : 600px)": {
                display: "none",
              },
              position: "absolute",
              bottom: 60,
              right: 60,
            }}
            onClick={() => setOpen(true)}
          >
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Box>
        </Box>
        <Box margin="-10px" mt={2}>
          {isLoading ? (
            <Loader />
          ) : data?.data?.data.length > 0 ? (
            <Box display="flex" flexWrap="wrap" width="100%">
              {data?.data?.data?.map((item: any, index: any) => (
                <StyledEndPoint key={index} margin="10px">
                  <StyledBox>
                    <StyledCenterAlignBox p={2}>
                      <Typography variant="h6">{item?.name}</Typography>
                      <Typography variant="caption">
                        Created on{" "}
                        {moment(item?.createdAt).format("Do MMMM YYYY")}
                      </Typography>
                    </StyledCenterAlignBox>
                    <Box mr={2}>
                      <MoreSelect>
                        <MenuItem
                          onClick={() => (setOpenView(true), setViewData(item))}
                        >
                          View
                        </MenuItem>
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
                  </StyledBox>
                </StyledEndPoint>
              ))}
            </Box>
          ) : (
            <EmptyPage
              image={EmptyPageImage}
              minHeight="70vh"
              title="Inventory"
              desc="There are no items created. Tap on Add Inventory to add"
            />
          )}
        </Box>
      </Box>
      <CreateInventory open={open} setOpen={setOpen} data={null} />
      <CreateInventory open={openEdit} setOpen={setOpenEdit} data={editData} />
      <ViewDialog open={openView} setOpen={setOpenView} data={viewData} />
    </>
  );
};

export default DispalyInventory;
