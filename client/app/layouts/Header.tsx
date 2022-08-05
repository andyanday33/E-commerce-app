import React from 'react';
import { AppBar, Divider, FormControl, FormControlLabel, Switch, Toolbar, Typography } from '@mui/material';

interface IHeaderProps {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const Header: React.FC<IHeaderProps> = ({ darkMode, handleThemeChange }) => {
  return (
    <header>
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6" sx={{ mx: 4 }}>
                    Bumi Store
                </Typography>
                <Divider />
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
            </Toolbar>
        </AppBar>
    </header>
  )
}

export default Header;