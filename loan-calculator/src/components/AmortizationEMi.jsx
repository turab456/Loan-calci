import * as React from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

function generateAmortizationSchedule(
  principal,
  annualRate,
  termInYears,
  conversionRate
) {
  const monthlyRate = annualRate / 12 / 100;
  const totalMonths = termInYears * 12;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  let balance = principal;
  const schedule = [];

  for (let month = 1; month <= totalMonths; month++) {
    const interest = balance * monthlyRate;
    const principalPayment = emi - interest;
    balance -= principalPayment;

    schedule.push({
      month,
      principal: principalPayment * conversionRate,
      interest: interest * conversionRate,
      balance: (balance < 0 ? 0 : balance) * conversionRate,
    });
  }

  return schedule;
}

export default function AmortizationEMi({
  principal,
  annualRate,
  termInYears,
  currencySymbol,
  conversionRate,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const amortizationRows = generateAmortizationSchedule(
    principal,
    annualRate,
    termInYears,
    conversionRate
  );
  const columns = [
    { id: "month", label: "Month", minWidth: 100 },
    {
      id: "principal",
      label: "Principal",
      minWidth: 100,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "interest",
      label: "Interest",
      minWidth: 100,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "balance",
      label: "Remaining Balance",
      minWidth: 120,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Box sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 }, pt: 1 }}>
        <Typography variant="h6">
          Amortization Schedule ({currencySymbol})
        </Typography>
      </Box>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="amortization schedule">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {amortizationRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, idx) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === "month"
                          ? value 
                          : (column.format ? column.format(value) : value) +" "+
                            currencySymbol}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={amortizationRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
