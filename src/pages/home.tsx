import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledCenter } from "styles";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClickStart = () => {
    navigate("/inventory");
  };
  return (
    <StyledCenter sx={{ height: "65vh" }}>
      <Box textAlign="center">
        <Typography variant="h5">
          Welcome to Inventory Management App :)
        </Typography>
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          color="primary"
          onClick={handleClickStart}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Let's Start
        </Button>
      </Box>
    </StyledCenter>
  );
};

export default HomePage;
