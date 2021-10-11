import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { EDIT_USER, EDIT_PROFILE, DELETE_PFP } from '../api/graphql';
import { Seperator } from '.';
import { useHistory } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/solid';
import { store } from 'react-notifications-component';

interface UserFormProps {
  user: any;
}

export default function UserForm(props: UserFormProps) {
  const [updateUser, { loading, error }] = useMutation(EDIT_USER);
  const [updateProfile, { loading: loadingProfile, error: errorProfile }] =
    useMutation(EDIT_PROFILE);
  const [deletePfp, { loading: loadingPfp, error: errorPfp }] =
    useMutation(DELETE_PFP);

  const history = useHistory();

  const { user } = props;
  const [userData, setUserData] = useState({
    firstName: user?.profile?.firstName || 'Existing',
    lastName: user?.profile?.lastName || 'User',
    bio: user?.profile?.bio || 'About this person',
    email: user?.email || 'someone@email.com',
    username: user?.username || 'someone',
  });

  useEffect(() => {
    setUserData({
      firstName: user?.profile?.firstName || 'Existing',
      lastName: user?.profile?.lastName || 'User',
      bio: user?.profile?.bio || 'About this person',
      email: user?.email || 'someone@email.com',
      username: user?.username || 'someone',
    });
  }, [loading, loadingProfile, loadingPfp, user]);

  const handleChange = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  if (loading || loadingProfile || loadingPfp)
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">User</h1>
        </div>
        <Seperator height="20px" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-center border-4 border-dashed border-gray-200 rounded-lg h-96">
            <h1 className="text-2xl font-semibold text-gray-900">Submitting</h1>
          </div>
        </div>
      </div>
    );
  if (error || errorProfile || errorPfp)
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">User</h1>
        </div>
        <Seperator height="20px" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-center border-4 border-dashed border-gray-200 rounded-lg h-96">
            <h1 className="text-2xl font-semibold text-gray-900">
              Submission error! $
              {error?.message || errorProfile?.message || errorPfp?.message}`
            </h1>
          </div>
        </div>
      </div>
    );

  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8">
          <div className="mt-1 flex items-center">
            <span className="h-20 w-20 rounded-full overflow-hidden bg-gray-100">
              <img
                className="h-22 w-full text-gray-300"
                src={
                  user?.profile.profilePicture?.url ||
                  'https://placekitten.com/1500/1500'
                }
                alt="Profile pic"
              />
            </span>
            <span className="sm:ml-3">
              <button
                onClick={() => {
                  store.addNotification({
                    title: 'Sorry :(',
                    message: 'This feature is currently in development',
                    type: 'warning',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['animated', 'fadeIn'],
                    animationOut: ['animated', 'fadeOut'],
                    dismiss: {
                      duration: 5000,
                      onScreen: true,
                    },
                  });
                }}
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
              >
                <TrashIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Delete
              </button>
            </span>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={userData.firstName}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={userData.lastName}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <div className="mt-1">
                <textarea
                  id="bio"
                  name="bio"
                  rows={3}
                  className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={userData.bio}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={userData.username}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={userData.email}
                onChange={handleChange}
                className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            onClick={(e: any) => {
              e.preventDefault();
              updateUser({
                variables: {
                  username: user?.username,
                  usernameNew: userData.username,
                  email: userData.email,
                },
              });
              updateProfile({
                variables: {
                  firstName: userData.firstName,
                  lastName: userData.lastName,
                  bio: userData.bio,
                  id: user?.profile?.id,
                },
              });
              history.push(`/user/${userData.username}`);
              setTimeout(() => {
                window.location.reload();
              }, 500);
            }}
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
