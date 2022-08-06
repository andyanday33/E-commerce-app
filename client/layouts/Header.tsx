import React from "react";
import {
  AppBar,
  Button,
  ButtonGroup,
  Divider,
  FormControl,
  FormControlLabel,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

interface IHeaderProps {
  darkMode: boolean;
  handleThemeChange: () => void;
}
const pages = ["Catalog", "About", "Contact"];
const functionalities = ["Login", "Register"];

const Header: React.FC<IHeaderProps> = ({ darkMode, handleThemeChange }) => {
  return (
    <header>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Link href="/">
            <a style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography variant="h6" sx={{ mx: 4 }}>
                Bumi Store
              </Typography>
            </a>
          </Link>

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
          <ButtonGroup
            variant="text"
            sx={{
              position: "absolute",
              display: "flex",
              mx: "auto",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
          >
            {pages.map((page) => (
              <Link key={page} href={`/${page.toLowerCase()}`}>
                <Button
                  href={page.toLowerCase()}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </ButtonGroup>
          <ButtonGroup
            variant="text"
            sx={{
              position: "relative",
              display: "flex",
              ml: "auto",
            }}
          >
            {functionalities.map((functionality) => (
              <Link
                key={functionality}
                href={`/${functionality.toLowerCase()}`}
              >
                <Button
                  href={functionality.toLowerCase()}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {functionality}
                </Button>
              </Link>
            ))}
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
