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

export const StyledEndPoint = styled(Box)(() => ({
  "@media (min-width : 1200px)": {
    width: "calc(25% - 20px)",
  },
  "@media (max-width : 1200px)": {
    width: "calc(33.33% - 20px)",
  },
  "@media (max-width : 720px)": {
    width: "calc(50% - 20px)",
  },
  "@media (max-width : 500px)": {
    width: "calc(100% - 20px)",
  },
  backgroundColor: "white",
  borderRadius: "5px",
}));

export const StyledBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
}));
export const StyledCenterAlignBox = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const StyledBox2 = styled(Box)(() => ({}));
export const StyledBox3 = styled(Box)(() => ({}));
