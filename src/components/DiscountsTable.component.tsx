interface DiscountsTableProps {
  discounts?: any;
}

interface Discount {
  uuid: string;
  name: string;
  description: string;
  shop: {
    name: string;
  };
}

export default function DiscountsTable(props: DiscountsTableProps) {
  const { discounts } = props;

  return (
    <>
      {!discounts || discounts.length === 0 ? (
        <div className="py-4 ">
          <h1 className="text-2xl font-semibold text-gray-900">
            There are no discounts
          </h1>
        </div>
      ) : (
        <div>
          <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {discounts.map((discount: Discount) => (
              <li
                key={discount.name}
                className="disable-select pointer hover:bg-gray-100 col-span-1 flex shadow-sm rounded-md"
              >
                <div className="bg-yellow-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">
                  DSC
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <p className="text-gray-900 font-medium">{discount.name}</p>
                    <p className="text-gray-500">{discount.shop.name}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
