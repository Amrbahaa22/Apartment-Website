'use client';
import PropertyCard from '@components/PropertyCard';
import Spinner from '@components/Spinner';
import { toast } from 'react-toastify';
import useFetchProperties from '@/hooks/useFetchProperties';

const Properties = () => {
  const { properties, loading, isError, error } = useFetchProperties();

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
