import { cyan } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  trello: {
    appBarHeight: "48px",
    boardBarHeight: "58px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: cyan[500] },
      },
    },
    dark: {
      palette: {
        primary: { main: cyan[900] },
      },
    },
  },
  // ...other properties
});

export default theme;
