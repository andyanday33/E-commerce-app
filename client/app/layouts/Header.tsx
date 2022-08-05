import React from 'react';
import { AppBar, Divider, Toolbar, Typography } from '@mui/material';

interface IHeaderProps {
    DarkModeSwitch: React.FC;
}

const Header: React.FC<IHeaderProps> = ({ DarkModeSwitch }) => {
  return (
    <header>
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6" sx={{ mx: 4 }}>
                    Bumi Store
                </Typography>
                <Divider />
                <DarkModeSwitch />
            </Toolbar>
        </AppBar>
    </header>
  )
}

export default Header;