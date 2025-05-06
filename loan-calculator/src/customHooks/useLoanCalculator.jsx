import { useState, useMemo } from 'react';
import exchangeRates from '../constants/exchangeRates';



const useLoanCalculator = (principal, annualRate, termInYears, selectedCurrency) => {
  const emi = useMemo(() => {
    if (!principal || !annualRate || !termInYears) return 0;

    const r = annualRate / 12 / 100;
    const n = termInYears * 12;

    const calculatedEmi =
      (principal * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    return Number(calculatedEmi.toFixed(2));
  }, [principal, annualRate, termInYears]);

  const convertedEmi = useMemo(() => {
    const rate = exchangeRates[selectedCurrency] || 1;
    return Number((emi * rate).toFixed(2));
  }, [emi, selectedCurrency]);

  return { emi, convertedEmi, exchangeRates };
};

export default useLoanCalculator;
