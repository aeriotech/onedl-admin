import { Shops_shops } from '../api/graphql/__generated__/Shops';

interface ShopTableProps {
  shops?: Shops_shops[];
}

export default function ShopTable(props: ShopTableProps) {
  const { shops } = props;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {shops?.map((shop: Shops_shops) => (
        <div
          onClick={() => console.log(`Clicked ${shop.name}`)}
          key={shop.uuid}
          className="pointer relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 hover:bg-gray-100"
        >
          <div className="flex-shrink-0">
            <img
              className="h-14 w-14 rounded-md"
              src={shop.logo?.url || 'https://placekitten.com/1500/1500'}
              alt="shop logo"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{shop.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
