import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Loader from 'react-spinners/RingLoader';
import { GET_USER } from '../api/graphql';
import { Seperator, UserForm } from '../components';

export default function UserView() {
  const { username }: any = useParams();
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      username: username,
    },
  });

  const user: any = data?.user;

  if (loading)
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            {user?.profile.firstName} {user?.profile.lastName}
          </h1>
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
          <h1 className="text-2xl font-semibold text-gray-900">
            {user?.profile.firstName} {user?.profile.lastName}
          </h1>
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

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          {user?.profile.firstName} {user?.profile.lastName}
        </h1>
      </div>
      <Seperator height="20px" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <UserForm user={user} />
      </div>
    </div>
  );
}
