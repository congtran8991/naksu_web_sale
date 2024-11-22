import { createTheme } from "@mui/material";
import { green, pink } from "@mui/material/colors";

const primaryTheme = createTheme({
  spacing: 10,
  palette: {},
  typography: {},
});

const secondaryTheme = createTheme({
  spacing: 10,
  palette: {
    primary: green,
  },
  typography: {
    fontSize: 10,
  },
});

export { primaryTheme, secondaryTheme };
