import { lazy, Suspense, useState } from "react";
import {useLocation } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import ResponsiveDrawer from "./layout/Drawer";
import Loader from "./components/Loader";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./routes/AppRoutes";


const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const location = useLocation();
  const isErrorPage = location.pathname === "/error_page";

  const [toggle, setToggle] = useState(false);

  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeProvider theme={toggle ? darkTheme : lightTheme}>
      <CssBaseline />
      {!isErrorPage && (
        <ResponsiveDrawer toggle={toggle} onToggleChange={handleToggleChange} />
      )}
      <Box sx={{ mt: !isErrorPage ? 8 : 0, p: 2 }}>
        <Suspense fallback={<Loader />}>
         <AppRoutes/>
        </Suspense>
      </Box>
    </ThemeProvider>
  );
}

export default App;
