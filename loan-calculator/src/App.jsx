import { lazy, Suspense, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import ResponsiveDrawer from "./layout/Drawer";
import Loader from "./components/Loader";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExchangeRates from "./pages/ExchangeRates";

const Home = lazy(() => import("./pages/Home"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exchange-rates" element={<ExchangeRates />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/error_page" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Box>
    </ThemeProvider>
  );
}

export default App;
