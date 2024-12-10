'use client';
import { PropertyType } from '@/components/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useFetchProperties = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get<PropertyType[]>(
          'http://localhost:3000/v1/apartment'
        );
        setProperties(res.data);
        toast.success('Properties found');
      } catch (error: any) {
        setIsError(true);
        setError(error);
        toast.error('Properties not found');
      } finally {
        setIsLoading(false);
      }
    };
    fetchProperties();
  }, []);

  return { properties, loading: isLoading, isError, error };
};
export default useFetchProperties;
