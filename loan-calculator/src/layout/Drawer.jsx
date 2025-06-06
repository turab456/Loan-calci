import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { label: "HOME", path: "/" },
  { label: "EXCHANGE RATES (LIVE)", path: "/exchange-rates" },
  // { label: "ABOUT", path: "/about" },
  { label: "ERROR PAGE", path: "/error_page" },
];
function DrawerAppBar(props) {
  const { window, onToggleChange, toggle } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  backgroundColor: isActive ? "primary.main" : "transparent",
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: isActive
                      ? "primary.dark"
                      : "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemText
                  secondary={
                    item.label.charAt(0).toUpperCase() +
                    item.label.slice(1).toLowerCase()
                  }
                  secondaryTypographyProps={{
                    sx: { color: isActive ? "white" : "black" },
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: "1.4rem" }}
          >
            Loan Calculator
          </Typography>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              paddingY: 1,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: "#fff",
                  fontSize: "1rem",
                  textTransform: "none",
                  borderRadius: "10px",
                  marginRight: 1,
                  paddingX: 3,
                  "&:hover": {
                    backgroundColor:
                      item.label === "HOME" ? "#1565c0" : "transparent",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
            <Switch checked={toggle} onChange={onToggleChange} />
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
