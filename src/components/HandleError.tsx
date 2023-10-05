import { toast } from "react-toastify";

export const handleError = (err: any) => {
  if (Array.isArray(err?.response?.data?.message)) {
    toast.error(err?.response?.data?.message[0]);
  } else {
    toast.error(err?.response?.data?.message);
  }
};
