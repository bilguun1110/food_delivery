"use client";
import { lime, purple } from "@mui/material/colors";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#18BA51",
      contrastText: "white",
      light: "#42a5f5",
      dark: "#18BA51",
    },
    secondary: {
      main: "#fff",
    },
  },
});
