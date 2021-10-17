import { useQuery } from '@apollo/client';
import { PlusIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Loader from 'react-spinners/RingLoader';
import { GET_MEDIA } from '../api/graphql';
import { MediaTable, Seperator, CreateFile } from '../components';

interface File {
  id: number;
  url: string;
  key: string;
  createdAt: string;
  updatedAt: string;
}

export default function Media() {
  const { loading, error, data } = useQuery(GET_MEDIA);
  const [open, setOpen] = useState(false);

  if (loading)
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Media</h1>
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
          <h1 className="text-2xl font-semibold text-gray-900">Media</h1>
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

  console.log(data);

  const media: Array<File> = data !== undefined ? data.files : [];

  return (
    <div className="py-6">
      <CreateFile isOpen={open} onClose={setOpen} setOpen={setOpen} />
      <div className="flex grid grid-rows-1 gap-4 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Media</h1>
        <span className="sm:ml-3">
          <button
            onClick={() => {
              setOpen(true);
            }}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Add
          </button>
        </span>
      </div>
      <Seperator height="20px" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <MediaTable media={media} />
      </div>
    </div>
  );
}
