import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import ResponsiveDrawer from './layout/Drawer';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <ResponsiveDrawer/> */}
   <Router>
      <ResponsiveDrawer />
      <Box sx={{ mt: 8, p: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/exchange-rates" element={<ExchangeRates />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Box>
    </Router>
    </>
  )
}

export default App
