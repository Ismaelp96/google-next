'use client';

import { useEffect, useState } from 'react';

export default function CountryLookup() {
  const [country, setCountry] = useState('United States');

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch('https://extreme-ip-lookup.com/json')
        .then((res) => res.json())
        .then((data) => data.country);
      setCountry(response);
    };
  }, []);

  return <div>{country}</div>;
}
