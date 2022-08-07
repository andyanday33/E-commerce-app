import React from "react";
import {
  AppBar,
  Badge,
  Button,
  ButtonGroup,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ShoppingCart } from "@mui/icons-material";

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
            <a style={{ textDecoration: "none", color: "white" }}>
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
          {/* TODO: split these button groups inside a new component called NavigationButtons */}
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
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    "&:hover": {
                      color: "#ef9a9a",
                    },
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </ButtonGroup>
          <IconButton
            size="large"
            sx={{
              position: "relative",
              display: "flex",
              ml: "auto",
              color: "white",
              "&:hover": {
                color: "#ef9a9a",
              },
            }}
          >
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <ButtonGroup
            variant="text"
            sx={{
              position: "relative",
              display: "flex",
            }}
          >
            {functionalities.map((functionality) => (
              <Link
                key={functionality}
                href={`/${functionality.toLowerCase()}`}
              >
                <Button
                  href={functionality.toLowerCase()}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    "&:hover": {
                      color: "#ef9a9a",
                    },
                  }}
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
