import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <header>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Bumi Store
                </Typography>
            </Toolbar>
        </AppBar>
    </header>
  )
}

export default Header;