import { Typography } from "@mui/material";
import DialogWrapper from "components/DialogWrapper";

const ViewDialog = ({ open, setOpen, data }: any) => {
  return (
    <DialogWrapper open={open} setOpen={setOpen} title="View Inventory">
      <Typography variant="caption">Inventory Name</Typography>
      <Typography variant="h6">{data?.name}</Typography>
    </DialogWrapper>
  );
};

export default ViewDialog;
