import { createTheme, ThemeProvider } from "@mui/material";

export default function MyTheme({ children }) {
  const theme = createTheme({
    palette: {
      red: "#f00",
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
