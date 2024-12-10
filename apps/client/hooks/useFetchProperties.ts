'use client'
import { PropertyType } from '@/components/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchProperties = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get<PropertyType[]>(
          'http://localhost:3000/v1/apartment'
        );
        setProperties(res.data);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        setIsError(true);
        setError(error);
      }
    };
    fetchProperties();
  }, []);

  return { properties, loading: isLoading, isError, error };
};
export default useFetchProperties;
