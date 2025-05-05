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
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { label: "HOME", path: "/" },
  { label: "EXCHANGE RATES (LIVE)", path: "/exchange-rates" },
  { label: "ABOUT", path: "/about" },
  { label: "ERROR PAGE", path: "/error" },
];
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        Loan Calculator
      </Typography> */}
      {/* <Divider /> */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
            //   sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
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

  {/* Desktop nav buttons */}
  <Box
    sx={{
      display: { xs: "none", sm: "flex" },
      alignItems: "center",
      paddingY: 3,
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
          paddingX: 5,
          "&:hover": {
            backgroundColor: "#1565c0",
          },
        }}
      >
        {item.label}
      </Button>
    ))}
  </Box>

  {/* Toggle switch visible on all screen sizes */}
  <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
    <Switch checked={toggle} onChange={handleToggleChange} />
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
