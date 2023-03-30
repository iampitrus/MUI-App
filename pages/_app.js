import { ThemeProvider, useTheme } from "@mui/material";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
