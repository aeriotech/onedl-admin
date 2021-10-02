import { useQuery } from '@apollo/client';
import Loader from 'react-spinners/RingLoader';
import { GET_DISCOUNTS } from '../api/graphql';
import { DiscountsTable, Seperator } from '../components';

interface Discount {
  uuid: string;
  name: string;
  description: string;
  shop: {
    name: string;
  };
}

export default function Discounts() {
  const { loading, error, data } = useQuery(GET_DISCOUNTS);

  if (loading)
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Discounts</h1>
        </div>
        <Seperator height="20px" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="flex items-center justify-center border-4 border-dashed border-gray-200 rounded-lg h-96">
              <Loader size={150} color={'#FCD34D'} loading={true} />
            </div>
          </div>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Discounts</h1>
        </div>
        <Seperator height="20px" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-center border-4 border-dashed border-gray-200 rounded-lg h-96">
            <h1 className="text-2xl font-semibold text-gray-900">
              There was an error
            </h1>
          </div>
        </div>
      </div>
    );

  const discounts: Array<Discount> = data !== undefined ? data.discounts : [];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Discounts</h1>
      </div>
      <Seperator height="20px" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <DiscountsTable discounts={discounts} />
      </div>
    </div>
  );
}
