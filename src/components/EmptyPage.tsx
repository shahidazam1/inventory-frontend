import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface EmptyPageProps {
  btnTitle?: string;
  btnAction?: () => void;
  btn2Title?: string;
  btn2Action?: () => void;
  minHeight?: string;
  title?: string;
  desc?: string;
  noImage?: boolean;
  image?: any;
  btn1StartIcon?: any;
  btn2StartIcon?: any;
}

function EmptyPage(props: EmptyPageProps) {
  const {
    btnTitle,
    btnAction,
    minHeight = "80vh",
    title = "List is empty",
    desc = "",
    noImage = false,
    btn1StartIcon,
    image,
  } = props;
  return (
    <Box
      sx={{
        display: "flex",
        minHeight,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box textAlign="center" maxWidth={560}>
        {!noImage && <img src={image} style={{ maxWidth: 300 }} alt="" />}
        <Typography mt={2} mb={1} variant="h5">
          {title}
        </Typography>
        <Typography mb={2} variant="body1">
          {desc}
        </Typography>
        <Box display="flex" justifyContent="center" gap={1}>
          {btnTitle && (
            <Button
              variant="contained"
              color="primary"
              startIcon={btn1StartIcon}
              onClick={btnAction}
            >
              {btnTitle}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default EmptyPage;
