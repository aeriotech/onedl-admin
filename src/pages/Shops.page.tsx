import { Seperator, ShopTable } from '../components';

export default function Shops() {
  const shops = [
    {
      name: 'Wolt',
      uuid: 'wolt',
      imageUrl:
        'https://cdn.freelogovectors.net/wp-content/uploads/2020/11/wolt-logo.png',
    },
    {
      name: 'McDonalds',
      uuid: 'mcdonalds',
      imageUrl:
        'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png',
    },
  ];

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
