import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, CircularProgress, Typography
} from '@mui/material';
import useCurrencyRates from '../customHooks/useCurrencyRates';

const ExchangeRateTable = () => {
  const { rates, loading, error } = useCurrencyRates();

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="currency rates table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Currency</strong></TableCell>
            <TableCell align="right"><strong>Rate (per USD)</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(rates).map(([currency, value]) => (
            <TableRow key={currency}>
              <TableCell>{currency}</TableCell>
              <TableCell align="right">{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExchangeRateTable;
