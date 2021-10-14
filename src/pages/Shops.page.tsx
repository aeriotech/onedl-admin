import { Seperator, ShopTable, SlideOver } from '../components';
import { GET_SHOPS } from '../api/graphql';
import { Shops_shops } from '../api/graphql/__generated__/Shops';
import { useQuery } from '@apollo/client';
import Loader from 'react-spinners/RingLoader';
import { PlusIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export default function Shops() {
  const { loading, error, data } = useQuery(GET_SHOPS);
  const [open, setOpen] = useState(false);

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
      <SlideOver isOpen={open} onClose={setOpen} setOpen={setOpen} />
      <div className="flex grid grid-rows-1 gap-4 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Shops</h1>
        <span className="sm:ml-3">
          <button
            onClick={() => {
              setOpen(true);
            }}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Create
          </button>
        </span>
      </div>
      <Seperator height="20px" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <ShopTable shops={shops} />
      </div>
    </div>
  );
}
