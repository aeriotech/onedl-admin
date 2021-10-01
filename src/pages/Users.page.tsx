import { Seperator, UserTable } from '../components';

export default function Home() {
  const people = [
    {
      name: 'Jane Cooper',
      username: 'jane',
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      emailVerified: true,
      ageVerified: false,
    },
    {
      name: 'Jane Cooper',
      username: 'jane',
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      emailVerified: false,
      ageVerified: true,
    },
    {
      name: 'Jane Cooper',
      username: 'jane',
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      emailVerified: false,
      ageVerified: false,
    },
    {
      name: 'Jane Cooper',
      username: 'jane',
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      emailVerified: true,
      ageVerified: true,
    },
  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
      </div>
      <Seperator height="20px" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <UserTable people={people} />
      </div>
    </div>
  );
}
