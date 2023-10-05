import { Avatar, Box } from "@mui/material";
import { logoWithName } from "assets";
import { useNavigate } from "react-router-dom";
import { StyledSpaceBetween, StyledTop } from "styles";

const Header = () => {
  const navigate = useNavigate();
  const handleClickLogo = () => {
    navigate("/");
  };

  return (
    <StyledTop>
      <StyledSpaceBetween>
        <Box sx={{ cursor: "pointer" }} onClick={handleClickLogo}>
          <img src={logoWithName} alt="logo" width={110} />
        </Box>
        <Box>
          <Avatar src="" alt="name" />
        </Box>
      </StyledSpaceBetween>
    </StyledTop>
  );
};

export default Header;
