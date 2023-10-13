import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import colorPalette from "../utils/colorPalette";

const AppHeader = () => {
  // State for controlling the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // List of menu items
  const menuItems = (
    <List sx={{ display: "flex", justifyContent: "space-between" }}>
      <ListItem>
        <p>About</p>
      </ListItem>
      <ListItem>
        <p>Ronas</p>
      </ListItem>
      <ListItem>
        <button className="yellowButton">Contact</button>
      </ListItem>
    </List>
  );

  return (
    <AppBar sx={{ background: colorPalette.penGray }} position="static">
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PENTEST TOOL Z
        </Typography>

        {/* Mobile View: Hamburger Icon */}
        <Hidden lgUp>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileMenu}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        {/* Desktop View: Menu Items */}
        <Hidden lgDown>{menuItems}</Hidden>
      </Toolbar>

      {/* Mobile View: Drawer */}
      <Hidden lgUp>
        <Drawer anchor="right" open={mobileMenuOpen} onClose={toggleMobileMenu}>
          <Box p={2}>{menuItems}</Box>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

export default AppHeader;
