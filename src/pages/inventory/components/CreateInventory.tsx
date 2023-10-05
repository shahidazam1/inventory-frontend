import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Stack } from "@mui/material";
import { createInventory, updateInventory } from "api/services/inventory";
import DrawerWrapper from "components/DrawerWrapper";
import FormInput from "components/FormInput";
import { handleError } from "components/HandleError";
import LoadingButton from "components/LoadingButton";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { object, string } from "yup";

let InventorySchema = object().shape({
  name: string()
    .min(3, "Inventory name should be atleast 3 characters")
    .required("Inventory name is required"),
});

interface CreateInventoryTypes {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: Record<string, string> | null;
}
const CreateInventory = ({ open, setOpen, data }: CreateInventoryTypes) => {
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: { name: "" },
    mode: "onChange",
    resolver: yupResolver(InventorySchema),
  });

  useEffect(() => {
    if (data) {
      reset({ name: data?.name || "" });
    }
  }, [data]);

  const { mutate, isLoading } = useMutation(
    data ? updateInventory : createInventory,
    {
      onSuccess: (res) => {
        if (res?.data?.success) {
          toast.success(res.data?.message);
          queryClient.invalidateQueries("all-inventory");
          reset({ name: "" });
          setOpen(false);
        }
      },
      onError: (err) => handleError(err),
    }
  );

  const onFormSubmit = (d: { name: string; _id?: string }) => {
    if (data?.name) {
      mutate({ data: d, id: data?._id });
    } else {
      mutate({ data: d });
    }
  };
  return (
    <DrawerWrapper
      open={open}
      setOpen={setOpen}
      title={data ? "Edit Inventory" : "Add Inventory"}
    >
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Stack p={3} spacing={3}>
          <Box>
            <FormInput
              required
              control={control}
              name="name"
              label="Inventory Name"
            />
          </Box>
          <LoadingButton
            title={data ? "Edit Inventory" : "Add Inventory"}
            loading={isLoading}
            type="submit"
          />
        </Stack>
      </form>
    </DrawerWrapper>
  );
};

export default CreateInventory;
