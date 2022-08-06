import { ThemeProvider } from "@emotion/react";
import {
  createTheme,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Switch,
} from "@mui/material";
import type { AppProps } from "next/app";
import { useState } from "react";
import Header from "../app/layouts/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  const paletteMode = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteMode,
      background: {
        default: darkMode ? "#121212" : "#eaeaea",
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
