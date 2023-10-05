import { createTheme, ThemeOptions } from "@mui/material/styles";

export const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#245D6B",
      light: "rgb(36, 94, 107,0.1)",
      dark: "rgb(36, 94, 107,0.8)",
    },
    secondary: {
      main: "#FF4F3D",
      light: "rgb(247, 50, 30, 0.1)",
      dark: "rgb(247, 50, 30, 1)",
    },
    background: {
      default: "#ffffff",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontFamily: "poppins_regular",
          fontSize: "14px",
          borderRadius: "5px",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            background: "#FFFFFF",
          },
          "& .MuiFilledInput-root:hover": {
            background: "#FFFFFF",
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
              background: "#FFFFFF",
            },
          },
          "& .MuiFilledInput-root.Mui-focused": {
            background: "#FFFFFF",
          },
          // maxWidth: 600,
          fontFamily: "poppins_medium",
          color: "rgba(255, 255, 255)",
          variant: "filled",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          fontFamily: "poppins_light",
          color: "#151515",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "poppins_light",
          color: "#151515",
          opacity: "70%",
          fontSize: "12px",
        },
        shrink: ({ ownerState }) => ({
          ...(ownerState.shrink && {
            fontSize: "0.9rem !important",
            // top: "-1 !important",
          }),
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        formControl: {
          fontFamily: "poppins_regular",
          color: "#151515",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "poppins_regular",
          color: "#151515",
          fontSize: "13px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: "0px 2px 10px #0000001A",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 5px 20px #0000001A",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 5px 20px #0000001A",
          borderRadius: "8px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: "poppins_regular",
          color: "#151515",
          fontSize: "11px",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          fontFamily: "poppins_regular",
          color: "#151515",
        },
        option: {
          fontFamily: "poppins_regular",
          color: "#151515",
          fontSize: "12px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#151515",
          fontFamily: "poppins_regular",
        },
        h1: {
          color: "#151515",
          fontFamily: "poppins_bold",
        },
        h2: {
          color: "#151515",
          fontFamily: "poppins_bold",
        },
        h3: {
          color: "#151515",
          fontFamily: "poppins_bold",
        },
        h4: {
          color: "#151515",
          fontFamily: "poppins_bold",
          fontSize: "38px",
        },
        h5: {
          color: "#151515",
          fontFamily: "poppins_semibold",
          fontSize: "16px",
        },
        h6: {
          color: "#151515",
          fontFamily: "poppins_semibold",
          fontSize: "14px",
        },
        subtitle1: {
          color: "#151515",
          fontFamily: "poppins_semibold",
          fontSize: "22px",
        },
        subtitle2: {
          color: "#151515",
          fontFamily: "poppins_semibold",
          fontSize: "15px",
        },
        body1: {
          color: "#151515",
          fontFamily: "poppins_medium",
          fontSize: "14px",
        },
        body2: {
          color: "#151515",
          fontFamily: "poppins_medium",
          opacity: "85%",
          fontSize: "12px",
        },
        caption: {
          color: "#151515",
          fontFamily: "poppins_regular",
          fontSize: "10px",
          opacity: "65%",
        },
      },
    },
  },
});
