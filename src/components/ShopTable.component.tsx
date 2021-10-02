interface ShopTableProps {
  shops?: any;
}

export default function ShopTable(props: ShopTableProps) {
  const { shops } = props;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {shops.map((shop: any) => (
        <div
          onClick={() => console.log(`Clicked ${shop.name}`)}
          key={shop.uuid}
          className="pointer relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 hover:bg-gray-100"
        >
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={shop.imageUrl}
              alt=""
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
