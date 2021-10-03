import { ReactSVG } from 'react-svg';

interface MediaTableProps {
  media?: any;
}

interface File {
  id: number;
  url: string;
  key: string;
  createdAt: string;
  updatedAt: string;
}

export default function MediaTable(props: MediaTableProps) {
  const { media } = props;

  return (
    <>
      {!media || media.length === 0 ? (
        <div className="py-4 ">
          <h1 className="text-2xl font-semibold text-gray-900">
            There are no files
          </h1>
        </div>
      ) : (
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {media.map((file: File) => (
            <li key={file.id} className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                {file.url.substring(file.url.length - 3) === 'svg' ? (
                  <ReactSVG
                    src={file.url}
                    alt=""
                    className="media-file object-cover pointer-events-none group-hover:opacity-75"
                  />
                ) : (
                  <img
                    src={file.url}
                    alt=""
                    className="media-file object-cover pointer-events-none group-hover:opacity-75"
                  />
                )}
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">View details for {file.key}</span>
                </button>
              </div>
              <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                {file.key}
              </p>
              <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                {new Date(file.createdAt).toLocaleDateString('si-sl', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
