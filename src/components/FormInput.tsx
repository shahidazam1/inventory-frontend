import { TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

interface Props {
  label?: string;
  name: string;
  size?: "small" | "medium";
  control: any;
  multiline?: boolean;
  required?: boolean;
  type?: string;
}

function FormInput(props: Props) {
  const {
    type = "text",
    name,
    size = "small",
    control,
    label = "",
    multiline,
    required = false,
  } = props;

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <TextField
              error={Boolean(error)}
              type={type}
              label={`${label} ${required ? "*" : ""}`}
              fullWidth
              multiline={multiline}
              rows={multiline ? 2 : 1}
              size={size}
              {...field}
            />
            {error && (
              <Typography
                variant="caption"
                sx={{ pl: "2px", display: "block" }}
                color="rgb(211, 47, 47)"
              >
                {error.message}
              </Typography>
            )}
          </>
        )}
      />
    </>
  );
}

export default FormInput;
