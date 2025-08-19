
"use client"; // important: runs on client

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1818c8",  
    },
    secondary: {
      main: "#8c52ff",
    },
  },
});

export default theme;
