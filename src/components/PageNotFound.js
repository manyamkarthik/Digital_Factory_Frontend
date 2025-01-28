import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <main className="h-full flex items-center justify-center">
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Oops! Page Not Found
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We couldn't find the page you were looking for. It might have been
          removed, or the URL is incorrect.
        </p>

        <div className="space-x-4">
          <Link
            to="/"
            className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};