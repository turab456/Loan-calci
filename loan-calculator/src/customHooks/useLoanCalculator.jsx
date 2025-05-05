import { useState, useMemo } from 'react';

const exchangeRates = {
  USD: 1,
  INR: 83.25,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 153.19,
  AUD: 1.51,
  CAD: 1.37,
};

const useLoanCalculator = (principal, annualRate, termInYears, selectedCurrency) => {
  // Compute EMI only when principal, rate, or term changes
  const emi = useMemo(() => {
    if (!principal || !annualRate || !termInYears) return 0;

    const r = annualRate / 12 / 100;
    const n = termInYears * 12;

    const calculatedEmi =
      (principal * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    return Number(calculatedEmi.toFixed(2));
  }, [principal, annualRate, termInYears]);

  // Convert EMI when currency changes
  const convertedEmi = useMemo(() => {
    const rate = exchangeRates[selectedCurrency] || 1;
    return Number((emi * rate).toFixed(2));
  }, [emi, selectedCurrency]);

  return { emi, convertedEmi, exchangeRates };
};

export default useLoanCalculator;
