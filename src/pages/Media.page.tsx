import { useQuery } from '@apollo/client';
import Loader from 'react-spinners/RingLoader';
import { GET_MEDIA } from '../api/graphql';
import { MediaTable, Seperator } from '../components';

interface File {
  id: number;
  url: string;
  key: string;
  createdAt: string;
  updatedAt: string;
}

export default function Media() {
  const { loading, error, data } = useQuery(GET_MEDIA);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Media</h1>
      </div>
      <Seperator height="20px" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <MediaTable media={media} />
      </div>
    </div>
  );
}
