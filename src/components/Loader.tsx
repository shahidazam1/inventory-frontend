import { Box } from "@mui/system";
import "styles/loader.css";

interface LoaderProps {
  minHeight?: string | number;
  color?: string;
}

function Loader(props: LoaderProps) {
  const { minHeight = 400, color = "primary.main" } = props;

  return (
    <>
      <Box
        sx={{
          minHeight,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="loader"></span>
      </Box>
    </>
  );
}

export default Loader;
