'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PropertyHeaderImage from '@components/PropertyHeaderImage';
import PropertyDetails from '@components/PropertyDetails';
import PropertyImages from '@components/PropertyImages';
import Spinner from '@components/Spinner';
import { FaArrowLeft } from 'react-icons/fa';
import { PropertyType } from '@/components/types';
import axios from 'axios';
import useFetchProperty from '@/hooks/useFetchProperty';

const PropertyPage = () => {
  const { id } = useParams();
  const { loading, property } = useFetchProperty(id as string);

  if (!property && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      {loading && <Spinner />}
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.photos[0]} />
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-blue-500 hover:text-blue-600 flex items-center"
              >
                <FaArrowLeft className="mr-2" /> Back to Properties
              </Link>
            </div>
          </section>

          <section className="bg-blue-50">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <PropertyDetails property={property} />
              </div>
            </div>
          </section>
          <PropertyImages photos={property.photos} />
        </>
      )}
    </>
  );
};
export default PropertyPage;
