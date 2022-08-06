import React from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";

interface IHeaderProps {
  darkMode: boolean;
  handleThemeChange: () => void;
}
const pages = ["Catalog", "About", "Contact"];

const Header: React.FC<IHeaderProps> = ({ darkMode, handleThemeChange }) => {
  return (
    <header>
      <AppBar position="static" sx={{ mb: 4 }}>
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
                  inputProps={{ "aria-label": "theme-change" }}
                />
              }
              label={darkMode ? "Light Mode" : "Dark Mode"}
            />
          </FormControl>
          <Box
            justifyContent="center"
            alignItems="center"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                position: "absolute",
                left: "0",
                right: "0",
                mx: "auto",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
