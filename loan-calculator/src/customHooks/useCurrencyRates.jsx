import { useState, useEffect } from 'react';
import axios from 'axios';

const useCurrencyRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchRates = async () => {
    try {
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/c470d06c901cbd54bd640512/latest/USD`
      );
      if (response.data.result === 'success') {
        setRates(response.data.conversion_rates);
      } else {
        setError('Failed to fetch conversion rates');
      }
    } catch (err) {
      setError('An error occurred while fetching data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  return { rates, loading, error };
};

export default useCurrencyRates;
