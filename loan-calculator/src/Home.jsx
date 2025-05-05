import { Box, TextField, Typography, Button, Grid } from "@mui/material";
import React from "react";
import StickyHeadTable from './Table'
const Home = () => {
  const inputFields = [
    { label: "Loan Amount", defaultValue: "100000" },
    { label: "Interest Rate (%)", defaultValue: "8.5" },
    { label: "Term (Years)", defaultValue: "5" },
  ];

  return (
    <Box
      sx={{
        paddingX: {
          xs: 1,
          md: 6,
        },
        paddingY: {
          xs: 0,
          md: 4,
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
            lg: "3rem",
          },
          mb: 3,
        }}
      >
        Loan Calculator Dashboard
      </Typography>

      <Box
        component="form"
        sx={{
          mb: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          {inputFields.map((field, index) => (
            <Grid
              item
              xs={12} // This makes the input take the full width on extra small screens
              sm={6} // This makes the input take 50% width on small screens
              md={4} // This makes the input take 33% width on medium screens
              key={index}
            >
              <TextField
                required
                label={field.label}
                defaultValue={field.defaultValue}
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    height: "65px",
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Button
        variant="contained"
        sx={{
          height: "45px",
          width: "150px",
          fontSize: "1rem",
          boxShadow: 2,
        }}
      >
        CALCULATE
      </Button>
      <StickyHeadTable/>
    </Box>
  );
};

export default Home;
