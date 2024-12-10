'use client';
import { useState, useEffect } from 'react';
import PropertyCard from '@components/PropertyCard';
import Spinner from '@components/Spinner';
import { PropertyType } from './types';
import axios from 'axios';
import { toast } from 'react-toastify';

const Properties = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get<PropertyType[]>(
          'http://localhost:3000/v1/apartment'
        );

        if (res.status !== 200 || !res.data) {
          throw new Error('Failed to fetch data');
        }
        setProperties(res.data);
        toast.success('Property Added');
      } catch (error: any) {
        console.log('🚀 ~ fetchProperties ~ error:', error);
        console.log(error);
        toast.error(`Failed to delete property + ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  });

  return loading || !properties ? (
    <Spinner />
  ) : (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default Properties;
