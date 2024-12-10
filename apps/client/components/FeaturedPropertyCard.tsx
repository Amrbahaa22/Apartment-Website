import Image from 'next/image';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCouch,
} from 'react-icons/fa';
import { PropertyType } from './types';

const FeaturedPropertyCard: React.FC<{ property: PropertyType }> = ({
  property,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative flex flex-col md:flex-row">
      <Image
        src={property.images[0]}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl w-full md:w-2/5"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold">{property.title}</h3>
        <div className="text-gray-600 mb-4">{property.type}</div>
        <h3 className="absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          ${property.price}
        </h3>
        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed className="inline-block mr-2" /> {property.rooms}{' '}
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className="inline-block mr-2" /> {property.baths}{' '}
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline-block mr-2" />
            {property.area} <span className="md:hidden lg:inline">sqft</span>
          </p>
          <p>
            <FaCouch /> {property.furnishingStatus}
          </p>
        </div>
      </div>
    </div>
  );
};
export default FeaturedPropertyCard;