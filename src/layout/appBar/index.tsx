import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppBarLayout = () => {
  return (
    <>
      <Header />
      <Box p={4} pt={12}>
        <Outlet />
      </Box>
    </>
  );
};

export { AppBarLayout };
