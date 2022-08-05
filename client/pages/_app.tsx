import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline, FormControl, FormControlLabel, Switch } from '@mui/material';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Header from '../app/layouts/Header';

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  const paletteMode = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteMode,
    }
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  }

  const DarkModeSwitch: React.FC= () => (
    <FormControl>
        <FormControlLabel 
          control={
            <Switch
              checked={darkMode}
              onChange={handleThemeChange}
              inputProps={{ 'aria-label': 'theme-change' }}
            />}
          label={darkMode? 'Light Mode': 'Dark Mode'}
        />
    </FormControl>
  );

  return (
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header DarkModeSwitch={DarkModeSwitch}/>
      <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp;
