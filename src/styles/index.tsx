import { Box, styled, Toolbar } from "@mui/material";

export const StyledTop = styled(Box)(() => ({
  zIndex: 1100,
  background: "#26A79B",
  width: "100%",
  position: "fixed",
}));

export const StyledSpaceBetween = styled(Toolbar)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const StyledCenter = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
