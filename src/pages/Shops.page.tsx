import { Seperator, ShopTable } from '../components';
import { GET_SHOPS } from '../api/graphql';
import { Shops_shops } from '../api/graphql/__generated__/Shops';
import { useQuery } from '@apollo/client';
import Loader from 'react-spinners/RingLoader';

export default function Shops() {
  const { loading, error, data } = useQuery(GET_SHOPS);

  if (loading)
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Shops</h1>
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
          <h1 className="text-2xl font-semibold text-gray-900">Shops</h1>
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

  const shops: Array<Shops_shops> = data !== undefined ? data.shops : [];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Shops</h1>
      </div>
      <Seperator height="20px" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <ShopTable shops={shops} />
      </div>
    </div>
  );
}
