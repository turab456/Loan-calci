import React, { lazy } from 'react'
import{ Routes , Route, } from 'react-router-dom'
const Home = lazy(() => import("../pages/Home"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const ExchangeRates = lazy(() => import("../pages/ExchangeRates"));

const AppRoutes = () => {
  return (
    <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exchange-rates" element={<ExchangeRates />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/error_page" element={<ErrorPage />} />
          </Routes>
    </div>
  )
}

export default AppRoutes