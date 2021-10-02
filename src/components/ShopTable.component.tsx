interface ShopTableProps {
  shops?: any;
}

export default function ShopTable(props: ShopTableProps) {
  const { shops } = props;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {shops.map((shop: any) => (
        <div
          key={shop.uuid}
          className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={shop.imageUrl}
              alt=""
            />
          </div>
          <div className="flex-1 min-w-0">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{shop.name}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
