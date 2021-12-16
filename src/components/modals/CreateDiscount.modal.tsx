import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { GET_SHOPS, CREATE_DISCOUNT } from '../../api/graphql';
import { useMutation, useQuery } from '@apollo/client';
import { store } from 'react-notifications-component';

interface SlideOverProps {
  isOpen: boolean;
  onClose: any;
  setOpen: any;
}

export default function SlideOver(props: SlideOverProps) {
  const { data: shopsData } = useQuery(GET_SHOPS);
  const [createDiscount, { error }] = useMutation(CREATE_DISCOUNT);

  const { isOpen, onClose, setOpen } = props;
  const [data, setData] = useState({
    name: '',
    description: '',
    shopId: '',
    imageId: '',
    thumbnailId: '',
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const shops: Array<any> = shopsData !== undefined ? shopsData.shops : [];

  if (error) {
    store.addNotification({
      title: 'Error',
      message: error.message,
      type: 'danger',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={onClose}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 pl-16 max-w-full right-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                  <div className="flex-1 h-0 overflow-y-auto">
                    <div className="py-6 px-4 bg-yellow-400 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium text-white">
                          New Discount
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="bg-yellow-400 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="px-4 divide-y divide-gray-200 sm:px-6">
                        <div className="space-y-6 pt-6 pb-5">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Name
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="name"
                                id="name"
                                value={data.name}
                                onChange={handleChange}
                                className="block w-full shadow-sm sm:text-sm focus:ring-yellow-300 focus:border-yellow-400 border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="uuid"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Description
                            </label>
                            <div className="mt-1">
                              <textarea
                                name="description"
                                id="description"
                                rows={3}
                                value={data.description}
                                onChange={handleChange}
                                className="block w-full shadow-sm sm:text-sm focus:ring-yellow-300 focus:border-yellow-400 border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Image ID (number)
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="imageId"
                                id="imageId"
                                value={data.imageId}
                                onChange={handleChange}
                                className="block w-full shadow-sm sm:text-sm focus:ring-yellow-300 focus:border-yellow-400 border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Thumbnail ID (number)
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="thumbnailId"
                                id="thumbnailId"
                                value={data.thumbnailId}
                                onChange={handleChange}
                                className="block w-full shadow-sm sm:text-sm focus:ring-yellow-300 focus:border-yellow-400 border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Shop
                            </label>
                            <div className="mt-1">
                              {shops !== null && shops.length !== 0 ? (
                                <select
                                  name="shopId"
                                  id="shopId"
                                  value={data.shopId}
                                  onChange={handleChange}
                                  className="text-grey-700 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm"
                                >
                                  {shops?.map((shop: any) => (
                                    <option key={shop.id} value={shop.id}>
                                      {shop.name}
                                    </option>
                                  ))}
                                </select>
                              ) : (
                                <p>
                                  No shops available.{' '}
                                  <a href="/shops">Create one here</a>
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        let shopId = parseInt(data.shopId);
                        let imageId = parseInt(data.imageId);
                        let thumbnailId = parseInt(data.thumbnailId);
                        setOpen(false);
                        console.log(data);
                        createDiscount({
                          variables: {
                            name: data.name,
                            description: data.description,
                            shopId: shopId,
                            imageId: imageId,
                            thumbnailId: thumbnailId,
                          },
                        });
                        store.addNotification({
                          title: 'Success',
                          message: 'Successfully created discount!',
                          type: 'success',
                          insert: 'top',
                          container: 'top-right',
                          animationIn: ['animated', 'fadeIn'],
                          animationOut: ['animated', 'fadeOut'],
                          dismiss: {
                            duration: 5000,
                            onScreen: true,
                          },
                        });
                        // window.location.reload();
                      }}
                      className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
