import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useLoanCalculator from "../customHooks/useLoanCalculator";
const Calculation = ({
  principal,
  annualRate,
  termInYears,
  setCurrency,
  currency,
  setTriggerCalc,
}) => {
  //   const [currency, setCurrency] = useState("USD");

  const { emi, convertedEmi, exchangeRates } = useLoanCalculator(
    principal,
    annualRate,
    termInYears,
    currency
  );

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const currencies = ["USD", "INR", "EUR", "GBP", "JPY", "AUD", "CAD"];

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h6">Monthly EMI: ${`${emi}`} USD</Typography>
        <Box
          sx={{
            minWidth: 120,
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
          }}
        >
          <FormControl>
            <InputLabel id="demo-simple-select-label">Currency</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              label="Currency"
              onChange={handleChange}
            >
              {currencies.map((curr) => (
                <MenuItem key={curr} value={curr}>
                  {curr}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box>
            <Typography variant="h6" sx={{ fontSize: "1rem" }}>
              Converted EMI: {`${convertedEmi} ${currency}`}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Button
        onClick={() => setTriggerCalc(false)}
        variant="outlined"
        sx={{ alignSelf: "center", height: "fit-content" }}
      >
        Reset Table
      </Button>
    </Box>
  );
};

export default Calculation;
