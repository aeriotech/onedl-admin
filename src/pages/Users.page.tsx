import { Seperator, UserTable } from '../components';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../api/graphql';
import RingLoader from 'react-spinners/RingLoader';

interface User {
  username: string;
  email: string;
  profile: {
    firstName: string;
    lastName: string;
    profilePicture: {
      url: string;
    };
  };
  emailConfirmed: boolean;
  ageConfirmed: boolean;
}

export default function Home() {
  const { loading, error, data } = useQuery(GET_USERS);
  console.log(data);

  if (loading)
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
        </div>
        <Seperator height="20px" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <div className="items-center">
                <RingLoader size={150} color={'#123abc'} loading={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
        </div>
        <Seperator height="20px" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"></div>
      </div>
    );

  const users: Array<User> = data !== undefined ? data.users : [];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
      </div>
      <Seperator height="20px" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <UserTable users={users} />
      </div>
    </div>
  );
}
