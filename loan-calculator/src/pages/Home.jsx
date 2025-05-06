import { Box, TextField, Typography, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import AmortizationEMi from "../components/AmortizationEMi";
import Calculation from "../components/Calculation";

const Home = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [term, setTerm] = useState(5);
  const [triggerCalc, setTriggerCalc] = useState(false);
 const [currency, setCurrency] = useState("USD");
  const handleCalculate = () => {
    setTriggerCalc(true); 
  };

  return (
    <Box
      sx={{
        paddingX: { xs: 1, md: 6 },
        paddingY: { xs: 0, md: 4 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "2rem" },
          mb: 3,
        }}
      >
        Loan Calculator Dashboard
      </Typography>

      <Box component="form" noValidate autoComplete="off" sx={{ mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              label="Loan Amount"
              // type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              fullWidth
              sx={{ "& .MuiInputBase-root": { height: "65px" } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              label="Interest Rate (%)"
              // type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              fullWidth
              sx={{ "& .MuiInputBase-root": { height: "65px" } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              label="Term (Years)"
              // type="number"
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
              fullWidth
              sx={{ "& .MuiInputBase-root": { height: "65px" } }}
            />
          </Grid>
        </Grid>
      </Box>

      <Button
        variant="contained"
        onClick={handleCalculate}
        sx={{
          height: "45px",
          width: "150px",
          fontSize: "1rem",
          boxShadow: 2,
        }}
      >
        CALCULATE
      </Button>

      {triggerCalc && (
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <div>
            <Calculation
              principal={loanAmount}
              annualRate={interestRate}
              termInYears={term}
              currency={currency} 
              setCurrency={setCurrency}
              setTriggerCalc={setTriggerCalc}
            />
          </div>
          <div>
            <AmortizationEMi
              principal={loanAmount}
              annualRate={interestRate}
              termInYears={term}
              currencySymbol={currency}
              conversionRate={1}
            />
          </div>
        </Box>
      )}
    </Box>
  );
};

export default Home;
