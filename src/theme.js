import { cyan, red, teal } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  trello: {
    appBarHeight: "56px",
    boardBarHeight: "56px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: teal[400] },
        secondary: red,
      },
    },
    dark: {
      palette: {
        primary: { main: cyan[900] },
        secondary: red,
      },
    },
  },
  components: {
    // Name of the component
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },

          "*::-webkit-scrollbar-thumb": {
            background: "#bdc3c7",
            borderRadius: "8px",
          },

          "*::-webkit-scrollbar-thumb:hover": {
            background: "#00b894",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: "0.875rem",
            fontWeight: "bold",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
            },
            "&:hover": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.dark,
              },
            },
          };
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: "0.875rem",
          };
        },
      },
    },
  },
});

export default theme;
