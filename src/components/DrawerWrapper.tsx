import { Close } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

interface IDrawerWrapperProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
  width?: number;
  isAppBar?: boolean;
}

function DrawerWrapper(props: IDrawerWrapperProps) {
  const {
    open,
    setOpen,
    title,
    children,
    width = 550,
    isAppBar = true,
  } = props;

  return (
    <Drawer
      anchor="right"
      PaperProps={{ sx: { width } }}
      open={open}
      onClose={() => setOpen(false)}
    >
      {isAppBar && (
        <AppBar position="static">
          <Toolbar
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              {title}
            </Typography>
            <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
      <Box>{children}</Box>
    </Drawer>
  );
}

export default DrawerWrapper;
